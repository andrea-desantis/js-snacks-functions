/* Scrivi una funzione che accetti una stringa contenente 
un nome e restituisca un saluto seguito dal nome fornito.
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
function ciao(name){
    const oggi = new Date();
    let ora = oggi.getHours();
    if(0<ora && ora<=13){
        return `buonagiorno ${name}`;
    }
    if(13<ora && ora<=17){
        return `buon pomeriggio ${name}`;
    }
    if(17<ora && ora<=0){
        return `buonasera ${name}`;
    }
    


}

// Invoca la funzione qui e stampa il risultato in console

console.log(ciao(name));

//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.