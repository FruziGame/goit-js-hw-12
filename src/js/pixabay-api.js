import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import axios from 'axios';

import { renderHTML } from './render-functions';

const loader = document.querySelector(".loader")
const loadButton = document.querySelector(".load-button");
const secondLoader = document.querySelector("#second-loader");


const url = `https://pixabay.com/api/`;
const API_KEY = '46290930-3746f5b7b54e4eb8c1145cc43';

let page = 1;
const perPage = 15;
let inputText = '';
let totalHits = 0;
let totalLoaded = 0;


async function getImages(text, isNewSearch = false) {

    if (isNewSearch) {
        page = 1;
        totalLoaded = 0;
        loadButton.classList.add('visible');
    }

    console.log(`Fetching images for: "${text}", page: ${page}`); 

    try {
        const response = await axios.get(url, {
            params: {
                key: API_KEY,
                q: text,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: perPage
            } 
        }); 


        console.log(`Response received for page: ${page}`); 

        totalHits = response.data.totalHits;
        page++;
        return response.data; 
    } catch (error) {
        console.error('Ошибка:', error);
        throw error; 
    }
}




function handleImages(text, isNewSearch = false) {

    console.log(`Handling images for: "${text}", isNewSearch: ${isNewSearch}`);
    inputText = text;
    const gallery = document.querySelector('.gallery');
    loader.classList.add("visible");



    console.log(`Handling images for: "${text}", isNewSearch: ${isNewSearch}`); 
    return getImages(text, isNewSearch)
        .then(data => {

            if (isNewSearch) {
                gallery.innerHTML = '';
            }


            if (data.hits.length === 0) {
                loadButton.classList.add('invisible');
                iziToast.show({
                    color: 'red',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight"
                });
                return;
            }
            
            console.log(`Rendering ${data.hits.length} images`);
            renderHTML.render(data);

            totalLoaded += data.hits.length;


            if (totalLoaded >= totalHits) {
                loadButton.classList.add('invisible');
                iziToast.show({
                    color: 'info',
                    message: "We're sorry, but you've reached the end of search results.",
                    position: "topRight"
                });
            } else {
                loadButton.classList.remove('invisible');
            }
            
        })
        .catch(error => {
            iziToast.show({
                color: 'red',
                message: "An error occurred during the request.",
                position: "topRight"
            });
        })
        .finally(() => {
            loader.classList.remove("visible");
        });
}

loadButton.addEventListener('click', () => {
    loadButton.classList.add('invisible')
    console.log('Load More clicked');
    console.log(`Current inputText before loading more: "${inputText}"`);

    handleImages(inputText, false)
    .then(() => {
        smoothScroll();
    });

});










function smoothScroll() {
    const card = document.querySelector('.gallery .card'); // Используйте правильный селектор для карточки
    if (card) {
        const cardHeight = card.getBoundingClientRect().height; // Получаем высоту карточки
        window.scrollBy({
            top: cardHeight * 3, // Прокручиваем на две высоты карточки
            behavior: 'smooth' // Плавная прокрутка
        });
    }
}




export const imageFetcher = {
    handleImages
};

