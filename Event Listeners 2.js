let h1 = document.querySelector("h1");
let div = document.querySelector("div");
function h1clicked() {
    console.log("You have clicked the heading");
}
function h1hover() {
    console.log("You have hovered over the heading");
}
function divclicked() {
    console.log("You have clicked the box");
}
function divhover() {
    console.log("You have hovered over the box");
}
h1.addEventListener("click",h1clicked);
h1.addEventListener("mouseenter",h1hover);
div.addEventListener("click",divclicked);
div.addEventListener("mouseenter",divhover);