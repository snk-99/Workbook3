// F° to C°: Fahrenheit to Celsius Conversion Formula
// To convert temperatures in degrees Fahrenheit to Celsius, subtract 32 and multiply by .5556 (or 5/9).

function convertFtoC(fTemperature) {
    let ftemp = (fTemperature - 32) * .5556;
    return ftemp;
}

let celsius = convertFtoC(-6.66);
console.log(celsius);

