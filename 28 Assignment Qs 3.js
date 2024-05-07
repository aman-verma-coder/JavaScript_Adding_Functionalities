const h2 = document.querySelector("h2");
const input = document.querySelector("#txt");
input.addEventListener("input", function (event) {
    const inputvalue = event.target.value;
    const cleanedvalue = inputvalue.replace(/[^a-zA-Z ]/g, '');
    h2.innerText = cleanedvalue;
});