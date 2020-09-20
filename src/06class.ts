// 类 -- 类的继承与成员修饰符
// 1、ts类的基本实现
class Dog {
  constructor(name: string) {
    this.name = name;
  }
  name: string
  run() { }
  private pri() { }
  protected pro() { }
  readonly legs: number = 4
  static food: string = 'bones'
}
// 与es不同的是，我们未ts类的成员属性添加了类型注解，也为构造函数参数添加了类型注解
// 构造函数的返回值是这个类的本身，即Dog
// 无论是在es中，还是在ts中，“类的成员属性”都是实例属性，而不是原型属性，“类的成员方法”都是“原型”方法
console.log(Dog.prototype)
let dog = new Dog('wangwang')
console.log(dog)
// 与es不同的是，ts的实例属性必须具有初始值，或者在构造函数中被初始化，如：
class Duck {
  private constructor(name: string) { }
  name: string = 'duck' // 也可将属性设置为可选属性，就不会报错
  run() { }
}

// 2、类的继承
class Husky extends Dog {
  constructor(name: string, color: string) {
    super(name) // 派生类的构造函数必须包含super调用
    this.color = color // this调用必须在super调用之后
    // this.pri()
    this.pro()
  }
  color: string
}

// 3、类的成员修饰符
// public -- 对所有成员可见

// private 私有成员
// 注意一：只能被类本身调用，不能被类的实例调用，也不能被子类调用
// dog.pri()

// 注意二：也可以给类的构造函数添加私有成员属性，那么这个类既不能被实例化，也不能被继承
// let duck = new Duck()
// class Dusky extends Duck {
//   constructor(name: string) {
//     super(name)
//   }
// }

// protected 受保护成员
// 注意一：受保护成员，只能在类和子类中调用，而不能在类的实例中被访问
// console.log(dog.pro())

// 注意二：类的构造函数也可以添加受保护成员属性，这个类不能被实例化，而只能被继承，相当于声明了一个“基类”
class Cat {
  protected constructor(name: string) {
    this.name = name
  }
  name?: string
}
// let cat = new Cat()
class Cusky extends Cat {
  constructor(name: string, public color: string) {
    super(name)
    this.color = color
  }
  // color: string
}


// readonly 只读属性
// 注意：只读属性不可更改，只读属性必须被初始化


// 构造函数的参数也可以添加修饰符，作用是将参数自动变成了实例属性，这样可以省略在类中的定义，见子类Cusky


// static 静态成员属性
// 注意：类的静态成员只能通过类名调用，而不能通过子类调用
console.log(Dog.food)
// console.log(dog.food)
// 类的静态成员可以被继承
console.log(Husky.food)