async function myFunc() {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('Hello'), 2000);
    });

    const result = await promise;

    return "Result is: " + result;
}


myFunc()
    .then(d => console.log(d));