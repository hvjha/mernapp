const express = require('express');
const app =express();
const mongoDB = require("./db")
mongoDB();
app.get('/',(req,res)=>{
    res.send("Hello Word")
})

const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
});