var express = require('express');
var router = express.Router();
var MOJO = require('../payment/paymentRequest');
/* GET home page. */
console.log(MOJO);
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/payment',MOJO);
module.exports = router;
