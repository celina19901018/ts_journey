// 1、泛形类
class Car<T>{
  run(value: T) {
    console.log(value)
    return value
  }
}
// 这样泛形就可以约束类的所以成员了
// 注意：泛形不能应用于类的静态成员

// 实例化Car类，显示传入实例化类型参数，如number类型，实例的方法将收到泛形的约束
let car1 = new Car<number>()
car1.run(1)

// 也可不显示传入类型参数，这样参数类型就可以是任意的值
let car2 = new Car()
car2.run({ a: 1 })
car2.run('a')


// 2、泛形参数
interface Length {
  length: number
}
function bus<T extends Length>(value: T): T {
  console.log(value, value.length)
  // T 类型不存在length属性，这时候需要我们运用到类型约束这个概念
  // 需要我们预定义一个接口，这个接口含有一个length属性，让类型 T 继承 Length 接口
  return value
}
// T 继承 Length 接口，T 收到了一定约束，不能再传入任意类型参数了，输入的参数必须具有length属性
bus([1, 2, 3])
bus('abc')
bus({ length: 1 })


// 使用泛形的好处：
// 函数和类可以轻松地支持多种类型，增强程序的拓展性
// 不必写多条函数重载，冗长的联合类型声明，增强代码可读性
// 灵活控制类型之间的约束
