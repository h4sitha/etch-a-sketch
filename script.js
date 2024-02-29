const container = document.querySelector("#container");
const changeSquare = document.querySelector("button");

for (let i=0; i < 256; i++) {
    const colorSquare = document.createElement("div");
    colorSquare.classList.add("square");
    container.appendChild(colorSquare);
}

const colorSquare = document.querySelectorAll(".square")

colorSquare.forEach((singleSquare) => {

    singleSquare.addEventListener("mouseover", (e) => {
        e.target.style.backgroundColor = "black";
    })

})



changeSquare.addEventListener("click", () => {

    const squareNumber = prompt("How many squares you want in each row?");

})