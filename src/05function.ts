// 1、定义函数
function add1(x: number, y: number) {
  return x + y
}

let add2: (x: number, y: number) => number

type add3 = (x: number, y: number) => number

interface add4 {
  (x: number, y: number): number
}

// js中对函数参数的个数没有限制，而在ts中函数参数的形参和实参必须一一对应


// 2、可选参数
function add5(x: number, y?: number) {
  return y ? x + y : x
}
// 注意：可选参数必须位于必选参数之后


// 3、默认参数
function add6(x: number, y = 0, z: number, w = 0) {
  return x + y + z
}
console.log(add6(1, undefined, 2))
// 注意：必选参数前，默认参数不可省略，必须参入undefined；必选参数后的默认参数可以不传


// 4、剩余参数
function add7(x: number, ...rest: number[]) {
  return x + rest.reduce((cur, pre) => cur + pre)
}
// 注意：剩余参数必须以数组形式存在
console.log(add7(1, 2, 3))


// 5、函数重载
// 静态语言如C++、Java都有重载的概念
// 含义：如果多个函数名称相同，参数个数，或者参数类型不同，那么就实现了函数重载
// 好处：不需要为了相似功能的函数，使用不同的函数名称，增加了代码的可读性

// ts的函数重载，需要我们定义一系列名称相同的函数声明
function add8(...rest: number[]): number
function add8(...rest: string[]): string
function add8(...rest: any[]): any {
  let first = rest[0]
  if (typeof first === 'string') {
    return rest.join('')
  }
  if (typeof first === 'number') {
    return rest.reduce((cur, pre) => cur + pre)
  }
}
console.log(add8(1, 2, 3))
console.log(add8('a', 'b', 'c'))
// ts在编译器处理重载的时候，会去查询一个重载的列表
// 会尝试第一个定义，如果匹配就会使用这个函数定义，如果不匹配会接着往下查找
// 我们把最容易匹配的定义写在最前面