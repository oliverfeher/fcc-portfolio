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
}
project1.onmouseout = function() {
    title1.innerHTML = "Survey Form";
}

project2.onmouseover = function() {
    title2.innerHTML = "Click to View!"
}
project2.onmouseout = function() {
    title2.innerHTML = "Survey Form";
}

project3.onmouseover = function() {
    title3.innerHTML = "Click to View!"
}
project3.onmouseout = function() {
    title3.innerHTML = "Survey Form";
}

project4.onmouseover = function() {
    title4.innerHTML = "Click to View!"
}
project4.onmouseout = function() {
    title4.innerHTML = "Survey Form";
}

