// 定义枚举成员使用enum关键字

// 1、数字枚举
enum Role {
  Reporter,
  Developer = 3,
  Maintainer,
  Owner,
  Guest
}
console.log(Role.Reporter) // 数字枚举第一个枚举成员从0开始, 后面的枚举成员的值会递增
// 当然也可以对枚举成员自定义初始值，后面枚举成员的值会相应的递增

// Role.Reporter = 1 // 枚举成员的值不可修改，因为它是只读类型

console.log(Role) // 我们发现，枚举特别像对象
// 数字枚举可以用枚举成员的名字来索引，也可以用枚举成员的值来索引
// 数字枚举实现的原理是反向映射


// 2、字符串枚举
enum message {
  success = '成功',
  fail = '失败'
}
// 字符串枚举只可用成员的名字来索引，所以字符串枚举不存在反向映射


// 3、异构枚举，数字枚举与字符串枚举混用
enum Answer {
  N,
  Y = 'yes'
}
// 不建议使用，容易引起混淆


// 4、枚举成员
enum Char {
  // const 常量枚举
  a,          // 1、没有初始值
  b = Char.a, // 2、对已有枚举的引用
  c = 1 + 3,  // 3、常量的表达式
  // 产量枚举成员在编译的时候计算出结果，以常量形式出现在运行时环境

  // computed member 需计算的枚举成员，是一些非常量的表达式
  // 这些枚举成员的值不会在编译阶段被计算，而会保留到程序的执行阶段
  d = Math.random(),
  e = '123'.length,
  // 注意：在computed member后面的枚举成员必须被赋初始值，否则会报错
  f = 1
}

// 5、const 声明的枚举 -- 常量枚举
const enum Month {
  Jan,
  Feb,
  Mar
}
// 注意：const 声明的枚举在编译阶段会被移除
// 作用：当我们不想使用一个对象，而只想使用它的值的时候，可以使用const声明的枚举，这样可以减少在编译环境中的代码
let month = [Month.Jan, Month.Feb, Month.Mar]


// 6、枚举类型
// 在某些情况下，枚举和枚举成员可以作为一种单独的类型存在
enum E { a, b }
enum F { a = 0, b = 1 }
enum G { a = 'apple', b = 'orange' }

let e: E = 3
let f: F = 3
// e === f // false 两种不同类型的枚举不能进行比较


let e1: E.a = 1
let e2: E.b
// e1 === e2 // false 不同类型的枚举成员不能进行比较
let e3: E.a = 1
e1 === e3 // true 相同类型的枚举成员能进行比较


let g1: G = G.a
let g2: G.a = G.a
