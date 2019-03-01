//require('dotenv').load();

var express     = require('express');
var applet      = express();
var path        = require('path');
var bodyparser  = require('body-parser');
var seo         = require('express-seo');
var session     = require('express-session');
var client      = require('scp2');
var fs          = require('fs');

const { exec }   = require('child_process');

var prog  = 'C:\\Users\\py120\\Desktop\\Dev\\objectDetection\\CannyDetection\\CannyDetection\\bin\\Debug\\CannyDetection.exe'

exec(prog, (err, stdout, code) => {
  if(err){
    console.error(err);
    return;
  }
  console.log(stdout);
});
