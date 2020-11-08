// 1、类实现接口
interface Human {
  // new(name: string): void
  name: string;
  eat(): void
}

class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  // private name: string
  // protected name: string
  name: string
  eat() { }
}
// 注意一：类实现接口的时候，必须实现接口中声明的所有属性
// 注意二：接口只能约束类的公有成员
// 注意三：接口也不能约束类的构造函数


// 2、接口与接口的继承
// 接口可以像类一样实现继承，并且一个接口可以继承多个接口
interface Man extends Human {
  run(): void
}
interface Child {
  cry(): void
}
interface Boy extends Man, Child { }

let boy: Boy = {
  name: '',
  run() { },
  cry() { },
  eat() { }
}
// 接口的继承可以抽离出可重用的接口，可以将多个接口合并成一个接口


// 3、接口继承类
// 接口把类的成员都抽象出来，也就是只有类的成员结构，而没有具体的实现
class Auto {
  state = 1
  // private state2 = 0
}
interface AutoInterface extends Auto {
  // AutoInterface这个接口中隐含了state这个属性
}

// 要想实现AutoInterface这个接口，只需一个类的成员和state属性即可，如：
class Cus implements AutoInterface {
  state = 2
}

// Auto 的子类也可以实现 AutoInterface 这个接口
class Bus extends Auto implements AutoInterface {
  // 在 Bus 中，我们不需要实现 state 属性，因为它是 Auto 的子类，自然继承了父类的属性
}

// 注意：接口在抽离类成员的时候，不仅抽离了公共成员，也抽离了私有和受保护成员
