function Banner(id) {
    this.box = document.getElementById(id);//获取最外层盒子
    this.oUl = utils.getByClass('ul_box',this.box)[0];// 获取 ul 条
    this.data = null;// 存数据
    this.boxW = utils.css(this.box,'width');//存储盒子的宽度
    this.index = 0;// 要显示的图片的索引
    this.n = 0;// 存储图片的个数
}
Banner.prototype = {
    constructor: Banner,
    getData: function () {
        //获取数据
        var xhr = new XMLHttpRequest();
        xhr.open('get','data.json',false);
        xhr.onreadystatechange =  () => {
            if(xhr.readyState == 4 && /^2\d{2}$/.test(xhr.status)){
                this.data = utils.toJson(xhr.responseText);
            }
        };
        xhr.send();
    },
    giveHtml: function () {
        //把数据放到页面上
        var str = '';//用来存储拼接的DOM字符串
        this.data.forEach((item,ind)=>{
            var {pic,title} = item;
            str += `<li>
                <img src="${pic}" alt="">
                <p>${title}</p>
            </li>`
        });
        utils.css(this.oUl,{
            width:this.data.length*this.boxW,
            position:'relative'
        });
        this.n = this.data.length;
        this.oUl.innerHTML = str;
    },
    play: function () {
        //让图片滚动  控制 oul的left值
        this.index++;// index == this.n-1 是显示最后一张图；做完++后 index变成了this.n
        if(this.index >= this.n){
            this.index = 0;
        }
        utils.css(this.oUl,'left',-this.boxW*this.index);
    }
};

var banner = new Banner('box');
banner.getData();
banner.giveHtml();
var timer = setInterval(function () {
    banner.play();
},3000);
console.log(banner.data);