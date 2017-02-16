$(function(){
	var gobang = new Gobang();
});
(function($){
	var Gobang = function(){
		var self = this;
		this.myGoal = 200;

		this.row = 19;
		this.col = 19;
		this.cellWidth = 30;
		this.areaCtrlWidth = 400;

		this.firstPlayer = "people";
		this.secondPlayer = "ai";

		this.gobang = $("#Gobang");
		this.addDom();


		this.areaCtrl = $("#areaCtrl");
		this.areaMain = $("#areaMain");
		this.areaMainCenter = $("#areaMainCenter");

		this.map = [];
		for(var i=0;i<this.row;i++){
			this.map[i] = [];
			for(var j=0;j<this.col;j++){
				this.map[i][j] = 0;				//0代表空白，1代表黑棋，2代表白棋；永远黑棋先走
			}
		}
		this.ChessState = 1;                    //单数代表轮到黑棋走，2代表轮到白棋走，0代表结算界面
		this.ChessCount = 0;
		
		this.initChessBoard();
		this.addCellsClickEvent();
		this.addInitNewChessClickEvent();

		this.renderCells(0,0);

	}
	Gobang.prototype = {
		addDom:function(){
			var self = this;
			this.gobang.html(
									'<div id="areaCtrl">'+
									'<h1 id="name">逗比五子棋</h1>'+
									'<div id="result"></div>'+
									'<a id="initNewChess" href="###">新的一局</a>'+
									'<p id="designed">designed by Spray Lee</p>'+
									'<p id="version">version 1.0.0</p>'+
									'</div>'+
									'<div id="areaMain">'+
									'	<div id="areaMainCenter">'+
									'	</div>'+
									'</div>'
									

				);
		},
		initChessBoard:function(){
			this.gobang.css({
				width:  this.row*this.cellWidth + this.areaCtrlWidth + 400,
				height: this.col*this.cellWidth + 300
			});
			this.areaCtrl.css({
				width:   this.areaCtrlWidth,
				height:  this.col*this.cellWidth + 100,
			});
			this.areaMain.css({
				width:    this.row*this.cellWidth + 100,
				height:    this.col*this.cellWidth + 100,
				left: 	  this.areaCtrlWidth + 200, 
				top:      100
			});
			this.areaMainCenter.css({
				width:     this.row*this.cellWidth,
				height:    this.col*this.cellWidth,
				top:       50,
				left:      50
			});
			///初始化棋盘X线条
			for(var i=0;i<this.row;i++){
				this.areaMainCenter.append("<div id='line-x-"+i+"' class='lines-x'></div>");
				$("#line-x-"+i).css({
					position:     "absolute",
					width:        (this.row-1)*this.cellWidth,
					height:       2,
					left:         this.cellWidth/2,
					top:          i*this.cellWidth+this.cellWidth/2,
					backgroundColor:"black"
				});
			}
			///初始化棋盘Y线条
			for(var j=0;j<this.col;j++){
				this.areaMainCenter.append("<div id='line-y-"+j+"' class='lines-y'></div>");
				$("#line-y-"+j).css({
					position:     "absolute",
					height:        (this.col-1)*this.cellWidth,
					width:       2,
					top:         this.cellWidth/2,
					left:          j*this.cellWidth+this.cellWidth/2,
					backgroundColor:"black"
				});
			}

			///初始化占位棋子
			for(var i=0;i<this.row;i++){
				for(var j=0;j<this.col;j++){
					this.areaMainCenter.append("<a class='cells' id='cell-"+i+"-"+j+"' myRow="+i+" myCol="+j+" href='###'></a>");
					$("#cell-"+i+"-"+j).css({
						position: "absolute",
						width:    this.cellWidth,
						height:   this.cellWidth,
						left:     this.cellWidth*i,
						top:      this.cellWidth*j, 
						borderRadius: this.cellWidth/2
					});
				}
			}

		},
		addCellsClickEvent:function(){
			var self = this;
			$(".cells").click(function(){
				var myRow = Number($(this).attr("myRow"));
				var myCol = Number($(this).attr("myCol"));
				if(self.ChessState != 0){
					if((self.firstPlayer == "people" && self.ChessState == 1)||(self.secondPlayer == "people" && self.ChessState == 2)){
						if(self.map[myRow][myCol] == 0){
							self.map[myRow][myCol] = self.ChessState;
							self.ChessState = 3 - self.ChessState;
							self.ChessCount += 1;
							self.renderCells(myRow,myCol);
						}
					}
				}
			});
		},
		addInitNewChessClickEvent:function(){
			var self = this;
			$("#initNewChess").click(function(){
				self.initNewChess();			
				self.firstPlayer = "people";
				setTimeout(function(){
					self.initNewChess();
				},100);
			});
		},
		renderCells:function(i,j){
			var self = this;
			var me = $("#cell-"+i+"-"+j);
			if(this.map[i][j] == 1){
				me.css("backgroundImage","url(images/black.png)");
			}
			if(this.map[i][j] == 2){
				me.css("backgroundImage","url(images/white.png)");
			}
			//如果棋盘满了，就初始化一下，否则就检查是否结束
			if(this.ChessCount == this.row * this.col){
				this.initNewChess();

			}else if(!this.checkOver(i,j)){    // 如果没有结束，而且轮到AI走，就让AI走
				if((self.firstPlayer == "ai" && self.ChessState == 1)||(self.secondPlayer == "ai" && self.ChessState == 2)){
					setTimeout(function(){
						self.moveByAI();
					},1000);
				}
			}
		},
		moveByAI:function(){
			var self = this;
			var aiChoses = AI({
				firstPlayer:      this.firstPlayer,
				secondPlayer:     this.secondPlayer,
				row:              this.row,
				col:              this.col,
				map:              this.map,
				ChessState:       this.ChessState,
				ChessCount:  	  this.ChessCount
			});
			self.map[aiChoses[0]][aiChoses[1]] = self.ChessState;
			self.ChessState = 3 - self.ChessState;
			self.ChessCount += 1;
			self.renderCells(aiChoses[0],aiChoses[1]);
		},
		checkOver:function(i,j){
			var self = this;
			var myColor = this.map[i][j];
			function countLineChessNum(x,y){
				function inChess(a,b){
					if(a >= 0 && a < self.row && b >= 0 && b < self.col){
						return 1;
					}
					return 0;
				}
				var num = 0;
				while(inChess(i+(num+1)*x,j+(num+1)*y) && self.map[i+(num+1)*x][j+(num+1)*y] == myColor && myColor != 0){
					num++;
				}
				return num;
			}
			var num28 = countLineChessNum(0,1)+countLineChessNum(0,-1);
			var num19 = countLineChessNum(1,1)+countLineChessNum(-1,-1);
			var num37 = countLineChessNum(1,-1)+countLineChessNum(-1,1);
			var num46 = countLineChessNum(1,0)+countLineChessNum(-1,0);
			var dangerNum = Math.max(num19,num28,num37,num46);

			//当分出胜负
			if(dangerNum>=4){

				//如果有人参与，则出结果图（人对人时，也出胜利的图）
				if(this.firstPlayer == "people"  || this.secondPlayer == "people"){
					if((self.firstPlayer == "people" && self.ChessState == 2)||(self.secondPlayer == "people" && self.ChessState == 1)){
						$("#result").css("backgroundImage","url(images/win.jpg)");
					}
					if((self.firstPlayer == "ai" && self.ChessState == 2)||(self.secondPlayer == "ai" && self.ChessState == 1)){
						$("#result").css("backgroundImage","url(images/lose.jpg)");
					}
				}else{
					console.log(self.ChessCount);
					//电脑对电脑，要是棋子数不够目标值，也新开一局
					if(self.ChessCount < this.myGoal){
						setTimeout(function(){
							self.initNewChess();
						},1);
						
					}
				}
				self.ChessState = 0;
				return 1;
			}else{
				return 0;
			}
		},
		initNewChess:function(){
			this.map = [];
			for(var i=0;i<this.row;i++){
				this.map[i] = [];
				for(var j=0;j<this.col;j++){
					this.map[i][j] = 0;
					$("#cell-"+i+"-"+j).css("backgroundImage","none");			
				}
			}
			this.ChessState = 1;                   
			this.ChessCount = 0;
			$("#dangerNum").html("");
			$("#result").css("backgroundImage","none");
			this.renderCells(0,0);
		}
	}
	window["Gobang"] = Gobang;
})(jQuery);

