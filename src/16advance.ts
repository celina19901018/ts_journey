// 映射类型

interface Obj {
  a: number,
  b: string,
  c: boolean
}

// 1、同态类型：只会作用于Obj的属性，而不会引入新的属性

// 将一个接口的属性变成只读属性
type ReadonlyObj = Readonly<Obj>
// 将一个接口的属性变成可选属性
type ParticalObj = Partial<Obj>
// 筛选一个接口的属性
type PickObj = Pick<Obj, 'a' | 'b'>

// 2、非同态类型：会创建新的属性
type RecordObj = Record<'e' | 'f', Obj>
