require('dotenv').load();

var express     = require('express');
var path        = require('path');
var multer      = require('multer');
var bodyparser  = require('body-parser');

var mainRoutes  = require('./routes/index');

var applet      = express();
var port        = 8080;

applet.use(bodyparser.json());
applet.use(bodyparser.urlencoded({ extended: true }));

var stor = multer.diskStorage({
  destination: (req, file, callback) => {
    callback(null, './uploads');
  },
  filename: (req, file, callback) => {
    console.log(file);
    callback(null, file.originalname);
  }
});

var upload = multer({
  storage: stor
}).single('image');

applet.post('/upload', (req, res) => {
  upload(req,res, (err) => {
    if(err){
      console.log('Upload Error', err);
      return;
    }
    console.log(req.file);
    res.end('File Uploaded');
    const { exec }   = require('child_process');

    var prog  = '..\\objectDetection\\CannyDetection\\CannyDetection\\bin\\Debug\\CannyDetection.exe'

    exec(prog, (err, stdout, stderr) => {
       if(err){
         console.error(err);
         return;
       }
       console.log(stdout);
     });
  })
});

applet.use('/', mainRoutes);

applet.listen(port, function(err){
  if(err){
    return console.log('Error ', err);
  }

  console.log('Server is listening on ' +port);
});

module.exports = applet;
