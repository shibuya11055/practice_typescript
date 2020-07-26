"use strict";
class Person3 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    static isAdult(age) {
        if (age > 17) {
            return true;
        }
        return false;
    }
    incrementAge() {
        this.age += 1;
    }
    greeting() {
        console.log(`Hello! ${this.name}. I am ${this.age} years old.`);
        this.explainJob();
    }
}
Person3.species = 'Homo sapiens';
// const kyohei3 = new Person3('Kyohei3', 31);
// kyohei3.incrementAge();
// kyohei3.greeting();
// extendsで継承できる
class Teacher extends Person3 {
    // 継承しているクラスの要素意外に追加したい要素があればsuperを必ず使用する。
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    // exprainJobがabstract関数で設定されている理由は、継承先でそのメソッドがあるのかどうかを保障してくれるから。
    // 継承先でメソッドを定義し、継承元でメソッドを呼び出したいときに使う
    explainJob() {
        console.log(`I am a teacher and I teach ${this._subject}`);
    }
    ;
    get subject() {
        if (!this._subject) {
            throw new Error('there is no subject');
        }
        return 'Music';
    }
    set subject(value) {
        if (!value) {
            throw new Error('no subject');
        }
        this._subject = value;
    }
}
const teacher = new Teacher('Kyohei', 38, 'Math');
// teacher.greeting();
// staticとは new hoge　のようなときにnewがいらないこと
// console.log(Person3.species)
// console.log(Person3.isAdult(31))
// console.log(Teacher.species)
// console.log(Teacher.isAdult(31))
console.log(teacher.greeting());
