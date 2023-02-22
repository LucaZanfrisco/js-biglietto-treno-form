'use strict';

// Costante prezzo al km
const euroKm = 0.21;

// Inserimento in una variabile del bottone genera
const btnGenera = document.getElementById('btn-genera');
const btnAnnulla = document.getElementById('btn-annulla');
const bigliettoShow = document.getElementById('biglietto');

// Funzione al click del bottone genera
btnGenera.addEventListener(
    'click',
    function(){

        // Inserimento del gli input dell'utente in delle variabili
        let sconto = 0;
        let tipoBiglietto = "Biglietto Standard";
        let carrozzaRandom = (Math.random() * 10) +1 ;
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
            tipoBiglietto = "Biglietto Young";
        }else if(etaUtente  === 'V'){
            prezzoBiglietto *= 0.6;
            sconto = 40;
            tipoBiglietto = "Biglietto Vecio";
        }

        // Stampa a video del prezzo finale
        console.log(`Prezzo Scontato del ${sconto}%: ${prezzoBiglietto.toFixed(2)}€`);

        // Comparsa del biglietto con le informazioni inserite dall'utente
        bigliettoShow.classList.add('show');
        bigliettoShow.classList.remove('hidden');
        document.querySelector('.name').innerHTML = nomeUtente;
        document.getElementById('tipo-biglietto').innerHTML = tipoBiglietto;
        document.getElementById('carrozza').innerHTML = Math.floor(carrozzaRandom);
        document.getElementById('prezzo').innerHTML = prezzoBiglietto.toFixed(2);
    }
);

// Scomparse del biglietto al click del pulsante annulla
btnAnnulla.addEventListener(
    'click',
    function(){
        bigliettoShow.classList.remove('show');
        bigliettoShow.classList.add('hidden');
    }
)



