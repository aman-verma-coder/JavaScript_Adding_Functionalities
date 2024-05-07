function saveToDb(data) {
    return new Promise((resolve, reject) => {
        let networkSpeed = (Math.floor(((Math.random()) * 10) + 1));
        if (networkSpeed > 4) {
            resolve();
        } else {
            reject();
        }
    })
}
saveToDb("Apna College")
    .then(() => {
        console.log("Apna College Saved");
        return (saveToDb("Physics Wallah"));
    })
    .then(() => {
        console.log("Physics Wallah Saved");
        return (saveToDb("Love Babbar"));
    })
    .then(() => {
        console.log("Love Babbar Saved");
        return (saveToDb("Anuj Sharma"));
    })
    .then(() => {
        console.log("Anuj Sharma Saved");
    })
    .catch(() => {
        console.log("Weak Internet Connection! Unable to Save the Data");
    })