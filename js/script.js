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

const nameSurname = document.getElementById('nameSur').value;
console.log(nameSurname);
const kmToTravel = parseInt(document.getElementById('kilomts').value);
console.log(kmToTravel);
const age = parseInt(document.getElementById('ageofpax').value);
console.log(age);

const eleBtn = document.querySelector('#generate');

eleBtn.addEventListener('click', function() {
    console.log()
})

