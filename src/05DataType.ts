// 原始类型
let bool: boolean = true
let num: number = 1
let str: string = 'abc'

// 数组
let arr1: number[] = [1, 2, 3]
let arr2: string[] = ['a', 'b', 'c']
let arr3: Array<string> = ['d', 'e'] // 泛型

// 元组
let tuple: [number, string] = [1, 'a']
// 1、元组是一种特殊的数组，限定了数组的类型与个数
// 2、元组越界问题
tuple.push(2)
console.log(tuple)
tuple.unshift('g')
// 注意：元组允许push、unshift新元素，
//      1、但是push的新元素不允许越界访问，否则会报错；
//      2、unshift的新元素允许越界访问
//      实际开发中不建议这样使用
// tuple[2]
console.log(tuple[0])

// 函数
let fun = (x: number, y: number): number => x + y
// 注意：ts中需为函数参数添加类型注解，否则会报错，也可以为函数添加返回值类型
// 函数返回值类型可以省略，ts具有类型推断功能
let compute: (x: number, y: number) => number
// compute是一种函数类型，但是没有具体的实现，下面是compute的实现
compute = (a, b) => a + b

// 对象
let obj1: object = { x: 1, y: 2 }
// obj1.x = 3 在ts中直接修改属性成员是不允许的，因为obj是object类型，未指定具体属性成员
// 正确的方式：
let obj2: { x: number, y: number } = { x: 1, y: 2 }
obj2.x = 3
console.log(obj2.x)

// Symbol
let s1: symbol = Symbol()
let s2 = Symbol()
console.log(s1 === s2) // false

// undefined, null
let u: undefined = undefined
// u = 1
// 变量u的是undefined类型，就不能再被赋值为其他类型的值，只能赋值为它本身
let n: null = null
// 官方文档：undefined、null是所有类型的子类型

// 联合类型
let combine: number | undefined | null = 123
combine = undefined
combine = null

// void类型
// void 在js中是一种操作符，可以让所有的表达式返回undefined
let noReture = () => { } // 没有任何返回值的函数，那么它的类型就是void类型

// any类型
// 没有指定变量的类型，默认是any类型，这与js没有任何差别了
// 不是特殊情况，不建议使用any类型

// never 类型
// 永远没有返回值的类型
// 1、函数抛出了一个异常，那么它是never类型
let error = () => {
  throw new Error('error')
}
// 2、死循环，也是一个never类型
let endless = () => {
  while(true) {}
}
