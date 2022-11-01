const express = require('express');
const app = express();

app.get('/api', (req, res) => {
    res.send("Hello from server");
});

app.listen(7000);