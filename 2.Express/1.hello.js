const express = require('express');
const app = express();

app.get('/', (req, res)=> {
    res.send('hello world. this is home page')
})



app.listen('3000', () => console.log('listening on port 3000'));