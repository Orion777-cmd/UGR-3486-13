const filter = document.querySelector(".filter");
const filterOption = document.querySelector(".filter-option");
const filterToggle = document.querySelector(".filter-toggle");
const ActionBtn = document.getElementById("action");
const adventureBtn = document.getElementById('adventure');
const sportBtn = document.getElementById('sport');
const warBtn = document.getElementById('war');
const horrorBtn = document.getElementById('horror');
// const none = document.getElementsByClassName('none')
const cards = document.querySelectorAll(".cards");
console.log(cards);
filterToggle.addEventListener("mouseover", () => {
  console.log(filterOption.classList.contains("toggleList"));
  filterOption.classList.toggle("toggleList");
  mouseStatus = true;
});

filterToggle.addEventListener("mouseout", () => {
  filterOption.classList.toggle("toggleList");
  mouseStatus = false;
});

ActionBtn.addEventListener("click", () => {
  Array.prototype.forEach.call(cards, (card) => {
    console.log(card);
    if (card.dataset.genre !== "action") {
      card.classList.add("none");
    } else {
      card.classList.remove("none");
    }
  });
  
});

  adventureBtn.addEventListener("click", () => {
    Array.prototype.forEach.call(cards, (card) => {
      console.log(card);
      if (card.dataset.genre !== "adventure") {
        card.classList.add("none");
      } else {
        card.classList.remove("none");
      }
    });
    
  });
  sportBtn.addEventListener("click", () => {
    Array.prototype.forEach.call(cards, (card) => {
      console.log(card);
      if (card.dataset.genre !== "sport") {
        card.classList.add("none");
      } else {
        card.classList.remove("none");
      }
    });
    
  });
  warBtn.addEventListener("click", () => {
    Array.prototype.forEach.call(cards, (card) => {
      console.log(card);
      if (card.dataset.genre !== "war") {
        card.classList.add("none");
      } else {
        card.classList.remove("none");
      }
    });

    
  });
  horrorBtn.addEventListener("click", () => {
    Array.prototype.forEach.call(cards, (card) => {
      console.log(card);
      if (card.dataset.genre !== "horror") {
        card.classList.add("none");
      } else {
        card.classList.remove("none");
      }
    });
    
  });
