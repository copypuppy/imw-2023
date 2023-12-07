
let name = "Soorim";
let size = 10;

// Console: Print a message on the console.
console.log("I am stupid");

// Interaction: change background
function color(z) {
    var a = getComputedStyle(z);
    var b = a.backgroundColor;
    document.getElementById("interactionContainer").style.backgroundColor=b;
    }
/* help site: https://www.howtocodeschool.com/2021/01/change-background-color-onclick-using-javascript.html */



//Loop: repeating text
for (let step = 0; step < 10; step++){
    let textBox = document.createElement("p");
    textBox.innerHTML = name;

    document.getElementById("loopContainer").appendChild(textBox);
}


//Condition: Change the color of the square
const square = document.getElementById("square");

let index = 0;

const colors = ["pink", "yellow", "purple", "lightgreen"];

square.addEventListener('click', function onClick() {
    square.style.backgroundColor = colors[index];
    square.style.color = 'white';

  index = index >= colors.length - 1 ? 0 : index + 1;
});
/* help site: https://bobbyhadz.com/blog/javascript-change-button-color-onclick */


//Time: Increase the font size as time passes.
for (let step = 0; step < 10; step++){
    let textBox = document.createElement("p");
    textBox.innerHTML = name;
    textBox.style.fontSize = size + "px";

    document.getElementById("timeContainer").appendChild(textBox);
    size++;

    // ++는 하나씩 늘어남 += 배로 늘어남
}


//Input: Display the number of characters from the input field.

let btn = document.getElementById("submit");
let input = document.getElementById("inputText");
let result = document.getElementById("text-length");

btn.addEventListener('click', function onClick() {
    input.value = result.innerText;
});


