/**
 * Description placeholder
 * @date 5/4/2024 - 12:26:30
 *@param {string} string1
 * @param {string} string2
 * @returns {boolean}
 */
 function equalString(string1, string2) {
    let check = false;
    if(string1.length === string2.length){
        check = true;
    }
    return check;
}

/**
 * Description placeholder
 * @date 5/4/2024 - 12:29:29
 *@param {string} string1
 * @param {string} string2
 * @returns {string}
 */
function maxString(string1, string2) {
    returnString="";
    if(string1.length > string2.length){
        returnString=string1;
    }else{
        returnString=string2; 
    }
    return returnString;
}