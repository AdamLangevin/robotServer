require('dotenv').load();

var express     = require('express');
var path        = require('path');

var mainRoutes  = require('./routes/index');

var applet         = express();
var port        = 8080;

applet.use('/', mainRoutes);

applet.listen(port, function(err){
  if(err){
    return console.log('Error ', err);
  }

  console.log('Server is listening on ' +port);
});

module.exports = applet;
