class Person2 {
  // constructorにpublic nameのように記述すれば、上で型定義しなくてもよい。
  readonly id: number = 32;
  constructor(public name: string, private age: number) {
    this.id = 31; //constructorの中では読み書き可能
  }

  incrementAge() {
    this.age += 1;
  }

  greeting(this: Person2) {
    console.log(`Hello! ${this.name}. I am ${this.age} years old.`)
  }
}　

const kyohei2 = new Person2('Kyohei2', 31);
kyohei2.incrementAge();
kyohei2.greeting();