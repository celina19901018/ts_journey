// 定义接口使用关键字interface

interface List {
  id: number;
  name: string;
  [x: string]: any;
}

interface Result {
  data: List[]
}

function render(result: Result) {
  result.data.forEach(element => {
    console.log(element.id, element.name)
  });
}

let result = {
  data: [
    {
      id: 1,
      name: 'apple',
      des: 'a apple'
    },
    {
      id: 2,
      name: 'orange'
    }
  ]
}

render(result)
// 在data[0]中添加des属性，ts 采用了一种“鸭式变形法”，是一种动态语言类型风格
// 只要传入的对象满足必要条件，那么就是被允许的，即使传入多余的字段也可以通过类型检查


// render({
//   data: [
//     {
//       id: 1,
//       name: 'apple',
//       des: 'a apple'
//     },
//     {
//       id: 2,
//       name: 'orange'
//     }
//   ]
// })
// 注意：如果直接传入对象字面量，就会对额外的字段进行类型检查


// 绕过检查的方法：
// 1、将对象字面量赋给一个变量后传入，见33行
// 2、类型断言 -- 明确告诉编译器传入的对象的类型是Result，编译器会绕过类型检查，两种方法如下，建议用第一种
render({
  data: [
    {
      id: 1,
      name: 'apple',
      des: 'a apple'
    },
    {
      id: 2,
      name: 'orange'
    }
  ]
} as Result);

render(<Result>{
  data: [
    {
      id: 1,
      name: 'apple',
      des: 'a apple'
    },
    {
      id: 2,
      name: 'orange'
    }
  ]
})
// 3、使用字符串索引签名，见6行，用任意的字符串去索引List，可以得到任意的结果，这样List就可以支持多个属性了


interface Data {
  age?: number;// 可选属性
  readonly id: number;// 只读属性
}

function DataChange(data: Data) {
  // data.id++; // 只读属性，只读属性不允许修改
}


// 当我们不确定一个接口中可索引的接口，就可以使用可索引接口；
// 可以索引的接口可以用数字索引，也可以用字符串索引

// 数字索引接口
interface StringArray {
  [index: number]: string; // 用任意的数字索引StringArray，都可以得到一个string，这就相当于声明了一个字符串数组
}
let chars: StringArray = ['A', 'B', 'C']


// 字符串索引接口
interface Names {
  [x: string]: any;
  // y:number;// number类型的属性y不能赋值给字符串索引类型
  [z: number]: string;// 两种索引可以混用
  // 注意：数字索引的返回值必须是字符串索引返回值的子类型，javascript会进行类型转换，将number转化为string
}
