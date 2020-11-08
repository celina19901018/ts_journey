// 索引类型

let obj = {
  a: 1,
  b: 2,
  c: 3
}
// function getValues(obj: any, keys: string[]) {
//   return keys.map(key => obj[key])
// }
// console.log(getValues(obj, ['a', 'b']))
// console.log(getValues(obj, ['e', 'f']))


// 一、keyof T :类型T的所有公共属性的字面量的联合类型
interface Obj {
  a: number;
  b: string
}
let key: keyof Obj

// 二、索引访问操作符 —— T[K] :对象T的属性K所代表的类型
let value: Obj['a']
 
// 三、泛形约束 —— T extends U :泛形变量可以通过继承某个类型或某些属性
// 改造getValues函数
function getValues<T, K extends keyof T>(obj: T, keys: K[]): T[K][] {
  return keys.map(key => obj[key])
}
console.log(getValues(obj, ['a', 'b']))
// console.log(getValues(obj, ['e', 'f']))