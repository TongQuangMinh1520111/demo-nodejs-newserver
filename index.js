var express = require('express');
var app = express();

app.get('/', function (req, res) {
   res.send('Hello World');
});
const port = process.env.PORT || 3000;
var server = app.listen(port, function () {
  console.log("Ung dung Node.js dang hoat dong tai dia chi,)
});