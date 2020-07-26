class Person {
  name: string;
  constructor(initName: string) {
    this.name = initName;
  }

  greeting(this: { name: string }) {
    console.log(`Hello! ${this.name}`)
  }
}

const kyohei = new Person('Kyohei');
console.log(kyohei)
kyohei.greeting();

const another = {
  name: 'another_kyohei',
  anotherGreeting: kyohei.greeting
}
another.anotherGreeting();