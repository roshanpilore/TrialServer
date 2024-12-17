const express = require("express")
const app= express()


app.get('/',(req,res)=>{
	res.send("We Are here in version 1")
})

app.listen(4000,'0.0.0.0',(req,res)=>{
	console.log("Server has started")
})

