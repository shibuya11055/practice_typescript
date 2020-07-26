abstract class Person3 {
  static species = 'Homo sapiens';
  static isAdult(age: number) {
    if (age > 17) {
      return true
    }
    return false
  }

  constructor(public name: string, protected age: number) {
  }

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person3) {
    console.log(`Hello! ${this.name}. I am ${this.age} years old.`)
    this.explainJob();
  }

  // abstractを利用するにはclassにabstractをつける
  // abstractクラスはインスタンス化（new）できないクラスとなる。
  // つまり、継承することを前提として作られるクラスとなる。
  abstract explainJob(): void;
}　

// const kyohei3 = new Person3('Kyohei3', 31);
// kyohei3.incrementAge();
// kyohei3.greeting();

// extendsで継承できる
class Teacher extends Person3 {

  // exprainJobがabstract関数で設定されている理由は、継承先でそのメソッドがあるのかどうかを保障してくれるから。
  // 継承先でメソッドを定義し、継承元でメソッドを呼び出したいときに使う
  explainJob() {
    console.log(`I am a teacher and I teach ${this._subject}`)
  };

  get subject() {
    if(!this._subject) {
      throw new Error('there is no subject')
    }
    return 'Music'
  }

  set subject(value) {
    if(!value){
      throw new Error('no subject')
    }
    this._subject = value;
  }

  // 継承しているクラスの要素意外に追加したい要素があればsuperを必ず使用する。
  constructor(name: string, age: number, public _subject: string) {
    super(name, age)
  }

  // ageはprivateだから普通は読み込めない -> 継承先で使いたいならprotectedにしておく
  // greeting(this: Teacher) {
  //   console.log(`Hello! ${this.name}. I am ${this.age} years old. My subject is ${this.subject}`)
  // }
}
const teacher = new Teacher('Kyohei', 38, 'Math');
// teacher.greeting();

// staticとは new hoge　のようなときにnewがいらないこと
// console.log(Person3.species)
// console.log(Person3.isAdult(31))
// console.log(Teacher.species)
// console.log(Teacher.isAdult(31))
console.log(teacher.greeting())