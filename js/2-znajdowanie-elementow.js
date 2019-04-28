'use strict'

// Po id
let parFirst = document.getElementById('parFirst');
console.log(parFirst);

// po klassie
let link = document.getElementsByClassName('superlink');
console.log(link);

// po nazwie tagu
let linkiPoTagu = document.getElementsByTagName('a');
console.log(linkiPoTagu);
console.clear();

// query selector - pojedynczy pierwszy
let pierwszyLinkPoSelektorzye = document.querySelector('link');
console.log(pierwszyLinkPoSelektorzye);

    // wszystkie
    let wszystkieLinkiPoSelektorze = document.querySelectorAll('a');
    console.log(wszystkieLinkiPoSelektorze);

    console.clear();
    wszystkieLinkiPoSelektorze.forEach((link,i) => {
            console.log(link.outerHTML);
        }
    )

