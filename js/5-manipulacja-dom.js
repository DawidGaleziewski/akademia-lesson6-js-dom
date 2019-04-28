'use strict'
// pobieranie header
let mainHeader = document.getElementById('header');
console.log(mainHeader);

// pobiera html
console.log(mainHeader.innerHTML);

// pobiera tekst w tagu
console.log(mainHeader.innerText);

// pobiera też tag w którym się znajduje ten HTML i jego treść (jego znaczniki)
console.log(mainHeader.outerHTML);

mainHeader.className= "moja-klasa";
mainHeader.id = "moje-id"

let linki = document.getElementsByTagName('a');

// dodawanie klasy
mainHeader.classList.add('active')

// toggle dodawanie i odejmowanie klasy
mainHeader.classList.toggle('active');
mainHeader.classList.toggle('active');


let btnToggle= document.getElementById('toggle-kolor');
btnToggle.addEventListener("click", () => {
    btnToggle.classList.toggle('btn-active');
    mainHeader.classList.toggle('btn-active');
})

// bezpośrednia zmiana styli - colory w js napdpisują style
btnToggle.style.color = "red";


