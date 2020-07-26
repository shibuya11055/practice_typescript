"use strict";
class Person2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        // constructorにpublic nameのように記述すれば、上で型定義しなくてもよい。
        this.id = 32;
        this.id = 31; //constructorの中では読み書き可能
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! ${this.name}. I am ${this.age} years old.`);
    }
}
const kyohei2 = new Person2('Kyohei2', 31);
kyohei2.incrementAge();
kyohei2.greeting();
