var express = require('express');
var router = express.Router();

// GET an image
router.get('/', function (req, res, next) {
  res.send('respond with an image');
});

module.exports = router;
