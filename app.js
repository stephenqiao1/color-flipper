const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

// Change color when clicked
btn.addEventListener("click", function() {
    // get random number between 0 and 3
    const randomNum = getRandomNumber();

    // changes the color
    document.body.style.backgroundColor = colors[randomNum];

    // changes the string for name of the color
    color.textContent = colors[randomNum];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}