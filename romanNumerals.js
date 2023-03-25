 //Declare all the options, then create a function that breaks input apart, and converts each element, using FOR EACH, converts them to string variables, and finally re-concatenates the string.

// function numeralConverter(integer){

// }

//  1

// I

// 5

// V

// 10

// X

// 50

// L

// 100

// C

// 500

// D

// 1,000

// M

//Answer Walkthrough:
 
function toRoman(num) {
    const romanNumerals = {
        M: 1000,
        CM: 900,
        D: 500,
        CD: 400,
        C: 100,
        XC: 90,
        L: 50,
        XL: 40,
        X: 10,
        IX: 9,
        V: 5,
        IV: 4,
        I: 1
    };

    let result = ""

    for(let key in romanNumerals) {
        while(num >= romanNumerals[key]) {
            result += key;
            num -= romanNumerals[key];
        }
    }
}