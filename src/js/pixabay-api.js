import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { renderHTML } from './render-functions';
const loader = document.querySelector(".loader");


    const BASE_URL = `https://pixabay.com/api/`;
    const API_KEY = '46290930-3746f5b7b54e4eb8c1145cc43';




function getImages(inputText) {

    const END_POINT = `&q=${encodeURIComponent(inputText)}&image_type=photo&orientation=horizontal&safesearch=true`
    const url = `${BASE_URL}?key=${API_KEY}${END_POINT}`;
    
    return fetch(url)
        .then(res => res.json())
        .then(data => {
            return data;
        })
        .catch(error => {
            console.error('Ошибка:', error);
            throw error;
        });
}





function handleImages(inputText) {

    const gallery = document.querySelector('.gallery');
    loader.classList.add("visible");

    getImages(inputText)
        .then(data => {

            gallery.innerHTML = '';
            if (data.hits.length === 0) {
                iziToast.show({
                    color: 'red',
                    message: "Sorry, there are no images matching your search query. Please try again!",
                    position: "topRight"
                });
            } else {
                renderHTML.render(data);
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



export const imageFetcher = {
    getImages,
    handleImages
};