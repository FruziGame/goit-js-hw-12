import{S as h,i as l,a as y}from"./assets/vendor-DjDxajEQ.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const r of o)if(r.type==="childList")for(const c of r.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&a(c)}).observe(document,{childList:!0,subtree:!0});function e(o){const r={};return o.integrity&&(r.integrity=o.integrity),o.referrerPolicy&&(r.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?r.credentials="include":o.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(o){if(o.ep)return;o.ep=!0;const r=e(o);fetch(o.href,r)}})();const v=document.querySelector(".gallery"),L=new h(".gallery a",{captionsData:"alt"}),b={render:$};function $(s){const t=s.hits.map(e=>`<div>
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
    `).join("");v.insertAdjacentHTML("beforeend",t),L.refresh()}const g=document.querySelector(".loader"),n=document.querySelector(".load-button");document.querySelector("#second-loader");const q="https://pixabay.com/api/",w="46290930-3746f5b7b54e4eb8c1145cc43";let i=1;const S=15;let d="",p=0,u=0;async function P(s,t=!1){t&&(i=1,u=0),console.log(`Fetching images for: "${s}", page: ${i}`);try{const e=await y.get(q,{params:{key:w,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,page:i,per_page:S}});return console.log(`Response received for page: ${i}`),p=e.data.totalHits,i++,e.data}catch(e){throw console.error("Ошибка:",e),e}}function f(s,t=!1){console.log(`Handling images for: "${s}", isNewSearch: ${t}`),d=s;const e=document.querySelector(".gallery");g.classList.add("visible"),console.log(`Handling images for: "${s}", isNewSearch: ${t}`),P(s,t).then(a=>{if(t&&(e.innerHTML=""),a.hits.length===0){l.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}),n.classList.add("invisible");return}console.log(`Rendering ${a.hits.length} images`),b.render(a),u+=a.hits.length,u>=p?(n.classList.add("invisible"),l.show({color:"info",message:"We're sorry, but you've reached the end of search results.",position:"topRight"})):n.classList.remove("invisible")}).catch(a=>{l.show({color:"red",message:"An error occurred during the request.",position:"topRight"})}).finally(()=>{g.classList.remove("visible")})}n.addEventListener("click",()=>{n.classList.add("invisible"),console.log("Load More clicked"),console.log(`Current inputText before loading more: "${d}"`),f(d,!1)});const R={handleImages:f},m=document.querySelector(".form"),H=document.querySelector(".form-input");m.addEventListener("submit",s=>{s.preventDefault();const t=H.value.trim();t===""?l.show({color:"white",message:"Please fill the input",position:"topRight"}):R.handleImages(t,!0),m.reset()});
//# sourceMappingURL=index.js.map
