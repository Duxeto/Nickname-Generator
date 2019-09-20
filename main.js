"use strict";


document.getElementById("allNick").addEventListener("click", allNickname);
// Array
let nickArray = ['Ape', 'Chimp', 'Monkey', 'Im Baby', 'Brown Face'];
//results
let nickResult = document.getElementById('results');

function allNickname() {
    let first = document.getElementById('firstName').value;
    let last = document.getElementById('lastName').value;
    
    for (let i = 0; i < nickArray.length; i++) {
        nickResult.innerHTML += first + " " + nickArray[i] + " " + last + "<br>";
    }
}