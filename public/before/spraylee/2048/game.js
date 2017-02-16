// JavaScript Document
$(document).keydown(function (event) {
    switch (event.keyCode) {
        case 37://left
			if(MoveLeft()){
				addNum();
				isOver();
			}
            break;
        case 38://up
			if(MoveUp()){
				addNum();
				isOver();
			}
            break;
        case 39://right
			if(MoveRight()){
				addNum();
				isOver();
			}
            break;
        case 40://down
			if(MoveDown()){
				addNum();
				isOver();
			}
            break;
        default :
            break;
    }
});

function MoveLeft(){            ///////////////////////////////////////LEFT LEFT
	if(canMoveLeft()==false){
		return false;
	}
	//moveleft;
	for(j=0;j<4;j++){
		var ok =new Array()
		ok[0]=0;
		ok[1]=0;
		ok[2]=0;
		ok[3]=0;
		for(i=1;i<4;i++){
			if(board[i][j]!=0){
				for(k=i-1;k>=0;k--){
					if(board[k][j]==0){
						if(k>0){continue}
						board[k][j]=board[i][j];
						board[i][j]=0;
						moveAnimate(i,j,k,j);
						break;
					}
					if(board[k][j]==board[i][j] && ok[k]==0){
						board[k][j]=2 * board[i][j];
						board[i][j]=0;
						ok[k]=1;
						moveAnimate(i,j,k,j);
						break;
					}
					if(k+1<i){
						board[k+1][j]=board[i][j];
						board[i][j]=0;
						moveAnimate(i,j,k+1,j);
						break;
					}
					break;				
				}
			}
		}
	}						
	setTimeout("showNumCell();",200);
	updateScore();				
	return true;
	
}

function MoveRight(){            ///////////////////////////////////////RIGHT
	if(canMoveRight()==false){
		return false;
	}
	//moveright;
	for(j=0;j<4;j++){
		var ok =new Array()
		ok[0]=0;
		ok[1]=0;
		ok[2]=0;
		ok[3]=0;
		for(i=3;i>=0;i--){
			if(board[i][j]!=0){
				for(k=i+1;k<4;k++){
					if(board[k][j]==0){
						if(k<3){continue}
						board[k][j]=board[i][j];
						board[i][j]=0;
						moveAnimate(i,j,k,j);
						break;
					}
					if(board[k][j]==board[i][j] && ok[k]==0){
						board[k][j]=2 * board[i][j];
						board[i][j]=0;
						ok[k]=1;
						moveAnimate(i,j,k,j);
						break;
					}
					if(k-1>i){
						board[k-1][j]=board[i][j];
						board[i][j]=0;
						moveAnimate(i,j,k-1,j);
						break;
					}
					break;				
				}
			}
		}
	}						
	setTimeout("showNumCell();",200);
	updateScore();				
	return true;
	
}

function MoveUp(){           ///////////////////////////////////////UP UP
	if(canMoveUp()==false){
		return false;
	}
	//moveup;
	for(i=0;i<4;i++){
		var ok =new Array()
		ok[0]=0;
		ok[1]=0;
		ok[2]=0;
		ok[3]=0;
		for(j=1;j<4;j++){
			if(board[i][j]!=0){
				for(k=j-1;k>=0;k--){
					if(board[i][k]==0){
						if(k>0){continue}
						board[i][k]=board[i][j];
						board[i][j]=0;
						moveAnimate(i,j,i,k);
						break;
					}
					if(board[i][k]==board[i][j] && ok[k]==0){
						board[i][k]=2 * board[i][j];
						board[i][j]=0;
						ok[k]=1;
						moveAnimate(i,j,i,k);
						break;
					}
					if(k+1<j){
						board[i][k+1]=board[i][j];
						board[i][j]=0;
						moveAnimate(i,j,i,k+1);
						break;
					}
					break;
				}
			}
		}
	}
	setTimeout("showNumCell();",200);
	updateScore();				
	return true;	
}

