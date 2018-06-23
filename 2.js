
var app = require('http').createServer(handler)
var io = require('socket.io')(app);
var fs = require('fs');

app.listen(80,'192.168.3.132');

function handler (req, res) {
  fs.readFile('public' +req.url,
  function (err, data) {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

io.on('connection', function (socket) {

  socket.on('my other event', function (data) {
    console.log(data);
    socket.broadcast.emit('news', { msg: data.my});
  });
    
});
      