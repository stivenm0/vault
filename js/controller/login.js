import {allServices} from '../services/allServices.js';

const form = document.getElementById("login");
const msg = document.getElementById("message");

const users = await allServices.getUsers();


form.addEventListener("submit", (event)=>{
    let email = event.target.email.value;
    let password = event.target.password.value;
    let remember = event.target.remember.checked;

    let login = false;

    users.forEach(user => {

        if(user.email === email && user.password === password){
                if(remember){
                    localStorage.setItem("user", "valido");
                }else{
                    sessionStorage.setItem("user", "valido");
                }

                login = true;

                window.location.href = "/index/admin/home.html"; 
        } 
    });

    if(!login){
        msg.innerHTML = `
                     <div class="alert alert-danger text-center" role="alert">
                        <strong>Usted no tiene acceso al sistema</strong>
                      </div>`;
    }


});



