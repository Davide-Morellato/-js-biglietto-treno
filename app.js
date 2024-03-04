// Il programma dovrà chiedere all’utente
// il numero di chilometri che vuole percorrere
// e l’età del passeggero.
// L’output del prezzo finale con al massimo due decimali.


const km = parseInt(prompt('inserisci i Km da percorrere')) ;  //number
console.log('Km da percorrere: ' ,km) ;

const age = parseInt(prompt('inserisci la tua età')) ;  //number
console.log('Età: ' ,age)

// PREZZO DEL BIGLIETTO: 0.21€/Km

// SE età 18 / 65 ALLORA Prezzo Pieno

const price = (0.21 * km).toFixed(2) ;  //number

// ALTRIMENTI SE età < 18 ALLORA Sconto 20%

const discount20 = (price * 0.2).toFixed(2) ;  //number

// ALTRIMENTI età > 65 ALLORA Sconto 40%

const discount40 = (price * 0.4).toFixed(2) ;  //number


// CALCOLO

if(age >=18 || age <65){
    console.log('Prezzo Intero: ' ,price)
} else if(age <18){
    console.log('Sconto 20%: ' ,(price - discount20)) 
} else(age >=65)                                        
    console.log('Sconto 40%: ' ,(price - discount40))    // ELSE non ha bisogno di una condizione '{}'