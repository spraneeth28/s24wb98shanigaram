var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('house', { title: 'Search Results of House' });
});

module.exports = router;