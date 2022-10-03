"use strict"

function displayMailingLable(name, address, city, state, zip) {
    console.log(name);
    console.log(address);
    console.log(city, state, zip);
}

displayMailingLable("Samuel Kahura", "1323 henway", "Farm,", "GA", "30120");


function addNumbers(num1, num2) {
    let sum = num1 + num2;
    console.log(`${num1} + ${num2} = ${sum}`);
}


addNumbers(100, 4089)


function displayReceipt(totalDue, amountPaid) {
    let changeDue = Math.abs(amountPaid - totalDue);
    console.log(`you have paid ${amountPaid}`);
    console.log(`you total due is ${totalDue}`);
    console.log("--------------------");
    console.log(`Your change is ${changeDue}`);
}

displayReceipt(50, 29);

