/**
 * Description placeholder
 * @date 5/4/2024 - 11:27:46
 *
 * @param {Number} num
 * @return {Array} arrayNum
 */
function generaArray(num) {
    let arrayNum = [];
    for (let i = 0; i < num; i++) {

        arrayNum.push(randomNum(1, 100));
    }
    return arrayNum;
}
/**
 * Description placeholder
 * @date 5/4/2024 - 11:30:31
 *@param {Number} min
 * @param {Number} max
 * @return {Number} result
 */
function randomNum(min, max) {
    let result = Math.floor(Math.random() * (max - min) + min);
    return result;
}
