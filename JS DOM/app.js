// Selecting Elements by Class Name
let smallImages=document.getElementsByClassName("oldImg");
for (let i = 0; i < smallImages.length; i++) {
    console.log(document.getElementsByClassName("oldImg")[i]);
    smallImages[i].src="assets/spiderman_img.png";
    console.log(`The source of image ${i} is changed`);
}
// Selecting Elements by Tag Name
document.getElementsByTagName("p")[0].innerText = "qwertyuiopadfghjklzxcvbnm";
// Query Selectors
console.dir(document.querySelector("h1"));
console.dir(document.querySelector("a"));
console.dir(document.querySelector("#mainImg"));
console.dir(document.querySelectorAll(".oldImg"));
console.dir(document.querySelectorAll("p"));