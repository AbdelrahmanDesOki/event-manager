const express = require('express');
const app = express()

app.get('/', (req,res) => {
    console.log("Holaa")
    res.status(200).json({message: "Message Error" });
    
})

app.listen(3000) 