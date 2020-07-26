class Person {
  name: string; //何も書かなければpublic
  private age: number; //privateをつけることによって、classの中からしかageにアクセスできない。

  // 初期化時の処理をconstructorに記述する
  constructor(initName: string, initAge: number) {
    this.name = initName;
    this.age = initAge;
  }

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person) {
    console.log(`Hello! ${this.name}. I am ${this.age} years old.`)
  }
}　

const kyohei = new Person('Kyohei', 31);
kyohei.incrementAge();
kyohei.greeting();