function saveToDb(data, success, failure) {
    let internetSpeed = (Math.floor((Math.random()) * 10) + 1);
    console.log`Your data is ${data}`;
    if (internetSpeed > 4) {
        success();
    } else {
        failure();
    }
}
saveToDb(
    "Apna College",
    () => {
        console.log("Data Saved");
        saveToDb(
            "Aman Verma",
            () => {
                console.log("Data 2 Saved");
                saveToDb(
                    "College Wallah",
                    () => {
                        console.log("Data 3 Saved");
                        saveToDb(
                            "Affan Asghar",
                            () => {
                                console.log("Data 4 Saved");
                                saveToDb(
                                    "Shradha Khapra",
                                    () => {
                                        console.log("Data 5 Saved");
                                    },
                                    () => {
                                        console.log("Poor Internet Connection 5");
                                    }
                                )
                            },
                            () => {
                                console.log("Poor Internet Connection 4")
                            }
                        )
                    },
                    () => {
                        console.log("Poor Internet Connection 3");
                    }
                )
            },
            () => {
                console.log("Poor Internet Connection 2");
            }
        )
    }
    , () => {
        console.log("Poor Internet Connection");
    }
)