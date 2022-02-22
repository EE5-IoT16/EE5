var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Accelerometer get method called.');
});

router.post('/', function(req, res, next) {
    res.send('Accelerometer post method called.');
});

router.put('/', function(req, res, next) {
    res.send('Accelerometer put method called.');
});

router.delete('/', function(req, res, next) {
    res.send('Accelerometer delete method called.');
});

module.exports = router;
