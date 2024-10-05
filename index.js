import{S as m,i as n}from"./assets/vendor-5ObWk2rO.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))o(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&o(i)}).observe(document,{childList:!0,subtree:!0});function e(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(t){if(t.ep)return;t.ep=!0;const r=e(t);fetch(t.href,r)}})();const h=document.querySelector(".gallery"),p=document.querySelector(".loader"),f=new m(".gallery a",{captionsData:"alt"}),g={render:y};function y(a){const s=a.hits.map(e=>`<div>
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
    `).join("");h.innerHTML=s,p.classList.remove("visible"),f.refresh()}const c=document.querySelector(".loader"),v="https://pixabay.com/api/",L="46290930-3746f5b7b54e4eb8c1145cc43";function u(a){const s=`&q=${encodeURIComponent(a)}&image_type=photo&orientation=horizontal&safesearch=true`,e=`${v}?key=${L}${s}`;return fetch(e).then(o=>o.json()).then(o=>o).catch(o=>{throw console.error("Ошибка:",o),o})}function b(a){const s=document.querySelector(".gallery");c.classList.add("visible"),u(a).then(e=>{s.innerHTML="",e.hits.length===0?n.show({color:"red",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"}):g.render(e)}).catch(e=>{n.show({color:"red",message:"An error occurred during the request.",position:"topRight"})}).finally(()=>{c.classList.remove("visible")})}const q={getImages:u,handleImages:b},l=document.querySelector(".form"),d=document.querySelector(".form-input");l.addEventListener("submit",a=>{if(a.preventDefault(),d.value.trim()==="")n.show({color:"white",message:"Please fill the input",position:"topRight"});else{const s=d.value;q.handleImages(s)}l.reset()});
//# sourceMappingURL=index.js.map
