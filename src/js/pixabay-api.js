import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import axios from 'axios';

import { renderHTML } from './render-functions';

const loader = document.querySelector(".loader")
const loadButton = document.querySelector(".load-button");


const url = `https://pixabay.com/api/`;
const API_KEY = '46290930-3746f5b7b54e4eb8c1145cc43';

let page = 1;
const perPage = 3;
let inputText = '';



async function getImages(text, isNewSearch = false) {

    if (isNewSearch) {
        page = 1;
    }

    console.log(`Fetching images for: "${text}", page: ${page}`); // Лог перед запросом

    try {
        const response = await axios.get(url, {
            params: {
                key: API_KEY,
                q: inputText,
                image_type: 'photo',
                orientation: 'horizontal',
                safesearch: true,
                page: page,
                per_page: perPage
            } 
        }); 


        console.log(`Response received for page: ${page}`); // Лог после получения ответа
        page++;
        return response.data; 
    } catch (error) {
        console.error('Ошибка:', error);
        throw error; 
    }
}




function handleImages(text, isNewSearch = false) {

    console.log(`Handling images for: "${text}", isNewSearch: ${isNewSearch}`); // Лог текущего состояния
    inputText = text;
    const gallery = document.querySelector('.gallery');
    loader.classList.add("visible");


    console.log(`Handling images for: "${text}", isNewSearch: ${isNewSearch}`); // Лог перед вызовом getImages
    getImages(inputText, isNewSearch)
        .then(data => {

            if (isNewSearch) {
                gallery.innerHTML = '';
            }


            if (data.hits.length === 0) {
                iziToast.show({
                    color: 'red',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight"
                });
                return;
            }
            
            console.log(`Rendering ${data.hits.length} images`); // Лог перед отрисовкой
            renderHTML.render(data);
            loader.classList.remove("visible");
            loadButton.classList.add("visible");
            

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
            loadButton.disabled = false;
        });
}

loadButton.addEventListener('click', () => {
    console.log('Load More clicked');

    console.log(`Current inputText before loading more: "${inputText}"`);
    
    if (!inputText) {
        console.warn('No input text provided. Ignoring Load More request.');
        return;
    }
    
    loadButton.disabled = true; 
    handleImages(inputText, false); 
});



export const imageFetcher = {
    handleImages
};