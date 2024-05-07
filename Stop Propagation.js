let div = document.querySelector("div");
let ul = document.querySelector("ul");
let lis = document.querySelectorAll(".kakhagagha");
div.addEventListener("click", function (event) {
    console.log("div was clicked");
})
ul.addEventListener("click", function (event) {
    console.log("ul was clicked");
})
for (const li of lis) {
    li.addEventListener("click", function (event) {
        console.log("li was clicked");
    });
}
let div2 = document.querySelector("#abcd");
let ul2 = document.querySelector("#efgh");
let lis2 = document.querySelectorAll(".ijkl");
div2.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("div was clicked");
})
ul2.addEventListener("click", function (event) {
    event.stopPropagation();
    console.log("ul was clicked");
})
for (const li of lis2) {
    li.addEventListener("click", function (event) {
        event.stopPropagation();
        console.log("li was clicked");
    });
}