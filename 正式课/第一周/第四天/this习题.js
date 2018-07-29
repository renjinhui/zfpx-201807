var name = "zhufengpeixun.com";
var person = {
    name: "zhufeng",
    pro: {
        name: "peixun",
        getName: function() {
            return this.name;
        },
        getName2: function () {
            return function () {
                return this.name
            }
        }
    }
};
console.log(person.pro.getName());
var pepole = person.pro.getName;
person.pro.getName2()();
console.log(pepole());



//2
var num = 2;
var obj = {
    num: 1,
    fn: (function (num) {
        num *= 2;
        this.num +=1;
        return function () {
            this.num *=3;
            ++num;
            console.log(num)
        }
    })(num)
};
var fn = obj.fn;
fn(10);
obj.fn(20);
console.log(num, obj.num);


//3、
function a(xx){
    this.x=xx;
    return this
};
var x=a(5);
var y=a(6);
console.log(x.x);
console.log(y.x);

//4
