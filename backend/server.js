const express = require('express');
const app =express();
const mongoDB = require("./db")
const cors = require('cors');
mongoDB();
app.use(cors());
app.use(express.json());
// user API
app.use('/api',require('./Routes/CreateUser'))
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`server is running at ${PORT}`)
});