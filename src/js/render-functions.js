import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";


const gallery = document.querySelector(".gallery");



const lightbox = new SimpleLightbox('.gallery a', {          
    captionsData: 'alt'             
  });   

export const renderHTML = {
    render
};


function render(data) {
    const markup = data.hits.map(e => `<div class="card">
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
    `).join("");

    gallery.insertAdjacentHTML('beforeend', markup);
    lightbox.refresh();
}