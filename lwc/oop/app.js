function Person() {
    this.greet = function () {
        console.log('Hello');
    }
}

let person = new Person();
person.greet();