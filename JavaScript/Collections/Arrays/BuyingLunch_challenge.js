/**
 * @param {*} names List of persons 
 * @returns Random person from list
 */
function randomPicker(names) {
    var len = names.length;
    var num = Math.floor(Math.random() * len);
    return names[num]+" is going to buy lunch today!";
}
;

