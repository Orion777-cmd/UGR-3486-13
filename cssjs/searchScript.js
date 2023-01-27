const inputText = document.querySelector('.inputText');
const searchButton = document.querySelector('.searchBtn');
const cards = document.querySelectorAll('.cards');
const none = document.getElementsByClassName('none')
const index = window.location.href.indexOf("?name=")
const queryParam = decodeURIComponent(window.location.href.replace(/\+/g, " ")).slice(index+6).trim().toLowerCase();

const filterMovies = (data) => {
    Array.prototype.forEach.call(cards, (card)=>{
        if(!(card.dataset.name.toLowerCase().includes(data))){
            card.classList.add('none')
        }else{
            card.classList.remove('none');
        }
        
    })
}
filterMovies(queryParam)
searchButton.addEventListener('click', ()=>{
    filterMovies(inputText.value.trim().toLowerCase())
})
