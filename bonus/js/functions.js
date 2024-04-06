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
 * @param {string} myString
 * @result {Array}  newArray
 * */
function  inserisciInTesta(myArray, myString) {
    let newArray = []; // imposto il nuovo array
    newArray.push(myString); // aggiungo elemento al nuo array
    for (let i = 0; i < contaElementi(myArray)  ; i++) { //inizializzo ciclo for 
        newArray.push(myArray[i]); //inserisco tutti gli elementi nel nuovo array
     }
    return newArray; //restituisco il nuovo array
}