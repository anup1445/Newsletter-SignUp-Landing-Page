let formEl = document.querySelector("form");
let cardEl = document.querySelector(".container");
let newCardEl = document.querySelector(".card-2");
document.addEventListener("submit",function(event) {
    event.preventDefault();
    cardEl.classList.add("hide");
    newCardEl.classList.remove("hide");

})