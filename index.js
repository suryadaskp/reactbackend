//1. import express
const express = require("express")


//2.initialise 
const app = new  express()
app.use(express.urlencoded({extended:true}));
app.use(express.json());

//3.creating api 
app.get('/',(req,res) => {
    res.json("welcome to backend")
})
app.get('/u',(req,res) => {
    res.json("welcome to node js")
   
})
app.post('/signup',(req,res)=>{
   res.send(`name:${req.body.name} ,age:${req.body.age}`)
   
 

})
//4.setting port
app.listen(3005,()=>{
    console.log("port is running");
})

