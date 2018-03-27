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
/**
  async () => {
    await sleep(10000);
    var opts = {
      username: 'pi',
      host: '192.168.0.122',
      port: '22',
      password: 'fubar',
      path: '~/home/pi/Desktop/uploads'
    };
    var file = 'C:\\Users\\py120\\Desktop\\Dev\\robotServer\\public\\uploads\\distances.txt';

    client.scp(opts, file, (err) => {
      if(err) {
        console.log('Error returning distances: ', err);
        return;
      }
      console.log('Transfered response');
    });
  };
});

function sleep(ms){
  return new Promise(res => {
    setTimeout(res,ms);
  });
};
**/
