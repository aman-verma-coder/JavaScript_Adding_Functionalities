let formm = document.querySelector("form");
formm.addEventListener("submit", function (event) {
    event.preventDefault();
    let usrnm = this.elements[0];
    let pswrd = this.elements[1];
    console.log(usrnm.value);
    console.log(pswrd.value);
    console.dir(formm);
    alert(`Hii ${usrnm.value}! Your password is ${pswrd.value}`);
});