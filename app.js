const users = [
    {id: 1, name: 'John'},
    {id: 2, name: 'Tom'},
    {id: 3, name: 'Suzan'}
];

const names = users.map(u => u.name);

names.forEach(n => console.log(n));

for (let u of users) {
    console.log(u.name);
}

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 18
};

for (let key in person) {
    console.log(key, person[key]);
}