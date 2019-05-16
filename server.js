const express = require('express');
const path = require('path');
const app = express();

// public folder to store assets
app.use(express.static(__dirname + '/public'));

// routes for app
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/index.html'));
});

// listen on port 8000 (for localhost) or the port  defined for heroku
var port = process.env.PORT || 8000;
app.listen(port);