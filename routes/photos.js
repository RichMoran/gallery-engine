var express = require('express');
var router = express.Router();
var path = require('node:path');
var process = require('process');

router.get('/', function (req, res, next) {
  res.status(404).send('you need to use the route /photos/imageFileName.jpg', 404);
});

// GET an image
router.get('/:imageName', function (req, res, next) {
  const filename = path.join(process.cwd(), 'public', 'images', req.params.imageName);
  res.sendFile(filename);
});

module.exports = router;
