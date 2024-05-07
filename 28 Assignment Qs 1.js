let formm = document.querySelector("form");
let heading = formm.querySelector("#frm");
let Name = formm.querySelector("#name");
let Email = formm.querySelector("#email");
let City = formm.querySelector("#city");
let Username = formm.querySelector("#usrnm");
let Password = formm.querySelector("#pswrd");
let p = document.querySelector("p");
let box = document.querySelector("#dv");
let output = document.querySelector("#output");
heading.addEventListener("mouseout", (event) => {
    event.target.style.color = "green";
    setTimeout(() => {
        event.target.style.color = "";
    }, 2000);
})
Email.addEventListener("keypress", function (event) {
    p.textContent += event.code;
})
box.addEventListener("scroll", (event) => {
    output.innerHTML = "Scroll event fired!";
    setTimeout(() => {
        output.innerHTML = "Waiting for Scrolling Event";
    }, 1000);
})