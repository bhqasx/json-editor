const express = require('express');
const http = require('http');
const fileUpload = require('express-fileupload');
const fs = require('fs');
const path = require('path');
const bodyParser = require('body-parser');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(bodyParser.json());
app.use(fileUpload());

app.post('/', (req, res, next) => {
    res.statusCode = 200;
    res.end('POST operation');
    //console.log(req.params.jstr);
    console.log(req.body);
});

app.post('/upload', function(req, res) {
    console.log(req.files.sampleFile.data.toString('utf8')); // the uploaded file object
    res.send('File uploaded!');
  });

app.use(express.static(__dirname + '/public'));

const server = http.createServer(app);
server.listen(port, hostname, ()=> {
    console.log(`Server running at http://${hostname}:${port}`)
});