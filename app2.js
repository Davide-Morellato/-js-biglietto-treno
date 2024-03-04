// Il programma dovrà chiedere all’utente
// il numero di chilometri che vuole percorrere
// e l’età del passeggero.
// L’output del prezzo finale con al massimo due decimali.


const km = parseInt(prompt('Inserisci i Km da percorrere'));  //number
console.log('Km da percorrere: ', km ,'Km');

const age = parseInt(prompt('Inserisci la tua età'));  //number
console.log('Età: ', age ,'anni');

// PREZZO DEL BIGLIETTO: 0.21€/km

// SE età tra i 18 ed i 65 anni PREZZO INTERO

const price = (0.21 * km) ;   //number
 

// ALTRIMENTI SE età < 18 anni SCONTO 20% 

const disc20 = (price * 0.2) ;    //number


// ALTRIMENTI età > 65 anni SCONTO 40%

const disc40 = (price * 0.4) ;    //number


// CALCOLO

if(age >=18 && age < 65){
    console.log('Prezzo Intero: ', price.toFixed(2)) ;  //number
} else if (age < 18){
    const finalPrice20 = (price - disc20) ;
    console.log('Prezzo Sconto 20%: ', finalPrice20.toFixed(2)) ;  //number
} else{
    const finalPrice40 = (price - disc40) ;
    console.log('Prezzo Sconto 40%: ', finalPrice40.toFixed(2)) ;  //number
}