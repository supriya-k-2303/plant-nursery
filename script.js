const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv");
dotenv.config({path: './config.env'});  
require('./db/cons');
//const User = require('./model/userSchema');



app.use(express.json());
//link router files 
app.use(require('./router/auth'));



//middleware
const middleware =(req,res,next) =>{
console.log('hello my middleware');
next();
}
//app.get('/',(req,res) => {
 //  res.send('Hello,I am Sneha');
//});

app.get('/home',(req,res) => {
   res.send('Hello,I am Sneha');
});
app.get('/mobileCover',(req,res) => {
   res.send('Hello,mobile cover');
});
app.get('/gardenPlants',(req,res) => {
   res.send('Hello,garden plants');
});
app.get('/handcrafts',(req,res) => {
   res.send('Hello,handcrafts');
});

app.get('/login',(req,res) => {
    res.send('Hello,login');
 });
 app.get('/order',middleware,(req,res) => {
   res.send('Hello,order');
});

app.get('/contact',(req,res) => {
    res.send('Hello,contact');
 });

app.listen(5501,()=>{
    console.log('server is running at port ');
});




