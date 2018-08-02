function Fn() {
    this.x = 100;
    this.y = 200;
    this.getX = function () {
        console.log(this.x);
    }
}
Fn.prototype = {
    y: 400,
    getX: function () {
        console.log(this.x);
    },
    getY: function () {
        console.log(this.y);
    },
    sum: function () {
        console.log(this.x + this.y);
    }
};
var f1 = new Fn;
var f2 = new Fn;
console.log(f1.getX === f2.getX);
console.log(f1.getY === f2.getY);
console.log(f1.__proto__.getY === Fn.prototype.getY);
console.log(f1.__proto__.getX === f2.getX);
console.log(f1.getX === Fn.prototype.getX);
console.log(f1.constructor);
console.log(Fn.prototype.__proto__.constructor);
f1.getX();
f1.__proto__.getX();
f2.getY();
Fn.prototype.getY();
f1.sum();
Fn.prototype.sum();





function Foo() {
    getName = function () {console.log(1);};
    return this;
}
Foo.getName = function () {console.log(2);}; // 当作对象
Foo.prototype.getName = function () {console.log(3);};
var getName = function () {console.log(4);};
function getName() {console.log(5);}

Foo.getName(); // 2  ---》 当作普通函数执行
getName(); //4
Foo().getName(); // 1
getName();// 1
var a = new Foo.getName(); // 2  ---》 当作构造函数
//  a 是 把 Foo 当作 对象时，调取到 他身上的 getName，把这个getName当作 构造函数执行，返回的 实例赋给 a

var b = new Foo().getName();// new Foo() 返回的 Foo的实例 3
// 先执行 new Foo； 返回Foo的一个实例 ，再通过 实例.getName 去找 getName这个属性，然后 把他执行
var c = new new Foo().getName();
// 限制性 new Foo; 返回 Foo的一个实例， 再通过 实例.getName 去找 getName这个属性；然后把它当作 构造函数执行
// new Foo() 返回的  Foo的实例
// new  Foo实例.getName()
// c 是 getName 的 实例
console.log(a,b,c);


function Fn(){
    var a =1;
    this.a = a
}
Fn.prototype.say = function(){
    this.a = 2
};
Fn.prototype = new Fn;
var f1 = new Fn;

f1.__proto__.b = function (){
    this.a = 3
};
console.log(f1.a);
console.log(f1.prototype);
console.log(f1.b);
console.log(f1.hasOwnProperty('b'));
console.log('b' in f1);
console.log(f1.constructor == Fn);
console.log(Fn.prototype);
