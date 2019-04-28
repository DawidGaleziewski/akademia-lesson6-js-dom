'use strict'
// Tworzenie buttona - createElement
    // po znaczniku
let btn = document.createElement('button');
// zostaje stworzony ale istnieje w pamięci
console.log(btn);

// tworzenie textu do buttona - createTextNode
let textBtn = document.createTextNode("Kliknij mnie!");
console.log(textBtn);

// tworzenie attrybutu np class
let classBtn = document.createAttribute("class");
// ustawianie wartości klasy
classBtn.value = "button"
console.log(classBtn);

// wrzuć textBtn jako child elementu btn - ps to dodaje jako ostatni element
btn.appendChild(textBtn);
console.log(btn);

// dodanie klasy do buttona
btn.setAttributeNode(classBtn);
console.log(btn);

// skrutowy zapis atrybut i jego wartość
btn.setAttribute("onclick", "btnClicick()");
console.log(btn);

// wrzucanie elementu na stronie
document.body.appendChild(btn);

// usuwanie elementow
btn.removeAttribute('onclick');
btn.removeAttribute('class');

// usuniecie całego elementu najlepiej przez element.jegorodzic.removeChild(element)
// jest jedynie removeChild więc musimy najpier dostać się do rodzica
btn.parentElement.removeChild(btn);
