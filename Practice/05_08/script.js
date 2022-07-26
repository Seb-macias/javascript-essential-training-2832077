/**
 * Note: This file is intentionally empty.
 * You can use it to test your skills at adding, removing, or modifying
 * attributes, classes, and inline styles on elements.
 */
console.log("si corre");
var bttn = document.querySelector(".lid-toggle");

function bgColor(){
    document.querySelector(".page-header").style.backgroundColor="red";
    console.log("click");
    document.querySelector(".page-header").innerHTML="New title";
}

bttn.addEventListener("click",bgColor);

