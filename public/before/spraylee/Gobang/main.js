// JavaScript Document
$(function(){newgame()});

function newgame(){
	mode = "ai"; /////    ai  or   free
	num = 0;
	$(".pics").remove();
	$(".buttons").remove();
	cells = new Array();
	for(i=0;i<19;i++){
		cells[i] = new Array();
		for(j=0;j<19;j++){
			cells[i][j] = new Array();
			cells[i][j][0] = 0;////1为黑棋，2为白棋，0为没有落子
			cells[i][j][1] = 0;////值为第几步走的，0为没有落子

			$("#stage").append("<div id='pic-"+i+"-"+j+"' class='pics'><img id='img-"+i+"-"+j+"' class='imgs' src='images/nothing.png'></div>");
			$("#stage").append("<div id='button-"+i+"-"+j+"' class='buttons'><a class='buttons' href='javascript:press("+i+","+j+")'></a></div>");

			var each = $("#pic-"+i+"-"+j);
			each.css("left",realPos(i,j)[0]);
			each.css("top",realPos(i,j)[1]);
			
			var each = $("#button-"+i+"-"+j);
			each.css("left",realPos(i,j)[0]+5);
			each.css("top",realPos(i,j)[1]+5);				
		}
	}
	/*
	if(mode = "ai-ai"){
		cells[9][9][0]=1;
		cells[9][9][1]=1;
		num = 1;
		showCells();
		while(num<361){
			setTimeout("aiGo()",100);			
		}
		if(num==361){
			newgame();
		}
	}
	*/
}

function back(){
	if(num>0){
		var getlast = 0;
		for(i=0;i<19;i++){
			for(j=0;j<19;j++){
				if(cells[i][j][1]==num && getlast == 0){
					cells[i][j][0]=0;
					num--;
					cells[i][j][1]=0;
					getlast = 1;
					showCells();
				}
			}
		}
	}
	if(num>0){
		var getlast = 0;
		for(i=0;i<19;i++){
			for(j=0;j<19;j++){
				if(cells[i][j][1]==num && getlast == 0){
					cells[i][j][0]=0;
					num--;
					cells[i][j][1]=0;
					getlast = 1;
					showCells();
				}
			}
		}
	}
}
function aiGo(){
	var aiPos = new Array();
	changeThinking("thinking.....");
	aiPos = AI();
	changeThinking("");
	cells[aiPos[0]][aiPos[1]][0]=num%2 + 1;
	num += 1;
	cells[aiPos[0]][aiPos[1]][1]=num;
	showCells();
	isover(aiPos[0],aiPos[1]);
}


function showCells(){
	for(i=0;i<19;i++){
		for(j=0;j<19;j++){
			var each = $("#img-"+i+"-"+j);
			if(cells[i][j][0]==0){
				each.attr("src","images/nothing.png");
			}
			if(cells[i][j][0]==1){
				each.attr("src","images/black.png");
			}
			if(cells[i][j][0]==2){
				each.attr("src","images/white.png");
			}
		}
	}		
}


function realPos(i,j){
	return [(i+1)*40-25,(j+1)*40-25];
}

function press(i,j){
	if(mode == "free"){
		if(cells[i][j][0]==0){
			if(num%2 == 0){
				cells[i][j][0]=1;
				num += 1;
				cells[i][j][1]=num;
				showCells();
				isover(i,j);
			}else{
				cells[i][j][0]=2;
				num += 1;
				cells[i][j][1]=num;
				showCells();
				isover(i,j);
			}
		}
	}
	if(mode == "ai"){
		if(cells[i][j][0]==0){
			if(num%2 == 0){
				cells[i][j][0]=1;
				num += 1;
				cells[i][j][1]=num;
				showCells();
				isover(i,j);
				if(num%2 == 1){aiGo()}
			}
		}
	}		
}

function changeThinking(str){
	var me = $("#thinking");
	me.text(str);
}

function isover(i,j){
	var num1=0;
	var num2=0;
	var num3=0;
	var num4=0;
	var num5=0;
	var num6=0;
	var num7=0;
	var num8=0;
	var num9=0;
	var x,y;
	x=i;
	y=j;
	while(x<18){
		x++;
		if(cells[x][y][0]==cells[i][j][0]){num6++}
		else{break}
	}
	x=i;
	y=j;
	while(y<18){
		y++;
		if(cells[x][y][0]==cells[i][j][0]){num2++}
		else{break}
	}
	x=i;
	y=j;
	while(y<18 && x<18){
		x++;
		y++;
		if(cells[x][y][0]==cells[i][j][0]){num3++}
		else{break}
	}
	x=i;
	y=j;
	while(y>0 && x>0){
		x--;
		y--;
		if(cells[x][y][0]==cells[i][j][0]){num7++}
		else{break}
	}
	x=i;
	y=j;
	while(y>0){
		y--;
		if(cells[x][y][0]==cells[i][j][0]){num8++}
		else{break}
	}
	x=i;
	y=j;
	while(x>0){
		x--;
		if(cells[x][y][0]==cells[i][j][0]){num4++}
		else{break}
	}
	x=i;
	y=j;
	while(y<18 && x>0){
		x--;
		y++;
		if(cells[x][y][0]==cells[i][j][0]){num1++}
		else{break}
	}
	x=i;
	y=j;
	while(y>0 && x<18){
		x++;
		y--;
		if(cells[x][y][0]==cells[i][j][0]){num9++}
		else{break}
	}
	if(num1+num9>3 || num2+num8 >3 || num3+num7>3 || num4+num6>3){
		alert("gameover!!!");
		newgame();
	}
}














