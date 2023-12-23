var express = require();
var app = require('express')

app.get('/contact', function (req, res) {
   res.send('Hello node');
});

app.listen(3000, function () {
   console.log('Example app listening on port 3000!')
});
