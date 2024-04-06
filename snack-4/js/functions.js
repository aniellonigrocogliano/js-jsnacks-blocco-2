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
    return count // restituisco il risultato
    

}
/**
 * Description placeholder
 * @date 6/4/2024 - 14:58:37
 *@param {array} myArray
 *
 * @result {Array}  newArray
 * */
function  rimuoviDallaCoda(myArray) {
    let newArray = []; // imposto la stringa vuota
    for (let i = 0; i < contaElementi(myArray) -1; i++) { //inizializzo ciclo for con un valore in meno della lunghezza così da no copiare l'ultimo
        newArray.push(myArray[i]); //inserisco tutti gli elementi nel nuovo array ad eccezione dell'ultimo
     }
    return newArray; //restituisco il nuovo array
}