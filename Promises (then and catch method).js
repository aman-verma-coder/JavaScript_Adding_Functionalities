function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let internetSpeed = Math.floor(Math.random() * 10) + 1;
        if (internetSpeed > 4) {
            resolve();
        } else {
            reject();
        }
    })
}
let request = saveToDb("Apna College");
request.then(() => {
    console.log("Apna Collegfe: Data Saved");
    console.log(request);
}).catch(() => {
    console.log("Apna College: Poor Internet Connection");
    console.log(request);
})
saveToDb("Physics Wallah").then(() => {
    console.log("Physics Wallah: Data Saved");
    console.log(request);
}).catch(() => {
    console.log("Physics Wallah: Poor Internet Connection");
    console.log(request);
})
