const express = require("express");
const app = express();

app.get("/",(req,res)=>(
    res.send(`<h1>First Server on  running ${PORT}</h1>`)
))
const PORT = 5000;
app.listen(PORT,()=>{
    console.log(`First Server on  running ${PORT}`)
});