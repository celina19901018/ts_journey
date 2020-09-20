// 1、泛形定义函数
function log<T>(value: T): T {
  console.log(value)
  return value
}
// 优势一：类型T不需要事先定义
// 优势二：保证了输入类型与返回值类型是一致的

log<string[]>(['a', 'b', 'c'])
log([1, 2, 3])


// 2、泛形定义函数类型
// 使用函数别名定义一个函数类型
type Log = <T>(value: T) => T
// 具体实现为log
let myLog: Log = log


// 3、泛形接口
// 方法一：这种方法和类型别名的定义完全等价
// interface MyLog {
//   <T>(value: T): T
// }

// 方法二：将泛形变量放在接口名称的后面，可以用泛形约束接口的其他成员，接口的所有成员都收到泛形变量的约束
interface MyLog1<T> {
  (value: T): T
}
// 注意一：当泛形变量约束了整个接口之后，在实现的时候，必须指定一个类型，如：
let logPrint1: MyLog1<number> = log
logPrint1(1)

// 注意二：如果不指定类型，也可以在接口定义中指定一个默认类型，如：
interface MyLog2<T = string> {
  (value: T): T
}
let logPrint2: MyLog2 = log
logPrint2('1')
