// To convert temperatures in degrees Celsius to Fahrenheit, multiply by 1.8 (or 9/5) and add 32.

function convertCtoF(ctemperature) {
    let ctemp = (ctemperature * 1.8) + 32;
    return ctemp
}

let Fahrenheit = convertCtoF(-6.66);
console.log(Fahrenheit);