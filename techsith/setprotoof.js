let toyota = {
    drive() {
        return 'Driving Toyota';
    }
}

// toyota.drive();

let camry = {
    wifi() {
        return 'using WiFi';
    }
}

Object.setPrototypeOf(camry, toyota);

console.log(camry.drive());