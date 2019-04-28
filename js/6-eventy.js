'use strict'
let parSecond = document.querySelector("#parSecond")

// podpinanie eventów

const klikAlert = (e) => {
    alert("Kilkinięto diva :)");
    console.log(e.target)
}

// #1 Przekierowanie z html do konkretnej funkcji
// On clieckiem można wywołać js bez funkcji np
    // onclick(alert('test'))

// musi też być zdefiniowany w html:
    // <div id="parSecond"  onclick="klikAlert()"></div>


//  #2 w kodzie
    // nie ma () i nie da rady przekazać paremetrów do niej!
    // ten typ funkcji nazywa się 'callback' albo funkcja zwrotna
    // jeśli damy funkcja() wtedy zdarzenie zacznie się przy ładowaniu!
    // callbacki uruchamiają się tylko przy jakimś zdarzeniu
parSecond.onclick = klikAlert;


//  #3 event listiner - preferrd way of adding events
parSecond.addEventListener('click', klikAlert);

// to samo z funkcją anonimową
    // funkcja anonimowa też jes callbackiem
parSecond.addEventListener('click', () => {
    alert("funkcja anonimowa");
});

// Usuwanie funkcji anoniomowej
parSecond.removeEventListener('click', klikAlert);


// Przesyłanie eventa do funkcji
// const klikAlert = (e) => {
//     e
// }


// przekazywanie eventu z przeglądarki do funkcji
let link = document.querySelectorAll('.link');
const zablokuj = (x) => {
    console.log(x);
    // zablokowanie zdarzenia np przekierowania w linku
    x.preventDefault()
}

link[2].addEventListener('click', zablokuj )