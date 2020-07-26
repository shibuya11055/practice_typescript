"use strict";
class Person {
    constructor(initName) {
        this.name = initName;
    }
    greeting() {
        console.log(`Hello! ${this.name}`);
    }
}
const kyohei = new Person('Kyohei');
console.log(kyohei);
kyohei.greeting();
const another = {
    name: 'another_kyohei',
    anotherGreeting: kyohei.greeting
};
another.anotherGreeting();
