let inp = document.querySelector("input");
inp.addEventListener("keydown" , function down(event) {
    console.log(`key= ${event.key}`);
    console.log(`code= ${event.code}`);
    console.log("You have pressed a key");
})