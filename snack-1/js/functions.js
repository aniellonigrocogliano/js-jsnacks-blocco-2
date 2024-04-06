/**
 * Conta gli elementi di un array
 * @date 6/4/2024 - 14:28:48
 *
 * @param {array} myArray 
 * @return {number} count il numero di elementi o -1 se vuoto
 */
function contaElementi(myArray) {
    let count = 0; // imposto contatore a 0
    while (myArray[count] != undefined) { // verifico che ne dato indice dell'array c'è realmente un elemento, appena non c'è un elemento il ciclo si ferma
        count++; //incremento il contatote
    }
    if (count == 0) { // nel caso il ciclo al primo indice abbia trovato nulla il count resta a  0 quindi lo trasformiamo in meno -1
        count = -1;
    }

    return count // restituisco il risultato
    

}