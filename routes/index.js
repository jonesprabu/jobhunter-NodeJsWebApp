var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
/* The application main url mapping*/
router.get('/jobhunter', function(req, res, next) {
  //Sending the html file in response.
  res.sendFile(appRoot + '/views/index.html');
});

/* DB call happen here, the json objec is sent back in the response*/
router.get('/api/jobs', function(req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
      res.json(docs);
  });
});



module.exports = router;
