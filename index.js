//Using express
const express=require('express');
const http = require('http');
const morgan = require('morgan');

const hostname ='localhost';
const port = 3000;


const app= express();
app.use(morgan('dev'));
app.use(express.static(__dirname+'/public'));

app.use((req,res,next)=>{
console.log(req.headers);
res.statusCode=200;
res.setHeader('Content-Type','text/html');
res.end('<html><title>Node HTTP</title><body><h2>Hello</h2></body></html>');
})

const server = http.createServer(app);
server.listen(port,hostname,()=>
{
console.log(`Server running at http://${hostname}:${port}/`);
});


//Using http
/*const http = require('http');

const hostname ='localhost';
const port = 3000;
const fs=require('fs');
const path=require('path');


const server = http.createServer((req,res)=>{
console.log("Request for URL : "+req.url + " by "+ req.method);

if(req.method=='GET')
{
var fileUrl;
if(req.url=='/')
fileUrl='/index.html';
else
fileUrl=req.url;

var filepath = path.resolve('./public'+fileUrl);
const fileExt=path.extname(filepath);
if(fileExt=='.html')
{
 fs.exists(filepath,(exists) => {
	if(!exists){
	 res.statusCode =400;
	 res.setHeader('Content-Type','text/html');
	 res.end('<html><title>Node HTTP</title><body><h2>Error : 404 file not found</h2></body></html>');
	 return;
	}
	res.statusCode=200;
	 res.setHeader('Content-Type','text/html');
	 fs.createReadStream(filepath).pipe(res);
 });
}
else
{
	res.statusCode =400;
	 res.setHeader('Content-Type','text/html');
	 res.end('<html><title>Node HTTP</title><body><h2>Error : 404 file not found</h2></body></html>');
}

}
/*res.statusCode=200;
res.setHeader('Content-Type','text/html');
res.end('<html><title>Node HTTP</title><body><h2>Hello</h2></body></html>');
* /

});
server.listen(port,hostname,()=>
{
console.log(`Server running at http://${hostname}:${port}/`);
});
*/