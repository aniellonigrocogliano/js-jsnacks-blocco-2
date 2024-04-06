let userWord1 = prompt("Inserisci una parola");
let userWord2 = prompt("Inserisci un'altra parola");
if(equalString(userWord1, userWord2)){
    document.getElementById("result").innerHTML = "la parola 1 è: "+userWord1+" e parola 2: "+userWord2;
}else{
    let max = "";
    max = maxString(userWord1, userWord2)
    document.getElementById("result").innerHTML = "Parola più lunga è: "+max;
}