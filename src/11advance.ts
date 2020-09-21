// 类型推断

// 不需要指定变量类型（函数的返回值类型）,TypeScript可以根据有些规则自动地为其推断出一个类型

// 1、基础类型推断：
// a、初始化一个类型
// b、指定函数参数
// c、确定函数返回值
let x = 1
let y = (a = 1) => { }


// 2、最佳通用类型推断
let b = [1, null]

// 3、上下文类型推断,通常发生在一个事件处理中
window.onkeydown = (event: object) => {
  
}


// 4、类型断言
interface Foo {
  bar: number
}
let foo = {} as Foo
foo.bar = 1
// foo 对象缺少bar属性

// 直接将FOO对象类型指定为Foo
let FOO: Foo = {
  bar: 1
}