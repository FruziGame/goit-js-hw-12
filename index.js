import{S as p,i as u,a as f}from"./assets/vendor-DjDxajEQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();const h=document.querySelector(".gallery"),y=new p(".gallery a",{captionsData:"alt"}),v={render:b};function b(r){const t=r.hits.map(e=>`<div>
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
    `).join("");h.insertAdjacentHTML("beforeend",t),y.refresh()}const d=document.querySelector(".loader"),l=document.querySelector(".load-button"),L="https://pixabay.com/api/",$="46290930-3746f5b7b54e4eb8c1145cc43";let n=1;const q=3;let i="";async function w(r,t=!1){t&&(n=1),console.log(`Fetching images for: "${r}", page: ${n}`);try{const e=await f.get(L,{params:{key:$,q:i,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:q}});return console.log(`Response received for page: ${n}`),n++,e.data}catch(e){throw console.error("Ошибка:",e),e}}function m(r,t=!1){console.log(`Handling images for: "${r}", isNewSearch: ${t}`),i=r;const e=document.querySelector(".gallery");d.classList.add("visible"),console.log(`Handling images for: "${r}", isNewSearch: ${t}`),w(i,t).then(a=>{if(t&&(e.innerHTML=""),a.hits.length===0){u.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}console.log(`Rendering ${a.hits.length} images`),v.render(a),d.classList.remove("visible"),l.classList.add("visible")}).catch(a=>{u.show({color:"red",message:"An error occurred during the request.",position:"topRight"})}).finally(()=>{d.classList.remove("visible"),l.disabled=!1})}l.addEventListener("click",()=>{if(console.log("Load More clicked"),console.log(`Current inputText before loading more: "${i}"`),!i){console.warn("No input text provided. Ignoring Load More request.");return}l.disabled=!0,m(i,!1)});const S={handleImages:m},g=document.querySelector(".form"),I=document.querySelector(".form-input");g.addEventListener("submit",r=>{r.preventDefault();const t=I.value.trim();t===""?u.show({color:"white",message:"Please fill the input",position:"topRight"}):S.handleImages(t,!0),g.reset()});
//# sourceMappingURL=index.js.map
