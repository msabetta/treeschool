/*
*  PROMISE
*/


const myPromise = new Promise(function (resolve, reject) {
    if (true === false)
        resolve("Success!");
    else
        reject("Rejected!");
});

/* myPromise
.then(function (message) {
    console.log(message);
})
.catch(function (errorMessage) {
    console.log(errorMessage);
}) */

//async await -> syntactic sugar
//è un modo più leggibile per avere a che fare con le promise
async function doMyPromise() {
    try {
        const message = await myPromise;
        console.log(message);
    } catch (e) {
        const errorMessage = e;
        console.log(errorMessage);
    }
}

doMyPromise();



