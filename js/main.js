'use strict';

// Costante prezzo al km
const euroKm = 0.21;

// Inserimento in una variabile del bottone genera
const btnGenera = document.getElementById('btn-genera');
const btnAnnulla = document.getElementById('btn-annulla');

// variabile bilgietto
const bigliettoShow = document.getElementById('biglietto');

// Definizione e assegnamento degli elementi input 
const km = document.getElementById('distanza');
const etaUtente = document.getElementById('eta');
const nomeUtente = document.getElementById('name');

// Funzione al click del bottone genera
btnGenera.addEventListener(
    'click',
    function(){

        // Definizione e assegnazione dei km da percorrere
        const kmValue= Number(km.value);

        // Controllo se tutti i campi sono stati riempiti correttamente
        if( nomeUtente.value !== '' &&  kmValue > 0 && etaUtente.value !== ''){
            let sconto = 0;
            let tipoBiglietto = "Biglietto Standard";
            let carrozzaRandom = (Math.random() * 10) +1 ;
        
            // Stampa a video dei dati inseriti dall'utente come controllo
            console.log(nomeUtente.value);
            console.log('KM: ' + kmValue);
            console.log('Eta: ' + etaUtente.value);

            // Calcolo e stampa a video del prezzo pieno del biglietto
            let prezzoBiglietto = euroKm * kmValue;
            console.log(`Prezzo: ${prezzoBiglietto.toFixed(2)}€`);

            // Controllo se l'utente in base all'eta scelta se è idoneo ad uno sconto
            if(etaUtente.value === 'm'){
                prezzoBiglietto *= 0.8;
                sconto = 20;
                tipoBiglietto = "Biglietto Young";
            }else if(etaUtente.value  === 'V'){
                prezzoBiglietto *= 0.6;
                sconto = 40;
                tipoBiglietto = "Biglietto Vecio";
            }

            // Stampa a video del prezzo finale
            console.log(`Prezzo Scontato del ${sconto}%: ${prezzoBiglietto.toFixed(2)}€`);

            // Comparsa del biglietto con le informazioni inserite dall'utente
            bigliettoShow.classList.add('show');
            
            document.querySelector('.name').innerHTML = nomeUtente.value;
            document.getElementById('tipo-biglietto').innerHTML = tipoBiglietto;
            document.getElementById('carrozza').innerHTML = Math.floor(carrozzaRandom);
            document.getElementById('prezzo').innerHTML = prezzoBiglietto.toFixed(2);
        }else {
            // Output se tutti i campi non sono stati inseriti correttamente
            alert('Perfavore riempire tutti i campi in modo corretto');
            console.log('Dati Inseriti non corretti');
        }   
    }
);

// Scomparse del biglietto al click del pulsante annulla
btnAnnulla.addEventListener(
    'click',
    function(){
        bigliettoShow.classList.remove('show');
    }
)




