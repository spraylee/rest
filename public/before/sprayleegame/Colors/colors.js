window.onload = function(){
    //document.getElementById("startScreen").style.display = "none";
    //document.getElementById("gameScreen").style.display = "none";
    //document.getElementById("overScreen").style.display = "block";
    //score = 66;
    //document.getElementById("yourScore").innerHTML = 66;
    //document.getElementById("result").innerHTML = "大神";

};

function start(){
    document.getElementById("startScreen").style.display = "none";
    document.getElementById("gameScreen").style.display = "block";
    document.getElementById("overScreen").style.display = "none";
    cells = new Object;
    cells.num = 1;
    initInformation(cells);
    showCells();
    time = 60;
    timeGo();
}
function showCells(){
    document.getElementById("gameStage").innerHTML = "";
    for(var i =1;i<= cells.cors;i++){
        for(var j =1;j<= cells.cors;j++){
            //var stage = document.getElementById("gamgeStage");
            //stage = $("#gameStage");
            //stage.append("<a class='cells' id='cell-"+i+"-"+j+"'></a>");
            document.getElementById("gameStage").innerHTML += "<a class='cells' id='cell-"+i+"-"+j+"'></a>"
            var each = document.getElementById("cell-"+i+"-"+j);
            each.style.width = 360/cells.cors-2+"px";
            each.style.height = 360/cells.cors-2+"px";
            each.style.backgroundColor = cells.color1;
            each.style.border = "1px solid white";
            each.style.position = "absolute";
            each.style.left = 360/cells.cors*(i-1)+1+"px";
            each.style.top = 360/cells.cors*(j-1)+1+"px";
            each.style.borderRadius = "4px";
            each.href = "javascript:click("+i+","+j+")";
            if(i == cells.x && j == cells.y){
                each.style.backgroundColor = cells.color2;
            }
        }
    }
    document.getElementById("score").innerHTML = cells.num;
}
function click(x,y){
    if(x == cells.x && y == cells.y){
        cells.num++;
        initInformation(cells);
        showCells();
    }
}
function timeGo(){
    time--;
    document.getElementById("time").innerHTML = time;
    if(time>0){
        setTimeout("timeGo()",1000)
    }else{
        document.getElementById("gameScreen").style.display = "none";
        document.getElementById("overScreen").style.display = "block";
        document.getElementById("yourScore").innerHTML = cells.num;
        document.getElementById("result").innerHTML = result(cells.num);
    }
}
function share(){
    alert("分数太低了，没资格分享。");
}
function pause(){
    alert("暂停一次扣10秒！！！！");
    time -= 10;
    if(time<0)time = 0;
    document.getElementById("time").innerHTML = time;
}








