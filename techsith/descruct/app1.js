const john = {
    name: 'John Doe',
    city: 'Miami',
    age: 18,
    gender: 'm'
}

const {city, name} = john;
console.log(city);
console.log(name);

let map = new Map();
for (p in john) {
    map.set(p, john[p]);
}

console.log(map);

map.forEach((v, k) => console.log(k, v));