let heading = document.querySelector("h1");
function colorChange(color, delay) {
    return (new Promise((resolve, reject) => {
        setTimeout(() => {
            let abef = (Math.floor((Math.random()) * 10) + 1);
            if (abef > 7) {
                reject("Promise Rejected");
            }
            heading.style.color = color;
            resolve("Color Changed");
        }, delay);
    }));
}
async function abcd() {
    await colorChange("green", 1000);
    await colorChange("blue", 1000);
    await colorChange("yellow", 1000);
    await colorChange("red", 1000);
    await colorChange("pink", 1000);
    let p = 10;
    console.log(p);
}
let heading2 = document.querySelector("h2");
function colorChange2(color, delay) {
    return (new Promise((resolve, reject) => {
        setTimeout(() => {
            let abef = (Math.floor((Math.random()) * 10) + 1);
            if (abef > 7) {
                reject("Promise Rejected");
            }
            heading2.style.color = color;
            resolve("Color Changed");
        }, delay);
    }));
}
async function abcd2() {
    try {
        await colorChange2("green", 1000);
        await colorChange2("blue", 1000);
        await colorChange2("yellow", 1000);
        await colorChange2("red", 1000);
        await colorChange2("pink", 1000);
    } catch (error) {
        console.log("error caught");
        console.log(error);
    }
    let p = 10;
    console.log(p);
}