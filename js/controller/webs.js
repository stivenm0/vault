import {allServices} from '../services/allServices.js'

const row = document.getElementById("webs");
const webs =   await allServices.getWebs();
const search = document.getElementById("search");


function mapOut(items){
    let html ="";
    items.map((x)=>{
        html += `
        <div class="col-xl-3 col-lg-4 col-md-5 mb-4 col-sm-6 col-11 position-relative web">
            <div class="bg-white rounded shadow-sm " >
                <img src="../../src/webs.jpg" alt="" class="img-fluid card-img-top">
                <div class="p-2 ">
                    <h5> <a href="${x.link}" target="_blank" class="text-dark">${x.name}</a></h5>
                    <p class="small text-muted mb-0">${x.description}</p>
                    
                </div>
            </div>
        </div>
        `;
    });
    row.innerHTML = html;
 }


 function show(){
    if(webs.length>0){
        mapOut(webs)
    }else{
            row.innerHTML = `<div class="alert alert-primary text-center m-2" role="alert">
                                <strong>Sin elementos</strong> 
                             </div>`
        }
}

show();



search.addEventListener("submit", (event)=>{

    event.preventDefault();

    let item = event.target.item.value;
    let items =[]

    webs.map((x)=>{
        if(x.name.includes(item)){
            items.push(x);
        }
    })

    if(items.length>0){
        row.innerHTML = ``
        mapOut(items)
    }
})