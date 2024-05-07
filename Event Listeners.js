let btns = document.querySelectorAll("button");
function sayHello() {
    console.log("Hello There!");
}
function sayNamaste() {
    console.log("Namaste");
}
function twoclick() {
    console.log("You have double clicked the button");
}
for (const btn of btns) {
    btn.addEventListener("click", sayHello);
    btn.addEventListener("click", sayNamaste);
    btn.addEventListener("dblclick", twoclick);
}
