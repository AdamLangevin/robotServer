var express     = require('express');
var path        = require('path');
var fs          = require('fs');
var router      = express.Router();

var index = path.join(__dirname, '..', 'views', 'index.html');

router.get('/*', function(req, res, next) {
  if(!(req.headers.host === 'golfbot.ca' || req.headers.host ==='192.168.0.188')) {
    if(process.env.NODE_ENV !== 'development'){
      console.log('Rejected.');
      return res.status(400);

    } else next();
  } else next();
});

router.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../views/home.html')));

module.exports = router;
