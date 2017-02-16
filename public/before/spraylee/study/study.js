
function addItem(){
    var data = new Object;
    data.name = document.getElementById("name").value;
    data.age = document.getElementById("age").value;
    data.class = document.getElementById("class").value;
    data.choose = document.getElementById("choose").value;
    var str = JSON.stringify(data);
    localStorage.setItem(data.name,str);
    alert("数据已经录入");
}

function findItem(){
    var str = localStorage.getItem(document.getElementById("find").value);
    //alert("str ok \r\n "+str);
    var data = JSON.parse(str);
    //alert("data ok \r\n "+data);
    if (data != null){
        document.getElementById("msg").innerHTML = "姓名："+data.name+"<br>年龄："+data.age+"<br>班级："+data.class+"<br>选择："+data.choose;
        //alert("msg ok");
    }else{
        document.getElementById("msg").innerHTML = "没有这个人。";
    }

}
function clearAll(){
    localStorage.clear();
    alert("所有数据都已经删除。");
}