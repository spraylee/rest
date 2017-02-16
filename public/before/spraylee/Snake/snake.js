// JavaScript Document
$(function(){init()});


function init(){
	xx = 15;
	yy = 15;
	cellHeight = 40;
	cellWidth = 40;
	play = false;
	direction = 6;
	score = -3;
	basicTime = 100;
	addTime = 400;
	cell = new Array();
	for(var i=0;i<xx;i++){
		cell[i] = new Array();
		for(var j=0;j<yy;j++){
			cell[i][j] = 0;
		}
	}
	lenth = 3;
	cell[0][yy-1] = 1;
	cell[1][yy-1] = 2;
	cell[2][yy-1] = 3;
	$("#stage").css("width",xx*cellWidth+4);
	$("#stage").css("height",yy*cellHeight+4);
	for(var i=0;i<xx;i++){
		for(var j=0;j<yy;j++){
//			$("#stage").append("<div class='cells' id='cell-"+i+"-"+j+"'></div>");
			$("#stage").append("<div class='mimi-cells' id='mimi-cell-"+i+"-"+j+"'></div>");
//			
//			var each = $("#cell-"+i+"-"+j);
//			each.css("position","absolute");
//			each.css("top",cellHeight*j);
//			each.css("left",cellWidth*i);
//			each.css("width",cellWidth);
//			each.css("height",cellHeight);
			
			var each = $("#mimi-cell-"+i+"-"+j);
			each.css("position","absolute");
			each.css("top",cellHeight*j+1 +2  +  (cellHeight-2)/2);
			each.css("left",cellWidth*i+1 +2  + (cellWidth-2)/2);
			each.css("width",0);
			each.css("height",0);		
		}
	}
	clock = setInterval("",800);
	newFood();
	show();
}

function show(){
	for(var i=0;i<xx;i++){
		for(var j=0;j<yy;j++){
			if(cell[i][j] != 0){
				var each = $("#mimi-cell-"+i+"-"+j);
				each.css("top",cellHeight*j+1 +2);
				each.css("left",cellWidth*i+1 +2);
				each.css("width",cellWidth-2);
				each.css("height",cellHeight-2);
				each.text("");		
			}else{
				var each = $("#mimi-cell-"+i+"-"+j);
				each.css("top",cellHeight*j+1 +2  +  (cellHeight-2)/2);
				each.css("left",cellWidth*i+1 +2  + (cellWidth-2)/2);
				each.css("width","0px");
				each.css("height",0);
 				each.text("");
			}
		}
	}
}

function newFood(){
	while(true){
		var i = Math.floor(Math.random()*xx);
		var j = Math.floor(Math.random()*yy);
		if(cell[i][j] == 0){
			cell[i][j] = -1;
			food = new Array([i,j]);
			break;
		}
	}
		clearInterval(clock);
		clock = setInterval("if(play){move()}", basicTime+addTime*((xx*yy)-lenth)/(xx*yy));
		score += lenth;
		$("#score").text(score);
}

