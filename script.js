const container = document.querySelector("#container");

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