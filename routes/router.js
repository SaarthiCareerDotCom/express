var express = require('express');
var router = express.Router();
//var MOJO = require('../payment/paymentRequest');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
//router.get('/mojo',MOJO);
module.exports = router;
