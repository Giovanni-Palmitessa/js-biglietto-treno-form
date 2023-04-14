/*
chiedere all'utente tramite input nome del passeggero, il numero di km che vuole percorrere e età del passeggero
moltiplicare i km inseriti (variabile dei km) per 0.21 € per avere il costo totale del biglietto
SE età dell' utente < 18  {
    sconto del 20%
} ALTRIMENTI SE età dell'utente > 65 {
    sconto 40%
}
risultato stampato in pagina con solo 2 decimali
*/

let nameSurname = document.getElementById('nameSur');

let kmToTravel = parseInt(document.getElementById('kilomts'));

let age = parseInt(document.getElementById('ageofpax'));


const eleBtn = document.querySelector('#generate');

const btnReset = document.querySelector('.btn-reset');

eleBtn.addEventListener('click', function() {

    nameSurname = document.getElementById('nameSur').value;
    console.log(nameSurname);

    kmToTravel = parseInt(document.getElementById('kilomts').value);
    console.log(kmToTravel);

    age = parseInt(document.getElementById('ageofpax').value);
    console.log(age);

    
    let price = kmToTravel * 0.21;
    console.log(`Somma km moltiplicato per 0.21€:` + price)

    const discount20 = price * 0.2;
    const discount40 = price * 0.4;

    if (isNaN(kmToTravel) || isNaN(age)) {
        document.getElementById (`finalPrice`).innerHTML = `Non hai inserito un valore corretto, ricarica la pagina!`
    } else {
    
    if (age < 18) {
        price = price - discount20;
        console.log(`Prezzo con sconto 20%` + price)
    } else if (age > 65) {
        price = price - discount40;
        console.log(`Prezzo con sconto 40%` + price)
    }
    document.getElementById (`finalPrice`).innerHTML = `Il costo del biglietto è: ${price.toFixed(2)} €`

    document.getElementById (`finalName`).innerHTML = `Il tuo nome è: ${nameSurname}`
    }
})

btnReset.addEventListener('click', function() {
    nameSurname.value = '';
    kmToTravel.value = '';
    age.value = '';
})

