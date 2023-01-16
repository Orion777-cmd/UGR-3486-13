const bars = document.getElementById('bars');
const xmark= document.getElementById('xmark');
const header_nav_list =document.getElementById('header--nav-list');
const toggleList = document.getElementsByClassName('toggleList');
const none = document.getElementsByClassName('none');
const menubtn = document.getElementsByClassName('visible');
const loadPopular = document.getElementById("load--popular");
const morePopular = document.querySelectorAll(".morePopular");








bars.addEventListener('click', ()=>{
        header_nav_list.classList.toggle("toggleList")
        bars.classList.toggle('none');
        xmark.classList.toggle('none')
        
        
    });
xmark.addEventListener('click', ()=>{
    header_nav_list.classList.toggle("toggleList");
    xmark.classList.toggle('none');
    bars.classList.toggle('none');
});



// filter.addEventListener('mouseover', ()=>{
//     console.log(filterOption.classList.contains('toggleList'));
//     filterOption.classList.toggle('toggleList');

// })
loadPopular.addEventListener('click', ()=>{
    for(popular of morePopular){
        popular.classList.toggle("none");
    }
   
})

    



