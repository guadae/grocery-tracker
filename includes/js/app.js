
// jshint esversion: 6 
const express = require("express");
const request = require("https");

const app = express(); 

//create get requests 
app.get("/", function(req, res){
  res.sendFile(__dirname + "../../index.html");
  console.log();
});

app.post("/", function(req, res){
  document.write("AHA");
})

app.listen(3000, function(){
  console.log("Server is running on port 3000.");
})