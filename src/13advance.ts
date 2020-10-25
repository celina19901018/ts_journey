// 类型保护机制
// 概念：TapeScript能够在特定的区块中保证变量属于某种确定的类型，可以在区块中放心的引用此类型的属性，或者调用此类型的方法。
enum Type { Strong, Week }

class Java {
  helloJava() {
    console.log('hell Java')
  }
  java: any
}

class JavaScript {
  helloJavaScript() {
    console.log('hello JavaScript')
  }
  javascript: any
}

function getLanguage(type: Type, x: string | number) {
  let lang = type === Type.Strong ? new Java() : new JavaScript();
  // 使用类型断言
  // if ((lang as Java).helloJava) {
  //   (lang as Java).helloJava()
  // } else {
  //   (lang as JavaScript).helloJavaScript()
  // }

  // 方法一：使用instanceof关键字
  // if(lang instanceof Java) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 方法二：使用in关键字
  // 可以判断某个属性是否属于某个对象
  // if('java' in lang) {
  //   lang.helloJava()
  // } else {
  //   lang.helloJavaScript()
  // }

  // 方法三：使用typeof关键字
  // 可以判断一个基本的类型
  // if (typeof x === 'string') {
  //   x.length
  // } else {
  //   x.toFixed(2)
  // }

  // 方法四：创建类型保护函数，来保护对象的类型。如：isJava
  if (isJava(lang)) {
    lang.helloJava()
  } else {
    lang.helloJavaScript()
  }

  return lang
}

function isJava(lang: Java | JavaScript): lang is Java {
  // 返回类型：lang is Java 是类型谓词
  return (lang as Java).helloJava !== undefined
}

getLanguage(Type.Strong, Type.Week)
