"use strict";
class Person4 {
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
Person4.species = 'Homo sapiens';
class Teacher1 extends Person4 {
    // 継承しているクラスの要素意外に追加したい要素があればsuperを必ず使用する。
    // constructor関数にprivateをつけることでインスタンス化できなくなる
    constructor(name, age, _subject) {
        super(name, age);
        this._subject = _subject;
    }
    explainJob() {
        console.log(`I am a teacher1 and I teach ${this._subject}`);
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
    // static関数でインスタンスを返す
    static getInstance() {
        if (Teacher1.instance) {
            return Teacher1.instance;
        }
        else {
            Teacher1.instance = new Teacher1('kyohei', 38, 'Math');
            return Teacher1.instance;
        }
    }
}
// privateしているので下記のようなnewは不可だが、classの中でならインスタンスを作れる
// const teacher1 = new Teacher1('Kyohei', 38, 'Math');
// インスタンスにしなくても使えるのはstaticプロパティ
const teacher1 = Teacher1.getInstance();
const teacher2 = Teacher1.getInstance();
console.log(teacher1.name);
console.log(teacher2.name);
