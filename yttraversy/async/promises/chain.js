async function first() {
    let promise1 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 1 kept");
            console.log('1 done');
        }, 2000);
    });
    let promise2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Promise 2 kept");
            console.log('2 done');
        }, 2000);
    });

    // console.log("Will wait 1");
    // let result1 = await promise1;
    // console.log("Will wait 2");
    // let result2 = await promise2;
    //
    // console.log(result1);
    // console.log(result2);

    const arr = await Promise.all([promise1, promise2])
    console.log(arr);
    console.log("done")

}

first();