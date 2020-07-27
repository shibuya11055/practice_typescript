// プロパティ名のあとに「?」がつくと、あってもなくても良いプロパティとなる
interface Nameable {
  name: string;
  nickName?: string;
}

// interfaceで関数の型を定義することができる
interface addFunc {
  (num1: number, num2: number): number;
}

// interfaceはあくまでもインスタンスが持つ要素の型を定義している
// extendsでinterfaceの継承が可能。いくつでもOK
interface Human extends Nameable {
  age: number;
  // オブジェクトの関数の型指定
  greeting(message: string): void;
}

const human: Human = {
  name: 'kyohei',
  age: 38,
  greeting(message: string) {
    console.log(message)
  }
}

// inplementsはextendsと違って複数のinterfaceを継承できる
class Developer implements Human {
  constructor(public name: string, public age: number, public experience: number){}
  greeting(message: string){
    console.log('hello')
  }
}




//これもいけちゃう(Humanにはexperienceがないパターン)
const user: Human = new Developer('kyohei', 31, 2)