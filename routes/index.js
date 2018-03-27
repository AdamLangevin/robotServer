var express     = require('express');
var path        = require('path');
var fs          = require('fs');
var router      = express.Router();
var multer      = require('multer');

var storage = multer.diskStorage({
  destination:  (req, file, callback) => {
    callback(null, './public/uploads/');
  },
  filename: (req, file, callback) => {
    callback(null, 'Test' + path.extname(file.originalname));
  }
});

var upload = multer({ storage: storage }).single('image');

var index = path.join(__dirname, '..', 'views', 'index.html');

router.get('/*', function(req, res, next) {
  if(!(req.headers.host === 'golfbot.ca' || req.headers.host ==='192.168.0.188')) {
    if(process.env.NODE_ENV !== 'development'){
      console.log('Rejected.');
      return res.status(400);

    } else next();
  } else next();
});

router.get('/index', (req, res, next) => res.sentFile(index));
router.get('/', (req, res, next) => res.sendFile(path.join(__dirname, '../views/home.html')));
router.get('/home', (req, res, next) => res.sendFile(path.join(__dirname, '../views/home.html')));

router.post('/upload', function(req, res){
  upload(req,res,(err)=> {
    if(err){
        return res.end("Error uploading");
    }
    console.log(req.file);
    res.send('uploaded');
  });
  if(req.file !== 'undefined'){
    const { exec }   = require('child_process');

    var prog  = '..\\objectDetection\\CannyDetection\\CannyDetection\\bin\\Debug\\CannyDetection.exe'

    exec(prog, (err, stdout, code) => {
      if(err){
        console.error(err);
        return;
      }
      console.log(stdout);
    });
    exec.exit;
  }
});
module.exports = router;
