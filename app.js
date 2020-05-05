(function () {
    const today = new Date();

    console.log(today);
    console.log(today.getDay());

    switch (today.getDay()) {
        case 1:
            console.log("I's Monday");
            break;
        case 2:
            console.log("I's Tuesday");
            break;
        case 3:
            console.log("I's Wednesday");
            break;
        case 4:
            console.log("I's Thursday");
            break;
        case 5:
            console.log("I's Friday");
            break;
        case 6:
            console.log("I's Saturday");
            break;
        case 7:
            console.log("I's Sunday");
            break;
    }
})();

