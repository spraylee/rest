window.onload=open;
function open(){
	row = 3;
	col = 3;
	pos = new Array;
	for(var i=0;i<row;i++){
		pos[i] = new Array;
		for(var j=0;j<col;j++){
			pos[i][j] = j*row+i+1;
		}
	}

	moving = 1;
	auto = 0;
	document.getElementById("game").innerHTML = "";
	for(var i = 0;i<row;i++){
		for(var j=0;j<col;j++){
			var me = $("#game");
			me.append("<div id ='cell-"+i+"-"+j+"' class='cells' onclick='dianji("+i+","+j+")'></div>");
			var each = document.getElementById('cell-'+i+'-'+j);
			each.style.width = 300/(row)+"px";
			each.style.height = 300/(col)+"px";
			each.style.position = "absolute";
			each.style.backgroundImage = "url(images/photo.jpg)";
			each.style.backgroundPositionX = 100/(row-1) * i +"%";
			each.style.backgroundPositionY = 100/(col-1) * j +"%";
			each.style.left = i*300/(row)+"px";
			each.style.top = j*300/(col)+"px";
		}
	}
	document.getElementById("cell-"+(row-1)+"-"+(col-1)).style.backgroundImage = "none";
	document.getElementById("cell-"+(row-1)+"-"+(col-1)).style.backgroundColor = "#fabdce";

	daluan();
}
function daluan(){
	auto = 1;
	moving = 1;
	var n = 100;
	for(var i=0;i<n;i++){
		dianji(Math.floor(Math.random()*row),Math.floor(Math.random()*col));
	}
	document.getElementById("cell-"+(row-1)+"-"+(col-1)).style.backgroundImage = "none";
	document.getElementById("cell-"+(row-1)+"-"+(col-1)).style.backgroundColor = "#fabdce";
	auto = 0;

}
function dianji(x,y){
	var myPos = pos[x][y];
	var goalPos = pos[row-1][col-1];
	if(myPos - goalPos == row || myPos - goalPos == -row || myPos - goalPos == 1 || myPos - goalPos == -1){
		
		if(moving==1)move(x,y);
	}

}
function move(x,y){
	document.getElementById("cell-"+x+"-"+y).style.left = realPos((row -1),(col-1))[0]*(300/row) + "px";
	document.getElementById("cell-"+x+"-"+y).style.top = realPos((row -1),(col-1))[1]*(300/col) + "px";

	document.getElementById("cell-"+(row-1)+"-"+(col-1)).style.left = realPos(x,y)[0]*(300/row) + "px";
	document.getElementById("cell-"+(row-1)+"-"+(col-1)).style.top = realPos(x,y)[1]*(300/col) + "px";

	var temp = pos[x][y]; 
	pos[x][y] = pos[row-1][col-1];
	pos[row-1][col-1] = temp;

	if(auto == 0){
		if(jiance()){
			moving = 0;
			document.getElementById("cell-"+(row-1)+"-"+(col-1)).style.backgroundImage = "url(images/photo.jpg)";
			document.getElementById("cell-"+(row-1)+"-"+(col-1)).style.backgroundColor = "none";
			alert("终于把小波这个逗比找回来了！！！");
		}

	}

}
function realPos(x,y){
	var realX = (pos[x][y]-1)%row; 
	var realY = Math.floor((pos[x][y]-1)/row); 
	return [realX, realY];
}
function jiance(){

	for(var i=0;i<row;i++){
		for(var j=0;j<col;j++){
			if(pos[i][j] != j*row+i+1){
				return 0;
			}
		}
	}
	return 1;

}