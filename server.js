const express = require('express');
const app = express();

app.get("/",(req,res)=>{
    res.send("Hello from Docker");
})



app.listen(3000,(err)=>{
    if(err){
        console.log(err);
    }
    console.log("Server started at port 3000")
})


