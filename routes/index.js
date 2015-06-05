var express = require('express');
var router = express.Router();
var appRoot = require('app-root-path');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/jobhunter', function(req, res, next) {
  console.log("request received !!!");
  console.log("appRoot"+appRoot);
  //res.sendFile(path.join(appRoot + 'app'));
  res.sendFile(appRoot + '/views/index.html');
});

router.get('/api/jobs', function(req, res, next) {
  var db = req.db;
  var collection = db.get('usercollection');
  collection.find({},{},function(e,docs){
      res.json(docs);
  });
});



module.exports = router;
