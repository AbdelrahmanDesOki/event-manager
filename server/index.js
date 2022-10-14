const express = require('express');
const app = express();

app.get('/api', (req,res) => {
    res.send("Hello from express backkk");
    //console.log("Holaa")
    //res.status(200).json({message: "Message Error" });
    
});

app.listen(1467);