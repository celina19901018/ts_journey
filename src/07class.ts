// 类 -- 抽象类与多态
// 1、抽象类是只能被继承，而不能被实例化的类
abstract class Animal {
  // 父类中定义直接实现的方法，子类就不需要再实现该方法，可以直接被调用
  eat() {
    console.log('grass')
  }
  abstract sleep(): void // 抽象方法
}
// let animal = new Animal()

class Sheep extends Animal {
  constructor(name: string) {
    super()
    this.name = name
  }
  name: string
  run() { }
  // 在子类中实现sleep这个抽象方法
  sleep() {
    console.log('sheep sleep')
  }
}
let sheep = new Sheep('miemie')

sheep.eat()

// 抽象类中也可以不指定的具体实现，这就构成了一个抽象方法，好处是知道子类有其他的实现，没必要在父类中实现
// 抽象类的好处一：可以抽离出代码的共性，实现代码的服用和拓展
// 抽象类的好处二：可以实现多态，在父类中定义一个抽象方法，在多个子类中对这个方法有不同的实现
// 在程序运行的时候，对不同的对象执行不同的操作，就实现了运行时的绑定

// 2、多态
class Horse extends Animal {
  constructor() {
    super()
  }
  sleep() {
    console.log('horse sleep')
  }
}
let horse = new Horse()

let animal: Animal[] = [sheep, horse]
animal.forEach(item => item.sleep())


// 3、链式调用
// 类的成员方法可以返回this对象，这样可以实现链式调用
class WorkFlow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}
new WorkFlow().step1().step2()

// 在继承的时候，可以表现成多态，这里的多态指的是this既可以是父类型，也可以是子类型
class MyFlow extends WorkFlow {
  next() {
    return this
  }
}
new MyFlow().next().step1().next().step2()
// MyFlow实例调用step1方法，在子类中查找不到，就会通过原型链，查找父类的方法
