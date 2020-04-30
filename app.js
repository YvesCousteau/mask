const app = require('express')();
const http = require("http");
const https = require('https');
const path = require('path');

const fs = require('fs');

app.use(require('express').static(__dirname + '/'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.listen(8080);
