// function saveToDb(data) {
//     return new Promise((resolve, reject) => {
//         let internetSpeed = ((Math.floor((Math.random()) * 10)) + 1);
//         if (internetSpeed > 4) {
//             resolve("Success");
//         }
//         else {
//             reject("Failure");
//         }
//     })
// }
// saveToDb("Apna College")
//     .then((result) => {
//         console.log("Data 1 Saved");
//         console.log("Result of Promise:", result);
//         return (saveToDb("College Wallah"));
//     })
//     .then((result) => {
//         console.log("Data 2 Saved");
//         console.log("Result of Promise:", result);
//         return (saveToDb("Love Babbar"));
//     })
//     .then((result) => {
//         console.log("Data 3 Saved");
//         console.log("Result of Promise:", result);
//         return (saveToDb("Anuj Sharma"));
//     })
//     .then((result) => {
//         console.log("Data 4 Saved");
//         console.log("Result of Promise:", result);
//         return (saveToDb("Nishant Chahar"));
//     })
//     .then((result) => {
//         console.log("Data 5 Saved");
//         console.log("Result of Promise:", result);
//     })
//     .catch((error) => {
//         console.log("Poor Internet Connection. Unable to Save Data");
//         console.log("Result of Promise:", error)
//     })
function saveToDbb(dataa) {
    return new Promise((resolve, reject) => {
        var internetSpeedd = ((Math.floor((Math.random()) * 10) + 1));
        if (internetSpeedd > 4) {
            console.log(internetSpeedd);
            resolve("success");
        }
        else {
            console.log(internetSpeedd);
            reject("failure");
        }
    })
}
saveToDbb("abcd")
    .then((result) => {
        //console.log(internetSpeedd);
        console.log("data saved");
    })
    .catch((result) => {
        //console.log(internetSpeedd);
        console.log("poor internet connection");
    })