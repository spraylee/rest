
	var AI = function(chessStateObj){
		var map = chessStateObj.map;
		var row = chessStateObj.row;
		var col = chessStateObj.col;
		var ChessState = chessStateObj.ChessState;
		var ChessCount = chessStateObj.ChessCount;

		var countValue = function(yourMap,yourRow,yourCol,yourChessState){
			// var valueMap = [];
			var myChosesX = 0;
			var myChosesY = 0;
			var bestValue = 0;
			for(var i=0;i<yourRow;i++){
				for(var j=0;j<yourCol;j++){
					function countCellValue(i,j){
						function inChess(a,b){
							if(a >= 0 && a < yourRow && b >= 0 && b < yourCol){
								return 1;
							}
							return 0;
						}
						function countCellValueOnWay(x,y,valueForWho){
							var num = 0;
							while(inChess(i+(num+1)*x,j+(num+1)*y) && yourMap[i+(num+1)*x][j+(num+1)*y] == valueForWho){
								num++;
							}
							if(inChess(i+(num+1)*x,j+(num+1)*y) && yourMap[i+(num+1)*x][j+(num+1)*y] == 0){
								num += 0.4;
							} 
							return num;
						}
						function numToValue(yourNum){
							if(yourNum>=4)return yourNum*10000;
							if(yourNum>=3.5)return yourNum*200;
							if(yourNum>=3)return yourNum*150;
							return yourNum*10 + Math.random();
						}
						if(yourMap[i][j] != 0)return 0;
						//对自己的价值
						var num19 = countCellValueOnWay(1,1,yourChessState)+countCellValueOnWay(-1,-1,yourChessState);
						var num28 = countCellValueOnWay(0,1,yourChessState)+countCellValueOnWay(0,-1,yourChessState);
						var num37 = countCellValueOnWay(1,-1,yourChessState)+countCellValueOnWay(-1,1,yourChessState);
						var num46 = countCellValueOnWay(1,0,yourChessState)+countCellValueOnWay(-1,0,yourChessState);
						var myValue = numToValue(num19)+numToValue(num28)+numToValue(num37)+numToValue(num46);
						//对对方的价值
						var num19 = countCellValueOnWay(1,1,3-yourChessState)+countCellValueOnWay(-1,-1,3-yourChessState);
						var num28 = countCellValueOnWay(0,1,3-yourChessState)+countCellValueOnWay(0,-1,3-yourChessState);
						var num37 = countCellValueOnWay(1,-1,3-yourChessState)+countCellValueOnWay(-1,1,3-yourChessState);
						var num46 = countCellValueOnWay(1,0,3-yourChessState)+countCellValueOnWay(-1,0,3-yourChessState);
						var enemyValue = numToValue(num19)+numToValue(num28)+numToValue(num37)+numToValue(num46);

						return myValue + enemyValue*0.99;
					}
					var thisCellValue = countCellValue(i,j);
					if(thisCellValue > bestValue){
						bestValue = thisCellValue;
						myChosesX = i;
						myChosesY = j;
					}
				}
			}
			return [myChosesX,myChosesY];
		}








		if(map[Math.floor(row/2)][Math.floor(col/2)] == 0){
			return [Math.floor(row/2),Math.floor(col/2)]
		}
		return countValue(map,row,col,ChessState);
	}
