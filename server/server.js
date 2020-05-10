const express = require('express');
const app = express();
const multer = require('multer');
// const upload = multer({ dest: __dirname + '/build/uploads/' });
const upload = multer({ dest: '../client/public/uploads/' });
const server = require('http').Server(app);
const io = require('socket.io')(server);
const sha1 = require('sha1');
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const cookieParser = require('cookie-parser');
app.use(cookieParser());

// Database;
let dbo = undefined;
const url =
  'mongodb+srv://terandy:pw@cluster0-zo8n8.mongodb.net/test?retryWrites=true&w=majority';
MongoClient.connect(
  url,
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err, db) => {
    dbo = db.db('chat-bot');
    dbo.collection('users').createIndex({ '$**': 'text' });
    if (err) {
      console.log('ERROR', err);
    }
  }
);

// app.get('/*', (req, res) => {
//   res.sendFile(__dirname + '/build/index.html');
// });
app.get('/', (req, res) => {
  res.send('server is running....');
});

app.post('/send-msg', upload.none(), (req, res) => {
  console.log('send-msg', req.body.msg);
  dbo
    .collection('messages')
    .insertOne({ content: req.body.msg, sender: req.body.sender }); //needs work
  res.json({ success: true, message: 'sent' });
});

const { PORT = 5000, LOCAL_ADDRESS = '0.0.0.0' } = process.env;
server.listen(PORT, LOCAL_ADDRESS, () => {
  const address = server.address();
  console.log('server listening at', address);
});
