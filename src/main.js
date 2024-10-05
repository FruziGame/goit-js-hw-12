import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { imageFetcher } from './js/pixabay-api';


const form = document.querySelector(".form")
const formInput = document.querySelector(".form-input")





form.addEventListener("submit", (e) => {

    e.preventDefault();

    if (formInput.value.trim() === "" ) {
        iziToast.show({
            color: 'white',
            message: `Please fill the input`,
            position: "topRight"
          })
    } else {
        const inputText = formInput.value
        imageFetcher.handleImages(inputText)
    }
    
    form.reset()
})