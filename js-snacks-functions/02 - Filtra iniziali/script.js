/* Scrivi una funzione che accetti un'array di stringhe e una lettera e 
restituisca un array contenente solo le parole che iniziano con quella lettera */

const names = ["Anna", "Luca", "Marco", "Adele", "Laura", "Alessandra"];


// Dichiara la funzione qui.
function nomeConLet(names, lettera){
    let nomiConIniziale=[];
    let j=0;
    for(let i=0; i<names.length; i++){
        
        if(names[i].at(0) === lettera){
            nomiConIniziale [j] = names[i];
            j++;
        }

    }
    return nomiConIniziale;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(nomeConLet(names, "A"));

//Risultato atteso se si passa la lettera A: ["Anna", "Adele", "Alessandra"]