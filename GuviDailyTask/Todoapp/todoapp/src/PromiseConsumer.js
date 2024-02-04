let promiseObj = new Promise((resolve, reject) => {
    console.log("Getting info from DB");
    setTimeout(()=> {
        //resolve("promise consumer code")
        reject("cant get the info");
    },1000);
});

// promiseObj.then(
//     (val) =>{
//         console.log(`Info from Db is ${val}`);
//     },
//     (err) =>{
//         console.log(`Error occured ${err}`);
//     }
// );
promiseObj.catch((err)=> {
    console.log(`Error occured ${err}`);
})
