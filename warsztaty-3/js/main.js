'use strict'

let form = document.getElementById('formularz')

form.addEventListener('submit', (event)=> {
    event.preventDefault();
    console.log(event);
})