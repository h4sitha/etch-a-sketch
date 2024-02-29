const container = document.querySelector("#container");

for (let i=0; i < 256; i++) {
    const colorSquare = document.createElement("div");
    colorSquare.classList.add("square");
    container.appendChild(colorSquare);
}