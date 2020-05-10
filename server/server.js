"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var multer = require('multer');
// const upload = multer({ dest: __dirname + '/build/uploads/' });
var upload = multer({ dest: '../client/public/uploads/' });
var server = require('http').Server(app);
var io = require('socket.io')(server);
var sha1 = require('sha1');
var MongoClient = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var cookieParser = require('cookie-parser');
app.use(cookieParser());
// Database;
var dbo = undefined;
var url = 'mongodb+srv://terandy:pw@cluster0-zo8n8.mongodb.net/test?retryWrites=true&w=majority';
MongoClient.connect(url, { useNewUrlParser: true, useUnifiedTopology: true }, function (err, db) {
    dbo = db.db('chat-bot');
    dbo.collection('users').createIndex({ '$**': 'text' });
    if (err) {
        console.log('ERROR', err);
    }
});
// app.get('/*', (req, res) => {
//   res.sendFile(__dirname + '/build/index.html');
// });
app.get('/', function (req, res) {
    res.send('server is running....');
});
app.post('/send-msg', upload.none(), function (req, res) {
    console.log('send-msg', req.body.msg);
    dbo
        .collection('messages')
        .insertOne({ content: req.body.msg, sender: req.body.sender }); //needs work
    res.json({ success: true, message: 'sent' });
});
var _a = process.env, _b = _a.PORT, PORT = _b === void 0 ? 5000 : _b, _c = _a.LOCAL_ADDRESS, LOCAL_ADDRESS = _c === void 0 ? '0.0.0.0' : _c;
server.listen(PORT, LOCAL_ADDRESS, function () {
    var address = server.address();
    console.log('server listening at', address);
});
