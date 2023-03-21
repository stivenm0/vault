import {allServices} from '../services/allServices.js';

const form = document.getElementById("form");

const urlSearchParams = new URLSearchParams(window.location.search);
const id = urlSearchParams.get("id");

let web = await allServices.getWeb(id);

form.name.value= web.name;
form.description.value= web.description;
form.link.value= web.link;

form.addEventListener("submit", async (event)=>{
    event.preventDefault()
    let name = event.target.name.value;
    let description = event.target.description.value;
    let link = event.target.link.value;

    let res = await  allServices.updateWeb(id, name, description, link);

    window.location.href = "/index/admin/home.html"

    console.log(res);

});


