/** Check if string is null*/
function isStringNull(s) {
    if (s) {
        console.log("not");
    }
    else console.log("EMpty");
}


/** Prompt nums of chars used for a twitt*/
function twittLimitPromt() {
    var twitt = prompt("Enter Twitt");
    var limit = 122;

    if (!twitt) {
        alert("you have exhausted chars limit");
    }
    else alert("You have used " + twitt.length + " Character " + (limit - twitt.length));
}

