const navbar = document.getElementById("navbar");

let ruta= "";
if(window.location.pathname === "/index/webs.html"){
    ruta = "./admin/home.html";
}else{
    ruta = "./index/admin/home.html";
}

if(window.location.pathname !== "/index/admin/home.html"){
    if(localStorage.getItem("user") || sessionStorage.getItem("user")){

        navbar.innerHTML =     `
                                <div class="container position-relative d-flex justify-content-evenlyn">
                                <a class="navbar-brand  px-2 rounded-pill bg-dark" href="#">
                                <span class="text-primary" >V</span>
                                <span class="text-success" >a</span>
                                <span class="text-warning" >u</span>
                                <span class="text-light" >l</span>
                                <span class="text-danger" >t</span>
                                </a>
                                
                                    <a  href="${ruta}" class="btn btn-outline-warning  ">
                                    <i class="bi bi-person-circle"></i></a>
                                    <button onclick="exit()" class="btn btn-outline-danger m-1">
                                    <i class="bi bi-box-arrow-right"></i>
                                    </button>
                                </div>
                                `;
    }
}

function exit(){
    localStorage.removeItem("user");
    sessionStorage.removeItem("user");
    location.reload();
}

let hola = "hola"