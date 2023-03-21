if(window.location.pathname === "/index/admin/agregar.html" ||
    window.location.pathname === "/index/admin/home.html" ||
    window.location.pathname === "/index/admin/editar.html" )
{
    if(!localStorage.getItem("user") &&
       !sessionStorage.getItem("user")){
        window.location.href= "/";
    }

}else if(window.location.pathname === "/index/login.html"){
    if(localStorage.getItem("user") || sessionStorage.getItem("user")){
        window.location.href= "admin/home.html";
    }
}

