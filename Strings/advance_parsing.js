"use strict";

function parseAndDisplayName(name) {

    let start = 0;
    let fPositionOfSpace = name.indexOf(" ");
    let ePositionOfSpace = name.lastIndexOf(" ");

    let firstName = name.substring(start, fPositionOfSpace);
    let twoName = name.substring(start, ePositionOfSpace);
    let lastName = name.substring(ePositionOfSpace + 1);

    console.log(name[7]); // same as .charAt()(finding character in specified position)
    console.log(`Full Name:${name}`);
    console.log(`Both Names:${twoName}`);
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);

}


parseAndDisplayName("Samuel Njunge Kahura")