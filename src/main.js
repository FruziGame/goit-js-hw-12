import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import { imageFetcher } from './js/pixabay-api';


const form = document.querySelector(".form")
const formInput = document.querySelector(".form-input")





form.addEventListener("submit", (e) => {

    e.preventDefault();

    const inputText = formInput.value.trim();

    if (inputText === "" ) {
        iziToast.show({
            color: 'white',
            message: `Please fill the input`,
            position: "topRight"
          })
    } else {
        imageFetcher.handleImages(inputText, true)
    }
    
    form.reset()
})