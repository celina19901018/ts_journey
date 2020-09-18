// 1、使用变量定义函数类型
let A: (x: number, y: number) => number;

// 2、接口定义函数类型
interface B {
  (x: number, y: number): number
}

// 3、类型别名定义函数类型，用type实现
type C = (x: number, y: number) => number


// 1、2是等价的


// 函数的具体实现
A = (x, y) => x + y;
let add: B | C = (a, b) => a + b;


// 混合类型的接口
interface Lib {
  (): void,
  version: string,
  doSomething(): void
}

let lib: Lib = (() => { }) as Lib;
lib.version = '1.0.0';
lib.doSomething = () => { }
// 即使添加了version属性和doSomething方法，类型检查也未通过，这里就需要使用类型检查

// 但是使用类型断言，对全局暴露了一个全局Lib，它是一个单例，规避的方法可以定义一个函数
function getLib() {
  let lib: Lib = (() => { }) as Lib;
  lib.version = '1.0.0';
  lib.doSomething = () => {
    console.log('执行了');
  }
  return lib;
}

let lib1 = getLib();
console.log(lib1);
console.log(lib1.version);

let lib2 = getLib();
console.log(lib2);
console.log(lib2.doSomething());

