function colour() {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return (color);
}
let h2 = document.querySelector("h2");
let div = document.querySelector("div");
let btn = document.querySelector("button");
function changingColor() {
    h2.innerText = colour();
    div.style.backgroundColor = colour();
    console.log(`Color is Changed to ${colour()}`);
}
btn.addEventListener("click", changingColor);