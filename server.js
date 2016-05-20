var express = require ('express');
var newRouter = require('../routers/newRouter');

var app = express();

app.use('/', newRouter);

app.listen(1930, function () {
  console.log('thesave listening on port 1930');
};