function MoveDown(){           ///////////////////////////////////////DOWN
	if(canMoveDown()==false){
		return false;
	}
	//moveup;
	for(i=0;i<4;i++){
		var ok =new Array()
		ok[0]=0;
		ok[1]=0;
		ok[2]=0;
		ok[3]=0;
		for(j=3;j>=0;j--){
			if(board[i][j]!=0){
				for(k=j+1;k<4;k++){
					if(board[i][k]==0){
						if(k<3){continue}
						board[i][k]=board[i][j];
						board[i][j]=0;
						moveAnimate(i,j,i,k);
						break;
					}
					if(board[i][k]==board[i][j] && ok[k]==0){
						board[i][k]=2 * board[i][j];
						board[i][j]=0;
						ok[k]=1;
						moveAnimate(i,j,i,k);
						break;
					}
					if(k-1>j){
						board[i][k-1]=board[i][j];
						board[i][j]=0;
						moveAnimate(i,j,i,k-1);
						break;
					}
					break;
				}
			}
		}
	}
	setTimeout("showNumCell();",200);
	updateScore();				
	return true;	
}

function moveAnimate(fromX,fromY,toX,toY){
	var me = $("#num-cell-"+fromX+"-"+fromY);
	me.animate({
		left:getPosLeft(toX,toY),
		top:getPosTop(toX,toY)
	},200);
}

function canMoveLeft(){
	for(var i=1;i<4;i++){
		for(var j=0;j<4;j++){
			if((board[i][j]==board[i-1][j] && board[i][j] != 0) || (board[i][j]!= 0 && board[i-1][j]==0)){
				return true;
			}
		}
	}
	return false;
}

function canMoveUp(){
	for(var i=0;i<4;i++){
		for(var j=1;j<4;j++){
			if((board[i][j]==board[i][j-1] && board[i][j] != 0) || (board[i][j]!= 0 && board[i][j-1]==0)){
				return true;
			}
		}
	}
	return false;
}

function canMoveRight(){
	for(var i=0;i<3;i++){
		for(var j=0;j<4;j++){
			if((board[i][j]==board[i+1][j] && board[i][j] != 0) || (board[i][j]!= 0 && board[i+1][j]==0)){
				return true;
			}
		}
	}
	return false;
}

function canMoveDown(){
	for(var i=0;i<4;i++){
		for(var j=0;j<3;j++){
			if((board[i][j]==board[i][j+1] && board[i][j] != 0) || (board[i][j]!= 0 && board[i][j+1]==0)){
				return true;
			}
		}
	}
	return false;
}

function addNum(){
	while(true){
		var x = Math.floor(Math.random()*4);
		var y = Math.floor(Math.random()*4);
		if (board[x][y] == 0){
			board[x][y] = ((Math.floor(Math.random()*2))+1)*2;
			var thisCell = $("#num-cell-"+x+"-"+y);
			thisCell.text(showNum(board[x][y]));
			thisCell.css("color",colorFromNum(board[x][y]));
			thisCell.css("background-color",bgcolorFromNum(board[x][y]));
			thisCell.animate({
				width:"100px",
				height:"100px",
				top:getPosTop(x,y),
				left:getPosLeft(x,y)
			},200);
			break;
		}
	}

}


function isOver(){
	for (i=0;i<4;i++){
		for (j=0;j<4;j++){
			if(board[i][j]==0){return;}
		}
	}
	
	for (i=0;i<4;i++){
		for (j=1;j<3;j++){
			if(board[i][j]===board[i][j+1]||board[i][j]===board[i][j-1]){return;}
		}
	}
	for (i=1;i<3;i++){
		for (j=0;j<4;j++){
			if(board[i][j]===board[i+1][j]||board[i][j]===board[i-1][j]){return;}
		}
	}	
	//setTimeout("alert('gameover!!!');",400);
	$("#cells").append("<div id = 'gameover-bg' ><h2 font-size:60px>Your Score:</h2><span>"+score+"</span></div>");
	$("#gameover-bg").css("width","500px");
	$("#gameover-bg").css("height","500px");
	$("#gameover-bg").css("background-color","rgba(0, 0, 0, 0.6)");

}

function updateScore(){
	score = 0;
	for(i=0;i<4;i++){
		for(j=0;j<4;j++){
			score += board[i][j];
		}
	}
	$('#score').text(score);
}
	






























			