
'use strict'
let pierwszyDiv = document.getElementById('parFirst');
console.log(pierwszyDiv);

// Wchodzenie w rodzica tego elementu
console.log(pierwszyDiv.parentElement);
console.log(pierwszyDiv.parentNode);


// Wchodzenie w dzieci
console.log(pierwszyDiv.childNodes); //wszystko - komentarze i entery
console.log(pierwszyDiv.children); //tylko dzieci - tylko elementy htmlu

// wszystkie węzły - nodes
// tylko elementy html - children/parents
console.clear();

// odwołanie się do rodzeństwa
console.log(pierwszyDiv.nextSibling);
console.log(pierwszyDiv.previousSibling);
    // kolejny elemnt który jest tagiem
    console.log(pierwszyDiv.nextElementSibling);