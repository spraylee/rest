// JavaScript Document
$(function(){
	newgame();
});


function newgame(){
	init();
	showNumCell();
	addNum();
	addNum();
}

var board = new Array();
function init(){
	$("#gameover-bg").remove();
	for(var i=0;i<4;i++){
		board[i] = new Array();
		for(var j=0;j<4;j++){
			board[i][j] = new Array();
			board[i][j] = 0
			var each = $("#bg-cell-"+i+"-"+j);
			each.css("top",getPosTop(i,j));
			each.css("left",getPosLeft(i,j));
		}
	}
	var score = 0;
	updateScore();
}

function showNumCell(){
	$(".num-cells").remove();
	for(i=0;i<4;i++){
		for(j=0;j<4;j++){
			$("#cells").append("<div class='num-cells' id='num-cell-"+i+"-"+j+"'></div>");
			///$("#grid-").append("<div class='num-cells' id='num-cell-"+i+"-"+j+"'></div>");   暂时无法理解
			each = $("#num-cell-"+i+"-"+j);
			if(board[i][j]==0){
				each.css("width","0px");
				each.css("height","0px");
				each.css("top",getPosTop(i,j)+50);
				each.css("left",getPosLeft(i,j)+50);
				each.text("")
			}
			else{
				each.css("width","100px");
				each.css("height","100px");
				each.css("top",getPosTop(i,j));
				each.css("left",getPosLeft(i,j));
				each.css("background-color",bgcolorFromNum(board[i][j]));
				each.css("color",colorFromNum(board[i][j]));
				each.text(board[i][j]);
				if(board[i][j]>512){
					each.css("font-size","40px");
				}
			}
		}
	}
}


