/* Project variables */
const project1 = document.getElementById("project1");
const title1 = document.getElementById("title1");

const project2 = document.getElementById("project2");
const title2 = document.getElementById("title2");

const project3 = document.getElementById("project3");
const title3 = document.getElementById("title3");

const project4 = document.getElementById("project4");
const title4 = document.getElementById("title4");

/* Project hover functions */
project1.onmouseover = function() {
    title1.innerHTML = "Click to View!"
    title1.style.backgroundColor = "#E65C4F";
}
project1.onmouseout = function() {
    title1.innerHTML = "Survey Form";
    title1.style.backgroundColor = "#326789";
}

project2.onmouseover = function() {
    title2.innerHTML = "Click to View!"
    title2.style.backgroundColor = "#E65C4F";
}
project2.onmouseout = function() {
    title2.innerHTML = "React App";
    title2.style.backgroundColor = "#326789"
}

project3.onmouseover = function() {
    title3.innerHTML = "Click to View!"
    title3.style.backgroundColor = "#E65C4F";
}
project3.onmouseout = function() {
    title3.innerHTML = "Hide and Seek";
    title3.style.backgroundColor = "#326789"
}

project4.onmouseover = function() {
    title4.innerHTML = "Click to View!"
    title4.style.backgroundColor = "#E65C4F";
}
project4.onmouseout = function() {
    title4.innerHTML = "Landing Page";
    title4.style.backgroundColor = "#326789"
}

