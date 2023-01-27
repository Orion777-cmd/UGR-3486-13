
const loadPopular = document.getElementById("load--popular");
const morePopular = document.querySelectorAll(".morePopular");


loadPopular.addEventListener('click', ()=>{
    for(popular of morePopular){
        popular.classList.toggle("none");
        // popular.classList.toggle('d-flex');
    }
   
})

    