function move(){
	/////////////////////////////////////////////////////////////////////////////////////////////////////6666666666666666
	if(direction == 6){
		var headX = -1;
		var headY = -1;
		canWalk = false;
		canEat = false;
		for(var i=0;i<xx;i++){
			for(var j=0;j<yy;j++){
				if(cell[i][j] == lenth){
					headX = i;
					headY = j;
					if(i+1>=0 & i+1<xx & j>=0 & j<yy){
						if(cell[i+1][j] <1){
							canWalk = true;
							if(cell[i+1][j] == -1){
								canEat = true;
							}
						}
					}
				}
			}
		}
		//////
		if(canEat == false){
			for(var i=0;i<xx;i++){
				for(var j=0;j<yy;j++){
					if(cell[i][j]>0){
						cell[i][j]--;
					}
				}
			}
			lenth--;
		}
		if(canWalk == true){
			cell[headX+1][headY] = lenth+1;
			lenth++;
			if(canEat == true){newFood()};
			show();
		}else{
			gameover();
		}
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////////4444444444444444
	if(direction == 4){
		var headX = -1;
		var headY = -1;
		canWalk = false;
		canEat = false;
		for(var i=0;i<xx;i++){
			for(var j=0;j<yy;j++){
				if(cell[i][j] == lenth){
					headX = i;
					headY = j;
					if(i-1>=0 & i-1<xx & j>=0 & j<yy ){
						if(cell[i-1][j] <1){
							canWalk = true;
							if(cell[i-1][j] == -1){
								canEat = true;
							}
						}
					}
				}
			}
		}
		//////
		if(canEat == false){
			for(var i=0;i<xx;i++){
				for(var j=0;j<yy;j++){
					if(cell[i][j]>0){
						cell[i][j]--;
					}
				}
			}
			lenth--;
		}
		if(canWalk == true){
			cell[headX-1][headY] = lenth+1;
			lenth++;
			if(canEat == true){newFood()};
			show();
		}else{
			gameover();
		}
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////////22222222
	if(direction == 2){
		var headX = -1;
		var headY = -1;
		canWalk = false;
		canEat = false;
		for(var i=0;i<xx;i++){
			for(var j=0;j<yy;j++){
				if(cell[i][j] == lenth){
					headX = i;
					headY = j;
					if(i>=0 & i<xx & j+1>=0 & j+1<yy ){
						if(cell[i][j+1] <1){
							canWalk = true;
							if(cell[i][j+1] == -1){
								canEat = true;
							}
						}
					}
				}
			}
		}
		//////
		if(canEat == false){
			for(var i=0;i<xx;i++){
				for(var j=0;j<yy;j++){
					if(cell[i][j]>0){
						cell[i][j]--;
					}
				}
			}
			lenth--;
		}
		if(canWalk == true){
			cell[headX][headY+1] = lenth+1;
			lenth++;
			if(canEat == true){newFood()};
			show();
		}else{
			gameover();
		}
	}
	/////////////////////////////////////////////////////////////////////////////////////////////////////88888888888
	if(direction == 8){
		var headX = -1;
		var headY = -1;
		canWalk = false;
		canEat = false;
		for(var i=0;i<xx;i++){
			for(var j=0;j<yy;j++){
				if(cell[i][j] == lenth){
					headX = i;
					headY = j;
					if(i>=0 & i<xx & j-1>=0 & j-1<yy){
						if(cell[i][j-1] <1){
							canWalk = true;
							if(cell[i][j-1] == -1){
								canEat = true;
							}
						}
					}
				}
			}
		}
		//////
		if(canEat == false){
			for(var i=0;i<xx;i++){
				for(var j=0;j<yy;j++){
					if(cell[i][j]>0){
						cell[i][j]--;
					}
				}
			}
			lenth--;
		}
		if(canWalk == true){
			cell[headX][headY-1] = lenth+1;
			lenth++;
			if(canEat == true){newFood()};
			show();
		}else{
			gameover();
		}
	}
}

function gameover(){
	alert("你他喵的挂了！！！\r\n才得了"+score+"分，垃圾！！！\r\nSpray Lee可是拿到过6666分，差距啊！！！");
	clearInterval(clock);
	init();
}


$(document).keydown(function(event){
	switch (event.keyCode){
		case 32:
			play = !play;
			break;
		case 37:
			if(!play){break;};
			if(direction == 4){if(play){move()}}
			if(direction == 8 || direction == 2){
				direction = 4;
				if(play){move()};
				clearInterval(clock);
				clock = setInterval("if(play){move()}", basicTime+addTime*((xx*yy)-lenth)/(xx*yy));
			}
			break;
		case 38:
			if(!play){break;};
			if(direction == 8){if(play){move()}}
			if(direction == 4 || direction == 6){
				direction = 8;
				if(play){move()};
				clearInterval(clock);
				clock = setInterval("if(play){move()}", basicTime+addTime*((xx*yy)-lenth)/(xx*yy));
			}
			break;
		case 39:
			if(!play){break;};
			if(direction == 6){if(play){move()}}
			if(direction == 2 || direction == 8){
				direction = 6;
				if(play){move()};
				clearInterval(clock);
				clock = setInterval("if(play){move()}", basicTime+addTime*((xx*yy)-lenth)/(xx*yy));
			}
			break;
		case 40:
			if(!play){break;};
			if(direction == 2){if(play){move()}}
			if(direction == 4 || direction == 6){
				direction = 2;
				if(play){move()};
				clearInterval(clock);
				clock = setInterval("if(play){move()}", basicTime+addTime*((xx*yy)-lenth)/(xx*yy));
			}
			break;
	}
});

							
			

