var express = require('express');

var app = express();

app.use(express.static(_dirname + '/views'));

app.set('view engine', 'ejs');



var server = app.listen(80, function () {

  var host = server.address().address
  var port = server.address().port
  console.log("Example app listening at http://%s:%s", host, port)

})
