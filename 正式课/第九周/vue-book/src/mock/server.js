 /*实现一个LazyMan，可以按照以下方式调用:
     1) LazyMan(“Hank”)输出:
     Hi! This is Hank!

     2) LazyMan(“Hank”).sleep(10).eat(“dinner”)输出
     Hi! This is Hank!
     //等待10秒..
     Wake up after 10
     Eat dinner~

     3) LazyMan(“Hank”).eat(“dinner”).eat(“supper”)输出
     Hi This is Hank!
     Eat dinner~
     Eat supper~

     4) LazyMan(“Hank”).sleepFirst(5).eat(“supper”)输出
     //等待5秒
     Wake up after 5
     Hi This is Hank!
     Eat supper*/



function Man(name){
	this.evAry = [];
	let fn = () => {
		console.log(name);
		this.next()
	}
	this.evAry.push(fn);
	setTimeout(()=>{
		this.next()
	},0)
}
Man.prototype.next = function(){
	let fn = this.evAry.shift();
	fn && fn();
}
Man.prototype.sleep = function (n) {
	let fn = ()=>{
		setTimeout(()=>{
			console.log(`wake up after${n}s`);
			this.next()
		},n*1000)
	}
	this.evAry.push(fn);
	return this
}
Man.prototype.eat = function(str){
	let fn = ()=>{
		console.log(`Eat ${str}`);
		this.next();
	}
	this.evAry.push(fn);
	return this
}
Man.prototype.sleepfirst = function(n){
	let fn = ()=>{
		setTimeout(()=>{
			console.log(`sleepfirst ${n}s`);
			this.next()
		},n*1000)
	}
	this.evAry.unshift(fn);
	return this
}

let LazyMan = function (name) {
	return new Man(name)
}
LazyMan('tom').sleep(2).eat('food').sleepfirst(3).sleep(3).eat('dinner')