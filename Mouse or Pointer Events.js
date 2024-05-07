let btn = document.querySelector("button");
btn.onclick = function mouseHovering() {
    console.dir(btn);
    alert("Hello! You have clicked the button");
}
btn.onmouseenter = function btnclick() {
    console.log("Hello There!");
    console.log("I am Aman Verma");
}