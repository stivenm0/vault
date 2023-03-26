import {allServices} from '../services/allServices.js';

const form = document.getElementById("form");


form.addEventListener("submit", (event)=>{
    event.preventDefault()
    let name = event.target.name.value;
    let description = event.target.description.value;
    let link = event.target.link.value;

    allServices.addWeb(name, description, link);
});



