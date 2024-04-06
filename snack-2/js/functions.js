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
 * @result {number}  num
 * */
function trovaIndice(myArray, myString) {
    let num = -1; // imposto il numero da restituire a -1
    for (let i = 0; i < contaElementi(myArray); i++) { //inizializzo ciclo for
        if(myArray[i]==myString){ // verifico la presenza dell'elemento nell'array
            num = i  // se c'è imposto il numero con il valore di i che coincide con l'indice
            break; // fermo il ciclo
        }
        
    }
    return num; //restituisco il risultato , in caso nel ciclo non sia stata trovata nessuna corrispondenza stampo il valore iniziale di num cioè -1 valore che indica assenza di elementi
}