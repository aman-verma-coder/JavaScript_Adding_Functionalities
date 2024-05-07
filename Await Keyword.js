let heading = document.querySelector("h1");
function colorChange(color, delay) {
    return (new Promise((resolve, reject) => {
        setTimeout(() => {
            heading.style.color = color;
            resolve("Color Changed");
        }, delay);
    }));
}
async function abcd() {
    await colorChange("red", 1000);
    await colorChange("green", 1000);
    await colorChange("blue", 1000);
    await colorChange("yellow", 1000);
    colorChange("pink", 1000);
}