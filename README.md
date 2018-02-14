# Welcome to William's Chat App!

This chat application was a project created during my time at Fanshawe College. It uses nodejs, expressjs and socket.io to run a working chat application that includes a welcome message, nickname function, as well as a leave message. I also styled the skin to give it a nice, clean theme. 

# Installation

<b>Installing Node</b><br>
Go to https://nodejs.org/en/ and install node for your specific operating system. NPM is included with it.<br><br>
<b>Installing Express</b><br>
Navigate to the project folder in your terminal and type <b>npm init</b> to create a package.json file. Follow the instructions in creating the file, then return to your terminal and type <b>npm install express --save</b><br><br>
<b>Installing Socket</b><br>
Create an index.js file, and paste the folling into it.<br>
```
var app = require('express')();
var http = require('http').Server(app);

app.get('/', function(req, res){
  res.send('<h1>Hello world</h1>');
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
```
