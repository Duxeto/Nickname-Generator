"use strict";

document.getElementById("randNick").addEventListener("click", randomNickname);
document.getElementById("allNick").addEventListener("click", allNickname);
// Array
let nickArray = ['ape', 'chimp', 'monkey', 'Im baby', 'brown face'];
//results
let nickResult = document.getElementById('results');
//get input
let first = document.getElementById('firstName');
let last = document.getElementById('lastName');
function allNickname() {
    for (let i = 0; i < nickArray.length; i++) {
        nickResult.innerHTML += ""
    }
}