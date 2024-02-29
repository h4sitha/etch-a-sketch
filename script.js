const container = document.querySelector("#container");
const changeSquare = document.querySelector("button");

let squareNumber = 16;

function createSquares() {

    for (let i=0; i < squareNumber*squareNumber; i++) {
        const colorSquare = document.createElement("div");
        colorSquare.classList.add("square");
        container.appendChild(colorSquare);
    }

}

createSquares();

const colorSquare = document.querySelectorAll(".square")

colorSquare.forEach((singleSquare) => {

    singleSquare.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
    })

})



changeSquare.addEventListener("click", () => {

    squareNumber = prompt("How many squares you want in each row?");

    createSquares();

})