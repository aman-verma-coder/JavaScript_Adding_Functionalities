let btn = document.createElement("button");
btn.innerText = "Click Me!";
let doc = document.body;
doc.appendChild(btn);
btn.addEventListener("click", (event) => {
    event.target.style.backgroundColor = "green";
})