var http = require('http');
var serialport = require("serialport");
var SerialPort =serialport.SerialPort;
var portName = process.argv[2];

var myPort = new SerialPort(portName, {
	baudRate:9600,
	parser: serialport.parsers.readline("\r\n")
})


myPort.on('open', onOpen);
myPort.on('data', onData);

var data =["aa"];

function onOpen(){
	console.log("openconncetion");
}

function onData(data){
	console.log('on data'+data);
	//data.push(data);
}
function onRequest(request, response){
	console.log("user made a request"+request.url);
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("Here is some data");
	response.end;
}


http.createServer(onRequest).listen(8888);
console.log("server is running");


