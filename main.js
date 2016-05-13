var socket=io.connect("http://127.0.0.1:3000");
socket.on('push data',function(msg){
	var objList=JSON.parse(msg);
	for(var i=0;i<objList.length;i++){
		var gNode=document.getElementById(objList[i].key);
		gNode.children[0].innerHTML=objList[i].value;
	}
});
