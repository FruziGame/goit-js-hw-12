import{S as p,i as l,a as y}from"./assets/vendor-DjDxajEQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(s){if(s.ep)return;s.ep=!0;const r=e(s);fetch(s.href,r)}})();const v=document.querySelector(".gallery"),b=new p(".gallery a",{captionsData:"alt"}),L={render:$};function $(o){const t=o.hits.map(e=>`<div class="card">
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
    `).join("");v.insertAdjacentHTML("beforeend",t),b.refresh()}const g=document.querySelector(".loader"),i=document.querySelector(".load-button");document.querySelector("#second-loader");const q="https://pixabay.com/api/",w="46290930-3746f5b7b54e4eb8c1145cc43";let n=1;const S=15;let d="",h=0,u=0;async function R(o,t=!1){t&&(n=1,u=0,i.classList.add("visible")),console.log(`Fetching images for: "${o}", page: ${n}`);try{const e=await y.get(q,{params:{key:w,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:n,per_page:S}});return console.log(`Response received for page: ${n}`),h=e.data.totalHits,n++,e.data}catch(e){throw console.error("Ошибка:",e),e}}function f(o,t=!1){console.log(`Handling images for: "${o}", isNewSearch: ${t}`),d=o;const e=document.querySelector(".gallery");return g.classList.add("visible"),console.log(`Handling images for: "${o}", isNewSearch: ${t}`),R(o,t).then(a=>{if(t&&(e.innerHTML=""),a.hits.length===0){i.classList.add("invisible"),l.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}console.log(`Rendering ${a.hits.length} images`),L.render(a),u+=a.hits.length,u>=h?(i.classList.add("invisible"),l.show({color:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):i.classList.remove("invisible")}).catch(a=>{l.show({color:"red",message:"An error occurred during the request.",position:"topRight"})}).finally(()=>{g.classList.remove("visible")})}i.addEventListener("click",()=>{i.classList.add("invisible"),console.log("Load More clicked"),console.log(`Current inputText before loading more: "${d}"`),f(d,!1).then(()=>{H()})});function H(){const o=document.querySelector(".gallery .card");if(o){const t=o.getBoundingClientRect().height;window.scrollBy({top:t*3,behavior:"smooth"})}}const P={handleImages:f},m=document.querySelector(".form"),I=document.querySelector(".form-input");m.addEventListener("submit",o=>{o.preventDefault();const t=I.value.trim();t===""?l.show({color:"white",message:"Please fill the input",position:"topRight"}):P.handleImages(t,!0),m.reset()});
//# sourceMappingURL=index.js.map
