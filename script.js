const container = document.querySelector("#container");
const changeSquare = document.querySelector("#change-size");

const clearBtn = document.querySelector("#clear");
const randomColorBtn = document.querySelector("#random-color");
const solidColorBtn = document.querySelector("#solid-color");

let squareNumber = 16;
let isSolidColor = true;

createSquares();

function createSquares() {

    for (let i=0; i < squareNumber*squareNumber; i++) {
        const colorSquare = document.createElement("div");
        colorSquare.classList.add("square");
        container.appendChild(colorSquare);
    }

    changeSquareSize();
    addColorToSquare();

}

function changeSquareSize() {

    const colorSquare = document.querySelectorAll(".square");

    colorSquare.forEach((square) => {
        square.style.width = `calc(100% / ${squareNumber})`;
        square.style.height = `calc(100% / ${squareNumber})`;
    })

}

function removeSquares() {

    const colorSquare = document.querySelectorAll(".square");

    for (let i=0; i < colorSquare.length; i++) {
        colorSquare[i].remove();
    }
    
}

function addColorToSquare() {

    const colorSquare = document.querySelectorAll(".square")

    colorSquare.forEach((singleSquare) => {
        singleSquare.addEventListener("mouseover", (e) => {
            if (isSolidColor) {
                e.target.style.backgroundColor = "black";
            } else {
                e.target.style.backgroundColor = getRandomColor();
            }
        })
    })

}

function getRandomColor() {
    
    const hexCharatcers = "0123456789ABCDEF";
    let randomColor = "#";

    for (let i=0; i < 6; i++) {
        randomColor += hexCharatcers.charAt(Math.floor(Math.random() * 16));
    }

    return randomColor;

}

changeSquare.addEventListener("click", () => {

    squareNumber = parseInt(prompt("How many squares you want in each row?"));

    while (squareNumber > 100 || isNaN(squareNumber)) {
        alert("Maximum number allowed is 100");
        squareNumber = parseInt(prompt("How many squares you want in each row?"));
    }

    removeSquares();
    createSquares();

})

clearBtn.addEventListener("click", function() {
    
    const colorSquare = document.querySelectorAll(".square");

    colorSquare.forEach((square) => {
        square.style.backgroundColor = "";
    })

})

randomColorBtn.addEventListener("click", () => {
    isSolidColor = false;
})

solidColorBtn.addEventListener("click", () => {
    isSolidColor = true;
})