let formm = document.querySelector("form");
let para = document.querySelector("p");
formm.addEventListener("submit", function (event) {
    event.preventDefault();
})
let user = formm.querySelector("#textt");
user.addEventListener("change", function (event) {
    console.log("Change Event");
    console.log("Final Value=", this.value);
})
user.addEventListener("input", function (event) {
    console.log("Input Event");
    console.log("Final Value=", this.value);
    para.innerText = user.value;

})