// 命名空间与函数的合并
function Lib() { }
(function (Lib) {
    Lib.lib = 'version';
})(Lib || (Lib = {}));
console.log(Lib.lib);
// 命名空间与类的合并
var Fib = /** @class */ (function () {
    function Fib() {
    }
    return Fib;
}());
(function (Fib) {
    Fib.state = 1;
})(Fib || (Fib = {}));
console.log(Fib.state);
// 注意：命名空间不能位于与之合并的类与函数前
// 命名空间与枚举的合并
var Color;
(function (Color) {
    Color[Color["red"] = 0] = "red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["green"] = 2] = "green";
})(Color || (Color = {}));
(function (Color) {
    function mix() { }
    Color.mix = mix;
})(Color || (Color = {}));
console.log(Color);
// 注意：命名空间可以位于与之合并的枚举前
// 思考：为什么会这样呢？
