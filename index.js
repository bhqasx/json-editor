const express = require('express');
const http = require('http');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(bodyParser.json());

app.post('/', (req, res, next) => {
    res.statusCode = 200;
    res.end('POST operation');
    //console.log(req.params.jstr);
    console.log(req.body);
});

app.post('/upload', function(req, res) {
    console.log(req.files.foo); // the uploaded file object
  });

app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);
server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}`)
});