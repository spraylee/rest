// JavaScript Document

function AI(){
	whoGo = num%2 +1;   ////1为该黑棋走，2为该白棋走
	var value = [0,0,0];
	for(i=0;i<19;i++){
		for(j=0;j<19;j++){
			changeThinking("thinking("+i+"-"+j+")")
			if(cells[i][j][0]==0){
				var vv = countEnemyValue(i,j) + countSelfValue(i,j);
				if(vv>value[2]){
					value[0] = i;
					value[1] = j;
					value[2] = vv;
				}
			}
		}
	}
	return [value[0],value[1]];
}


function countSelfValue(i,j){
	var selfValue,value28,value46,value19,value37;	
	var x,y;
	var space,over;
	
	selfValue = 0;
	value28 = 0;
	value46 = 0;
	value19 = 0;
	value37 = 0;
	
	spaceValue = 0.4;
	spaceDebuff = 0.6;
	
	function initNums(){
		space = 0;
		over = 0;	
		x=i;
		y=j;
	}
	
	
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == whoGo){
				value28++;
				if(space == 1){
					value28 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value28 += spaceValue;
				if(space == 2){
					value28 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == 3 - whoGo){
				over++;
			}
		}
		y++;
	}
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == whoGo){
				value28++;
				if(space == 1){
					value28 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value28 += spaceValue;
				if(space == 2){
					value28 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == 3 - whoGo){
				over++;
			}
		}			
		y--;
	}
	
	
	
	
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == whoGo){
				value46++;
				if(space == 1){
					value46 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value46 += spaceValue;
				if(space == 2){
					value46 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == 3 - whoGo){
				over++;
			}
		}
		x++;
	}
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == whoGo){
				value46++;
				if(space == 1){
					value46 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value46 += spaceValue;
				if(space == 2){
					value46 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == 3 - whoGo){
				over++;
			}
		}
		x--;
	}
	
	
	
	
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == whoGo){
				value37++;
				if(space == 1){
					value37 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value37 += spaceValue;
				if(space == 2){
					value37 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == 3 - whoGo){
				over++;
			}
		}
		x++;
		y++;

	}
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == whoGo){
				value37++;
				if(space == 1){
					value37 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value37 += spaceValue;
				if(space == 2){
					value37 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == 3 - whoGo){
				over++;
			}
		}
		x--;
		y--;
	}
	
	
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == whoGo){
				value19++;
				if(space == 1){
					value19 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value19 += spaceValue;
				if(space == 2){
					value19 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == 3 - whoGo){
				over++;
			}
		}		
		x++;
		y--;
	}
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == whoGo){
				value19++;
				if(space == 1){
					value19 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value19 += spaceValue;
				if(space == 2){
					value19 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == 3 - whoGo){
				over++;
			}
		}		
		x--;
		y++;
	}
	
	

	
	selfValue = value28 + value46 + value19 + value37;
	for(var each in [value28,value46,value19,value37]){
		if([value28,value46,value19,value37][each] >= 4){selfValue += 1000}
		if([value28,value46,value19,value37][each]>= 3.8){selfValue += 35}
		if([value28,value46,value19,value37][each]>= 2.8){selfValue += 11}
	}	
	return selfValue;

}

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
function countEnemyValue(i,j){
	var EnemyValue,value28,value46,value19,value37;	
	var x,y;
	var space,over;
	
	EnemyValue = 0;
	value28 = 0;
	value46 = 0;
	value19 = 0;
	value37 = 0;
	
	spaceValue = 0.4;
	
	function initNums(){
		space = 0;
		over = 0;	
		x=i;
		y=j;
	}
	
	
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == 3 - whoGo){
				value28++;
				if(space == 1){
					value28 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value28 += spaceValue;
				if(space == 2){
					value28 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == whoGo){
				over++;
			}
		}
		y++;
	}
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == 3 - whoGo){
				value28++;
				if(space == 1){
					value28 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value28 += spaceValue;
				if(space == 2){
					value28 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == whoGo){
				over++;
			}
		}			
		y--;
	}
	
	
	
	
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == 3 - whoGo){
				value46++;
				if(space == 1){
					value46 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value46 += spaceValue;
				if(space == 2){
					value46 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == whoGo){
				over++;
			}
		}
		x++;
	}
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == 3 - whoGo){
				value46++;
				if(space == 1){
					value46 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value46 += spaceValue;
				if(space == 2){
					value46 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == whoGo){
				over++;
			}
		}
		x--;
	}
	
	
	
	
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == 3 - whoGo){
				value37++;
				if(space == 1){
					value37 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value37 += spaceValue;
				if(space == 2){
					value37 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == whoGo){
				over++;
			}
		}
		x++;
		y++;

	}
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == 3 - whoGo){
				value37++;
				if(space == 1){
					value37 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value37 += spaceValue;
				if(space == 2){
					value37 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == whoGo){
				over++;
			}
		}
		x--;
		y--;
	}
	
	
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == 3 - whoGo){
				value19++;
				if(space == 1){
					value19 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value19 += spaceValue;
				if(space == 2){
					value19 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == whoGo){
				over++;
			}
		}		
		x++;
		y--;
	}
	initNums();
	while(x>=0 && x<19 && y>=0 && y<19 && space<2 && over==0){
		if(x !=i || y != j){
			if(cells[x][y][0] == 3 - whoGo){
				value19++;
				if(space == 1){
					value19 -= spaceDebuff;
				}
			}
			if(cells[x][y][0] == 0){
				space++;
				value19 += spaceValue;
				if(space == 2){
					value19 -= spaceValue;
					over++;				
				}
			}
			if(cells[x][y][0] == whoGo){
				over++;
			}
		}		
		x--;
		y++;
	}
	
	

	
	EnemyValue = value28 + value46 + value19 + value37;
	for(var each in [value28,value46,value19,value37]){
		if([value28,value46,value19,value37][each] >= 4){EnemyValue += 100}
		if([value28,value46,value19,value37][each]>= 3.8){EnemyValue += 30}
		if([value28,value46,value19,value37][each]>= 2.8){EnemyValue += 10}
	}	
	return EnemyValue;

}



