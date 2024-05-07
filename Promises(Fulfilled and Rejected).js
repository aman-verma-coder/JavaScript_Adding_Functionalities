function saveToDb(data) {
    return new Promise((success, failure) => {
        let internetSpeed = ((Math.floor((Math.random()) * 10)) + 1);
        if (internetSpeed > 4) {
            success(console.log("Promise is fulfilled"));
        } else {
            failure(console.log("Promise is rejected"));
        }
    })
}
saveToDb("Apna College");
saveToDb("Apna College");
saveToDb("Apna College");
saveToDb("Apna College");
saveToDb("Apna College");
saveToDb("Apna College");
saveToDb("Apna College");
saveToDb("Apna College");
saveToDb("Apna College");
saveToDb("Apna College");