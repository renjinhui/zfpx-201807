let vm = new Vue({
    el: '#app',
    data: {
        todo:'',
        // count:1,
        // flag:false,
        ary:[{title:'示例',isSelect:false,isShow:false}] // 任物列表 isShow控制input显示
    },
    computed:{
        count:{
           get(){
               //过滤出 ary 中未完成的 项；
               let arr = this.ary.filter((item)=>{
                   return !item.isSelect;
               });
               //count 是要的 未完成事务的 个数；
               return arr.length;
           },
           set(){}
        }
    },
    methods: {
        add(){
            // 这是用来给任务列表添加任务
            let obj = {};
            // this.todo = this.todo.replace(/^ +| +$/g,'');
            this.todo = this.todo.trim();// 字符串原生的 去除首尾空格
            if(!this.todo)return;
            obj.title = this.todo;
            obj.isSelect = false;// 是否选中
            obj.isShow = false; // 是否显示input框
            this.ary.push(obj); //把新增的任务添加到 列表里
            this.todo = ''; // 把输入框清空
        },
        remove(cur){
            //删除当前任务
            this.ary = this.ary.filter((item)=>{
                return cur !== item;
            })
        },
        show(item){
            item.isShow = !item.isShow;
        }
    }
});