// 一、交叉类型
interface DogInterface {
  run(): void
}

interface CatInterface {
  jump(): void
}

// 交叉类型使用 ‘&’ 符号连接
let pet: DogInterface & CatInterface = {
  run() { },
  jump() { }
}
// 交叉类型从语义上是两个类型的交集，实际上是两个类型的并集

// 二、联合类型
// 声明的类型并不确定，可以为多个类型中的一个
// 1、数值与字符串的联合类型
let a1: number | string = 'a'

// 2、字符串联合类型
let a2: 'a' | 'b' | 'c'

// 3、数字联合类型
let a3: 1 | 2 | 3

// 4、对象联合类型
class WangWang implements DogInterface {
  run() { }
  eat() { }
}

class MiaoMiao implements CatInterface {
  jump() { }
  eat() { }
}

enum Master { WangWang, MiaoMiao }

function getPet(master: Master) {
  let pet = master === Master.WangWang ? new WangWang() : new MiaoMiao()
  // 如果一个对象为联合类型，在类型未确定的情况下，只能访问所有对象的共有成员，非共有成员不可访问
  pet.eat()
  // 从语义上看，联合类型是能访问对象的并集，实际自能访问对象的交集
  return pet
}


// 可区分的联合类型，实质上是结合了联合类型与字面量类型的一个类型保护方法
// 核型思想：一个类型如果是多个类型的联合类型，并且每个类型之间如果有共有的属性，我们可以凭借公共属性创建不同的类型保护区块
interface Square {
  kind: 'square',
  size: number
}

interface Rectangle {
  kind: 'rectangle',
  width: number,
  height: number
}
interface Circle {
  kind: 'circle',
  r: number
}

type Shape = Square | Rectangle | Circle
// 方法一：为函数添加返回类型
// function area(shape: Shape): number {
//   switch (shape.kind) {
//     case 'square':
//       return shape.size * shape.size
//     case 'rectangle':
//       return shape.width * shape.height
//   }
// }

// 方法二：利用never类型
function area(shape: Shape) {
  switch (shape.kind) {
    case 'square':
      return shape.size * shape.size
    case 'rectangle':
      return shape.width * shape.height
    case 'circle':
      return Math.PI * shape.r ** 2
    default:
      return ((e: never) => { throw new Error(e) })(shape)
  }
}

console.log(area({ kind: 'circle', r: 2 }))