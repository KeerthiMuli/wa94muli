var express = require('express');
var router = express.Router();
var muli = 0;
/* GET users listing. */
router.get('/', function(req, res, next) {
  muli = muli+1;
  res.send('User accesses are: ' + muli);
});

module.exports = router;
