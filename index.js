import{S as h,i as c,a as y}from"./assets/vendor-DjDxajEQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&a(d)}).observe(document,{childList:!0,subtree:!0});function e(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerPolicy&&(o.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?o.credentials="include":s.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function a(s){if(s.ep)return;s.ep=!0;const o=e(s);fetch(s.href,o)}})();const v=document.querySelector(".gallery"),b=new h(".gallery a",{captionsData:"alt"}),L={render:$};function $(i){const t=i.hits.map(e=>`<div>
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
    `).join("");v.insertAdjacentHTML("beforeend",t),b.refresh()}const u=document.querySelector(".loader"),r=document.querySelector(".load-button");document.querySelector("#second-loader");const q="https://pixabay.com/api/",w="46290930-3746f5b7b54e4eb8c1145cc43";let n=1;const m=15;let l="",p=0;async function S(i,t=!1){t&&(n=1),console.log(`Fetching images for: "${i}", page: ${n}`);try{const e=await y.get(q,{params:{key:w,q:l,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:m}});return console.log(`Response received for page: ${n}`),p=e.data.totalHits,n++,e.data}catch(e){throw console.error("Ошибка:",e),e}}function f(i,t=!1){console.log(`Handling images for: "${i}", isNewSearch: ${t}`),l=i;const e=document.querySelector(".gallery");u.classList.add("visible"),console.log(`Handling images for: "${i}", isNewSearch: ${t}`),S(l,t).then(a=>{if(t&&(e.innerHTML=""),a.hits.length===0){c.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),r.classList.add("invisible");return}console.log(`Rendering ${a.hits.length} images`),L.render(a),a.hits.length>0?p>(n-1)*m?r.classList.add("visible"):(r.classList.add("invisible"),c.show({color:"info",message:"Извините, но вы достигли конца результатов поиска.",position:"topRight"})):r.classList.add("invisible")}).catch(a=>{c.show({color:"red",message:"An error occurred during the request.",position:"topRight"})}).finally(()=>{u.classList.remove("visible")})}r.addEventListener("click",()=>{r.classList.add("invisible"),console.log("Load More clicked"),console.log(`Current inputText before loading more: "${l}"`),r.disabled=!0,f(l,!1)});const P={handleImages:f},g=document.querySelector(".form"),R=document.querySelector(".form-input");g.addEventListener("submit",i=>{i.preventDefault();const t=R.value.trim();t===""?c.show({color:"white",message:"Please fill the input",position:"topRight"}):P.handleImages(t,!0),g.reset()});
//# sourceMappingURL=index.js.map
