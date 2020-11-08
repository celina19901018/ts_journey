// 接口的合并
interface A {
  x: number;
  foo(bar: number): number;     // 4
  foo(bar: 'a'): string         // 1
}
interface A {
  y: number;
  foo(bar: string): string;     // 2
  foo(bar: number[]): number[]  // 3
}
let interfaceA: A = {
  x: 1,
  y: 1,
  foo(bar: any) {
    return bar
  }
}
// 注意：接口中定义的函数，就是这个函数重载的列表。
// 在接口内部，函数重载的顺序就是书写的顺序；
// 而在接口之间呢？后面的接口会排在前面。
// 注意：有个例外，如果函数的参数是一个字符字面量的话，函数声明会提升到最顶端




// 命名空间与函数的合并
function Lib() { }
namespace Lib {
  export let lib = 'version'
}
console.log(Lib.lib)


// 命名空间与类的合并
class Fib { }
namespace Fib {
  export let state = 1
}
console.log(Fib.state)

// 注意：命名空间不能位于与之合并的类与函数前

// 命名空间与枚举的合并
enum Color {
  Blue,
  Green
}
namespace Color {
  export function mix() { }
}
console.log(Color)
// 注意：命名空间可以位于与之合并的枚举前

// 思考：为什么会这样呢？