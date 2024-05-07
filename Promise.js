let heading = document.querySelector("#abcd");
function colorChange(color, delay) {
    return (new Promise((resolve, reject) => {
        setTimeout(() => {
            heading.style.color = color;
            resolve("Color Changed");
        }, delay);
    }));
}
colorChange("red", 1000)
    .then(() => {
        console.log("Color changed to Red");
        return (colorChange("green", 2000));
    })
    .then(() => {
        console.log("Color changed to Green");
        return (colorChange("yellow", 500));
    })
    .then(() => {
        console.log("Color changed to Yellow");
        return (colorChange("blue", 500));
    })
    .then(() => {
        console.log("Color changed to Blue");
        return (colorChange("pink", 5000));
    })
    .then(() => {
        console.log("Color changed to Pink");
        return (colorChange("orange", 1000));
    })
    .then(() => {
        console.log("Color changed to Orange");
    })