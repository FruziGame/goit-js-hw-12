import{S as f,i as d,a as p}from"./assets/vendor-DjDxajEQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const h=document.querySelector(".gallery"),y=new f(".gallery a",{captionsData:"alt"}),v={render:b};function b(r){const t=r.hits.map(e=>`<div>
        <a href="${e.largeImageURL}" class="image-link">
                <img src="${e.webformatURL}" class="image" alt="${e.tags}" title="${e.tags}" />
                <div class="data">
                    <div>
                        <h2 class="data-image">Likes</h2>
                        <span class="data-quantity">${e.likes}</span>
                    </div>
                    <div>
                        <h2 class="data-image">Views</h2>
                        <span class="data-quantity">${e.views}</span>
                    </div>
                    <div>
                        <h2 class="data-image">Comments</h2>
                        <span class="data-quantity">${e.comments}</span>
                    </div>
                    <div>
                        <h2 class="data-image">Downloads</h2>
                        <span class="data-quantity">${e.downloads}</span>
                    </div>
                </div>
        </a></div>
    `).join("");h.insertAdjacentHTML("beforeend",t),y.refresh()}const u=document.querySelector(".loader"),i=document.querySelector(".load-button"),L=document.querySelector("#second-loader"),$="https://pixabay.com/api/",q="46290930-3746f5b7b54e4eb8c1145cc43";let n=1;const w=15;let l="";async function S(r,t=!1){t&&(n=1),console.log(`Fetching images for: "${r}", page: ${n}`);try{const e=await p.get($,{params:{key:q,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:w}});return console.log(`Response received for page: ${n}`),n++,e.data}catch(e){throw console.error("Ошибка:",e),e}}function m(r,t=!1){console.log(`Handling images for: "${r}", isNewSearch: ${t}`),l=r;const e=document.querySelector(".gallery");u.classList.add("visible"),console.log(`Handling images for: "${r}", isNewSearch: ${t}`),S(l,t).then(a=>{if(t&&(e.innerHTML=""),a.hits.length===0){d.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}console.log(`Rendering ${a.hits.length} images`),v.render(a)}).catch(a=>{d.show({color:"red",message:"An error occurred during the request.",position:"topRight"})}).finally(()=>{u.classList.remove("visible"),i.classList.add("visible"),i.disabled=!1,t||(L.classList.remove("visible"),i.classList.remove("invisible"))})}i.addEventListener("click",()=>{i.classList.add("invisible"),console.log("Load More clicked"),console.log(`Current inputText before loading more: "${l}"`),i.disabled=!0,m(l,!1)});const P={handleImages:m},g=document.querySelector(".form"),I=document.querySelector(".form-input");g.addEventListener("submit",r=>{r.preventDefault();const t=I.value.trim();t===""?d.show({color:"white",message:"Please fill the input",position:"topRight"}):P.handleImages(t,!0),g.reset()});
//# sourceMappingURL=index.js.map
