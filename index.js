import{S as h,i as c,a as y}from"./assets/vendor-DjDxajEQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const s of o)if(s.type==="childList")for(const d of s.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function e(o){const s={};return o.integrity&&(s.integrity=o.integrity),o.referrerPolicy&&(s.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?s.credentials="include":o.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function a(o){if(o.ep)return;o.ep=!0;const s=e(o);fetch(o.href,s)}})();const v=document.querySelector(".gallery"),b=new h(".gallery a",{captionsData:"alt"}),L={render:$};function $(r){const t=r.hits.map(e=>`<div>
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
    `).join("");v.insertAdjacentHTML("beforeend",t),b.refresh()}const u=document.querySelector(".loader"),n=document.querySelector(".load-button"),q=document.querySelector("#second-loader"),w="https://pixabay.com/api/",S="46290930-3746f5b7b54e4eb8c1145cc43";let i=1;const m=15;let l="",f=0;async function P(r,t=!1){t&&(i=1),console.log(`Fetching images for: "${r}", page: ${i}`);try{const e=await y.get(w,{params:{key:S,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:m}});return console.log(`Response received for page: ${i}`),f=e.data.totalHits,i++,e.data}catch(e){throw console.error("Ошибка:",e),e}}function p(r,t=!1){console.log(`Handling images for: "${r}", isNewSearch: ${t}`),l=r;const e=document.querySelector(".gallery");u.classList.add("visible"),console.log(`Handling images for: "${r}", isNewSearch: ${t}`),P(l,t).then(a=>{if(t&&(e.innerHTML=""),a.hits.length===0){c.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}console.log(`Rendering ${a.hits.length} images`),L.render(a),f<=i*m&&(n.classList.add("invisible"),c.show({color:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}).catch(a=>{c.show({color:"red",message:"An error occurred during the request.",position:"topRight"})}).finally(()=>{u.classList.remove("visible"),!t&&data.hits.length>0&&(q.classList.remove("visible"),n.classList.remove("invisible"))})}n.addEventListener("click",()=>{n.classList.add("invisible"),console.log("Load More clicked"),console.log(`Current inputText before loading more: "${l}"`),n.disabled=!0,p(l,!1)});const R={handleImages:p},g=document.querySelector(".form"),H=document.querySelector(".form-input");g.addEventListener("submit",r=>{r.preventDefault();const t=H.value.trim();t===""?c.show({color:"white",message:"Please fill the input",position:"topRight"}):R.handleImages(t,!0),g.reset()});
//# sourceMappingURL=index.js.map
