// 条件类型
// T extends U ? x : y
// 如果类型T能被赋值给U，那么结果类型是x，否则为y类型

type TypeName<T> =
  T extends string ? 'string' :
  T extends number ? 'number' :
  T extends boolean ? 'boolean' :
  T extends undefined ? 'undefined' :
  T extends Function ? 'function' :
  'object'

type T1 = TypeName<string>
type T2 = TypeName<string[]>

// 分步式条件类型
// 如果类型T是一个联合类型：(A | B) extends U ? x : y
// A extends U ? x : y | B extend U ? x : y
type T3 = TypeName<string | number>

type Diff<T, U> = T extends U ? never : T

type T4 = Diff<'a' | 'b' | 'c', 'a' | 'd'>
// Diff<'a', 'a' | 'd'> | Diff<'b', 'a' | 'd'> | Diff<'c', 'a' | 'd'>
// never | 'b' | 'c'
// 'b' | 'c'

type NotNull<T> = Diff<T, undefined | null>

type T5 = NotNull<number | string | undefined | null>

// Exclude<T, U>
// NotNullable<T>
// Extract<T, U> :可以抽取T类型中包含U类型的属性
type T6 = Extract<'a' | 'b' | 'c', 'a' | 'd'>

// ReturnType<T> :可以返回一个返回值的类型
type T7 = ReturnType<() => string>
