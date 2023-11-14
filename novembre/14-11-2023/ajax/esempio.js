async function f(){
    let promise = new Promise((resolve,reject) => {
        setTimeout(() => resolve("fatto!"),3000);
    });

    let result = await promise;
    console.log(result);
}

function c(){
    console.log("test");
}


f();

c();

console.log()