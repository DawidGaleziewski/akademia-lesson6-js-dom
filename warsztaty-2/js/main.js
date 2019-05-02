'use strict'
let btnColors = document.getElementById('btn-colors')

btnColors.addEventListener('click', ()=> {
    let allParagraphs = document.querySelectorAll('.par');
    allParagraphs[0].style.backgroundColor = "red";
    allParagraphs[1].style.backgroundColor = "blue";
})