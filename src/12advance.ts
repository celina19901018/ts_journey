// X 兼容 Y : X（目标类型）= Y（源类型）
interface X {
  a: any,
  b: any
}

interface Y {
  a: any,
  b: any,
  c: any
}

let xx: X = { a: 1, b: 2 }
let yy: Y = { a: 1, b: 2, c: 3 }
xx = yy
// y = x
// 只要Y接口具备X接口的所有属性，即使y有额外的属性，y依然可以认为是x类型，x类型可以兼容y类型


// 函数兼容性
type Handler = (a: number, y: number) => void
function hof(handler: Handler) {
  return handler
}

// 1)参数个数
let handler1 = (a: number) => { }
hof(handler1)
let handler2 = (a: number, b: number, c: number) => { }
// hof(handler2)


// 可选参数与剩余参数
let aa = (p1: number, p2: number) => { }
let bb = (p1?: number, p2?: number) => { }
let cc = (...args: number[]) => { }

aa = bb
aa = cc

// bb = aa
// bb = cc

cc = aa
cc = bb

// 2）参数类型
let handler3 = (a: string) => { }
// hof(handler3)


interface Point3D {
  x: number,
  y: number,
  z: number
}

interface Point2D {
  x: number,
  y: number
}

let p2d = (point: Point2D) => { }
let p3d = (point: Point3D) => { }
// p2d = p3d
p3d = p2d


// 3)返回值类型
let d = () => ({ name: 'Alice' })
let g = () => ({ name: 'Alice', location: 'Shanghai' })
d = g
// g = d
// ts要求目标返回值的类型与源函数返回值类型相同，或为其子类型


// 4）函数重载
function overload(a: number, b: number): number// 目标函数
function overload(a: string, b: string): string// 目标函数
function overload(a: any, b: any): any { }// 源函数
// 函数重载，目标函数参数要多于源函数参数，而且返回值类型也要符合相应的要求


// 2、枚举类型
enum Fruit { Apple, Banana }
enum Color { Red, Black }
let fruit: Fruit.Apple = 3// 数字和枚举可以相互兼容
let no: number = Fruit.Apple
// 枚举之间是不兼容的
// let color: Color.Red = Fruit.Apple


// 3、类的兼容性
class clsA {
  constructor(p: number, q: number) { }
  id: number = 1
  private name: string = 'clsA'
}

class clsB {
  constructor(p: number) { }
  id: number = 2
  static s = 1
  private name: string = 'clsB'
}

let a = new clsA(1, 2)
let c = new clsB(1)
// a = c
// c = a
// 在比较两个类时，类的静态成员和构造函数是不参与比较的。
// 如果两个类具有相同的实例成员，那么这两个类可以相互兼容

// 如果类中含有私有成员，是不相互兼容的，但是父类与子类之间可以相互兼容
class clsC extends clsA { }
let h = new clsC(1, 2)
a = h
h = a


// 4、泛形的兼容性
interface Empty<T> {
  value: T
}
// let obj3: Empty<number> = {}
// let obj4: Empty<string> = {}
// obj3 = obj4
// obj4 = obj3
// 泛形接口：只有类型参数T被接口成员使用的时候才影响泛形接口的兼容性

let obj5 = <T>(x: T): T => {
  console.log('x')
  return x
}
let obj6 = <U>(y: U): U => {
  console.log('y')
  return y
}
obj5 = obj6
obj6 = obj5
// 泛形函数：没有指定
