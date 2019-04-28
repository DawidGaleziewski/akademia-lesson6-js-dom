// deklaracja
const iloczyn = (x,y,z) => {
    let wynikLokalny = x * y * z;
    return wynikLokalny;
}

// wynik zapisany w zmiennej
let wynikGlobalny = iloczyn(2,3,4);

// wyświetlenie w konsoli
console.log(wynikGlobalny);

const witaj = (x) => {
    let powitanie = 'cześć ' + x;
    console.log(powitanie);
}

