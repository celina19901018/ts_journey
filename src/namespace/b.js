/// <reference path="./a.ts" />
var Shape;
(function (Shape) {
    function square(x) {
        return x * x;
    }
    Shape.square = square;
})(Shape || (Shape = {}));
console.log(Shape.square(2));
console.log(Shape.cricle(2)); // 跨模块调用命名空间，会报错哟！解决方式是通过三斜线指令
// 注意：命名空间和模块不要混用，不要在一个模块中使用命名空间，命名空间最好是在一个全局的环境中被引用
// 最佳的方式是，将a、b文件编译成js文件，在index.html文件中通过<script>标签来引入
// 命名空间别名
var circle = Shape.cricle;
console.log(circle(3));
