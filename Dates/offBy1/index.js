"use strict";

window.onload = init;

function init() {
    const btn = document.getElementById("btn");
    const message = document.getElementById("message");

    btn.onclick = btnClicked;
}

function btnClicked() {
    // get the input for input box
    const date = document.getElementById("selectedDate");
    // get value from input box
    const selectedDate = new Date(date.value + 'T00:00')
    // let selectedDate = date.value;

    //set the paragraphs content
    message.innerText = selectedDate.toString();

    console.log(selectedDate);
}