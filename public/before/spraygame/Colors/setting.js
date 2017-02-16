
function initInformation(me){
    var diff = 25;
    if(me.num<35){diff = 30}
    if(me.num<25){diff = 35}
    if(me.num<20){diff = 40}
    if(me.num<15){diff = 50}
    if(me.num<10){diff = 60}
    if(me.num<8){diff = 70}
    if(me.num< 5){diff = 80}
    if(me.num< 3){diff = 90}
    me.cors = me.num+1;
    if(me.cors>8){me.cors = 8}
    me.x = Math.floor(Math.random()*me.cors)+1;
    me.y = Math.floor(Math.random()*me.cors)+1;
    var a, b, c;
    a = Math.floor(Math.random()*255);
    b = Math.floor(Math.random()*255);
    c = Math.floor(Math.random()*255);
    me.color1 = "rgb("+a+","+b+","+c+")";
    me.color2 = "rgb("+(a+Math.floor(diff*((255-a)/255)))+","+(b+Math.floor(diff*((255-b)/255)))+","+(c+Math.floor(diff*((255-c)/255)))+")";
}
function result(n){
    //if(n<100){return "逗比"}
    //if(n<50){return "逗比"}
    //if(n<45){return "逗比"}
    //if(n<40){return "正常"}
    //if(n<35){return "逗比"}
    //if(n<30){return "超越10"}
    //if(n<20){return "超越5%"}
    //if(n<10){return "超越0%"}
    var n = Math.floor(cells.num *2.3 - 5);
    if(n>100)n=100;
    if(n<0)n=0;
    return n+"%";
}