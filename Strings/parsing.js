"use strict";

function parseAndDisplayName(name) {

    let start = 0;
    let positionOfSpace = name.indexOf(" "); // extracting part of a string

    let firstName = name.substring(start, positionOfSpace);
    let lastName = name.substring(positionOfSpace + 1);

    console.log(name[0]); // same as .charAt()(finding character in specified position)
    console.log(`Full Name:${name}`);
    console.log(`First Name: ${firstName}`);
    console.log(`Last Name: ${lastName}`);

}

parseAndDisplayName("Ian Auston");