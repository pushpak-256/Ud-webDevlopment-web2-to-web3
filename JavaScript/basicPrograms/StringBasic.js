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


/** Take valid twitt and show it after valid slice*/
function trimValidTwitt() {
    var twitt = prompt("Enter Twitt");
    var limit = 122;

    while (!twitt) {
        alert("This field is required");
        twitt = prompt("Enter Twitt");
    }
    alert("You have used " + twitt.length + " Character " + (limit - twitt.length));
    alert("Your final twitt is " + twitt.slice(0, limit));
}


/** Take a name in upper/lower case and display it in valid name format*/
function validName()
{
    var name = prompt("Enter Name");
    name = name.slice(0,1).toUpperCase()+name.slice(1,name.length).toLocaleLowerCase();
    alert("Name after Formating "+name);
}

