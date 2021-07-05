'use strict'
import { getArtesanias, setArtesanias } from './firebase.js';

let search = document.getElementById("search");
let btn_clear_search = document.getElementById("btn_clear_search");

btn_clear_search.addEventListener('click', function () {
    if (search.value != null) {
        search.value = "";
        btn_clear_search.classList.add("hide");
    }
})

getArtesanias();