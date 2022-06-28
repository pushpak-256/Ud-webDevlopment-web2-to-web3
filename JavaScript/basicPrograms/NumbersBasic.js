/**
 * convert Dogs Age to equivalent Humman Age
 */
function dogAgeToHumanAge(dogAge) {
    return (dogAge - 2) * 4 + 21;
}

/** max amout of milk-bottles for Money given */
function maxMilkBottles(money) {
    const price = 1.4;
    return Math.floor(money / price);
}
/* */

/**
 * Life remmaning 
 * @param {*} age in years
 */
function lifeInWeeks(age) {
    var yearsLeft = 90 - age;
    var x = yearsLeft * 365;//days
    var y = yearsLeft * 52; //weeks
    var z = yearsLeft * 12;// months
    console.log("You have " + x + " days, " + y + " weeks, and " + z + " months left.");
}

/** 
 * Bmi calculator
 */
function bmiCalculator(weight, height) {
    var bmi = weight / (Math.pow(height, 2));
    return Math.floor(bmi);
}

/** Random Number generator */
function getRandom() {
    var random = Math.floor(Math.random() * 100);
    console.log(random);
    return random + 1;
}

/** Bmi Calculator with comment */
function bmiCalculator_withComment(weight, height) {
    var bmi = weight / (Math.pow(height, 2));
    bmi = Math.floor(bmi);
    return getComment(bmi);
}

function getComment(bmi) {
    if (bmi < 18.5) return "Your BMI is " + bmi + ", so you are underweight."
    else if (bmi >= 18.5 && bmi <= 24.9) return "Your BMI is " + bmi + ", so you are a normal weight.";
    else if (bmi > 24.9) return "Your BMI is " + bmi + ", so you are overweight.";

    return null;
}

/**
 * Check if Year is Leap Year
 * @param {*} year 
 */
function isLeap(year) {
    if((year%4)==0)
    {
        if((year%100!=0))
        {
           return "Leap year."
        }
        else{ 
            if ((year%400)==0) return "Leap year.";
        }
    }
    return "Not leap year";
}
