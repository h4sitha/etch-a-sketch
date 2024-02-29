const container = document.querySelector("#container");
const changeSquare = document.querySelector("button");

let squareNumber = 16;

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
            e.target.style.backgroundColor = "black";
        })
    })

}

changeSquare.addEventListener("click", () => {

    squareNumber = prompt("How many squares you want in each row?");

    removeSquares();
    createSquares();

})