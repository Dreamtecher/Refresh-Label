var io=require('socket.io')(3000);
var fs=require('fs');

//json文件路径
var filePath=__dirname+'/jsonData/';

//josn文件列表
var jsonDataFileList=fs.readdirSync(filePath);

//json对象数组
var jsonArray=new Array();

for(var i=0;i<jsonDataFileList.length;i++){
	jsonArray[i]=fs.readFileSync(filePath+jsonDataFileList[i],'utf8');
}


io.on('connection',function(socket){
	var socketId=socket.id;
	console.log('userId:'+socketId+' connected.');
});

setInterval(function(){
	var i=parseInt(Math.random()*jsonArray.length);
	var push_data=jsonArray[i];
	io.emit('push data',push_data);
},2000);	
