let h1 = document.querySelector("#h11");
let h2 = document.querySelector("#h22");
let h3 = document.querySelector("#h33");
let h4 = document.querySelector("#h44");
let h5 = document.querySelector("#h55");
function abcd() {
    console.dir(this.innerText);
    this.style.backgroundColor="black";
    this.style.color="white";
}
h1.addEventListener("click",abcd);
h2.addEventListener("click",abcd);
h3.addEventListener("click",abcd);
h4.addEventListener("click",abcd);
h5.addEventListener("click",abcd);