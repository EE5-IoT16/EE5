var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Gyroscope get method called.');
});

router.post('/', function(req, res, next) {
    res.send('Gyroscope post method called.');
});

router.put('/', function(req, res, next) {
    res.send('Gyroscope put method called.');
});

router.delete('/', function(req, res, next) {
    res.send('Gyroscope delete method called.');
});

module.exports = router;
