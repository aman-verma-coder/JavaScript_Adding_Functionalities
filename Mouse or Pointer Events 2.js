let btns = document.querySelectorAll("button");
for (const btn of btns) {
    btn.onmouseenter = function onHover() {
        console.dir(btn);
        console.log("Hello There!");
    }
    btn.onclick = function onClick() {
        alert(`You have clicked the button ${btn}`);
    }
}

