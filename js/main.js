'use strict';

// Costante prezzo al km
const euroKm = 0.21;

// Inserimento in una variabile del bottone genera
const btnGenera = document.getElementById('btn-genera');

// Funzione al click del bottone genera
btnGenera.addEventListener(
    'click',
    function(){
        // Inserimento del gli input dell'utente in delle variabili
        let sconto = 0;
        const km = Number(document.getElementById('distanza').value);
        const etaUtente = document.getElementById('eta').value;
        const nomeUtente = document.getElementById('name').value;
        // Stampa a video dei dati inseriti dall'utente come controllo
        console.log(nomeUtente);
        console.log({km});
        console.log({etaUtente});
        // Calcolo e stampa a video del prezzo pieno del biglietto
        let prezzoBiglietto = euroKm * km;
        console.log(`${prezzoBiglietto.toFixed(2)}€`);
        // Controllo se l'utente in base all'eta scelta se è idoneo ad uno sconto
        if(etaUtente === 'm'){
            prezzoBiglietto *= 0.8;
            sconto = 20;
        }else if(etaUtente  === 'V'){
            prezzoBiglietto *= 0.6;
            sconto = 40;
        }
        // Stampa a video del prezzo finale
        console.log(`Prezzo Scontato del ${sconto}%: ${prezzoBiglietto.toFixed(2)}€`);
    }
);




