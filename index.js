const express = require('express');
const EventEmitter = require('events');
const app = express();
const event = new EventEmitter();

let count =0 ;
event.on('countAPI',()=>{
  
  count++;
  console.log("called API",count)
})
app.get('/',(req,res) => {
  res.send("home");
  event.emit("countAPI");
})

app.get('/search',(req,res) => {
  res.send("search");
  event.emit("countAPI");
})

app.get('/update',(req,res) => {
  res.send("update");
  event.emit("countAPI");
})

app.listen(5000);