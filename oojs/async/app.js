async function myFunc() {
    let promise = new Promise(((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 2000);
    }));

    let newVar = await promise;

    return newVar;
}

myFunc()
    .then(d => console.log(d));