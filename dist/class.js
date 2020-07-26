"use strict";
class Person {
    // 初期化時の処理をconstructorに記述する
    constructor(initName, initAge) {
        this.name = initName;
        this.age = initAge;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! ${this.name}. I am ${this.age} years old.`);
    }
}
const kyohei = new Person('Kyohei', 31);
kyohei.incrementAge();
kyohei.greeting();
