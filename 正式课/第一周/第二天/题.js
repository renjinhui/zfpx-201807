    var a = {
        x:1
    };
    var b = a;
    b.c = a = {y:1};


//----------------------------

    var n=13;
    function fn(n){
       alert(n);
       var n=14;
       alert(n);
    }
    fn(n);
//----------------------------
    var n = 13;
    function fn(){
         n = 15;
         console.log(n);
    }
    fn();
    alert(n);
//----------------------------
    var n = 10;
    function outer(){
        var n = 15;
        function inner(){
            function center(){
                alert(n);
            }
            center();
        }
        inner();
    }
    outer()
//-----------------------------
    var n=0;
    function a(){
        var n=10;
        function b(){
            n++;
            alert(n);
        }
        b();
    }
    a();
    alert(n);
//--------------------------
    console.log(num,str);
    var num = 18;
    var str = "lily";
    function fn2(){
        console.log(str,num);
        num = 19;
        str = "candy";
        var num = 14;
        console.log(str,num);
    }
    fn2();
    console.log(str,num);
//----------------------------------------------------
    alert(a);
    console.log("a" in window);
    if(!("a" in window)){
        var a = 10;
    }
    alert(a);

    console.log(fn);
    if(9==8){
        function fn(){
            alert(2);
        }
    }
