var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Temperature get method called.');
});

router.post('/', function(req, res, next) {
    res.send('Temperature post method called.');
});

router.put('/', function(req, res, next) {
    res.send('Temperature put method called.');
});

router.delete('/', function(req, res, next) {
    res.send('Temperature delete method called.');
});

module.exports = router;
