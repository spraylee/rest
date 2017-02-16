window.onload = chushi;
function chushi(){
	p1 = 1;
	p2 = 1;
	p3 = 1;
	p4 = 0;
	p5 = 1;
	choose2=1;
	choose3=1;
	choose4=1;
	choose5=1;
	pos = -1;
	next();
	color();
	show();
}
function show(){
	move = 0;		
	addMove();		
	me = document.getElementById('cover');
	me.style.top = 0;
	
}
function addMove(){
	move++;
	if(move>200){
		me.style.top = -(move - 200) +"%";

	}
	if(move<301){
		setTimeout("addMove()",10);
	}

}
function home(){
	chushi();
}
function color(){
	for(var i=1;i<=5;i++){
		document.getElementById("choose1-li"+i).style.backgroundColor = (window["p"+(i+"")] == 0) ? "#eee" : "#0ff";
	}
	// alert(window["p"+((i+1)+"")]);    好奇怪，这里显示undefined
	for(var i=2;i<=5;i++){
		for(var j=1;j<=5;j++){
			if(i == 2){
				var str = "choose2-li"+j;
			}
			if(i == 3){
				var str = "choose3-li"+j;
			}
			if(i == 4){
				var str = "choose4-li"+j;
			}
			document.getElementById(str).style.backgroundColor = (window["choose"+i] != j) ? "#eee" : "#0ff";
		}
	}
}
function dianji(x,y){
	if(x == 1){
		window["p"+y] = 1 - window["p"+y];
	}else{
		window["choose"+x] = y;
	}
	color();
}
function next(){
	offset = 0;
	addPos(pos,pos+1);
	document.getElementById("main").style.left = -100*pos+"%"+"";
	pos++;
	if(pos == 4){
		count();
	}
}
function addPos(a, b){
	offset ++;
	document.getElementById("main").style.left = -100*(pos-1)-offset+"%"+"";
	if(offset<100){
		setTimeout("addPos(pos,pos+1)",10);
	}
}
function count(){
	var lunchNum = ((7*p1)+(7*p2)+(7*p3)+(7*p4)+(7*p5)+(9*choose2)+(9*choose3)+(9*choose4))%7;
	var lunch = 0;
	if(lunchNum==0)lunch = "湘攸木桶饭";
	if(lunchNum==1)lunch = "银记";
	if(lunchNum==2)lunch = "三及第";
	if(lunchNum==3)lunch = "黄焖鸡";
	if(lunchNum==4)lunch = "冰屋";
	if(lunchNum==5)lunch = "拉面";
	if(lunchNum==6)lunch = "自定";
	document.getElementById("lunch").innerHTML = lunch;

}