import {allServices} from '../services/allServices.js'

const form = document.getElementById("contact");

form.addEventListener("submit", async(event)=>{
    event.preventDefault();
    let email = event.target.email.value;

    let res  = await allServices.addCorreo(email);

});