var express = require('express');
var router = express.Router();
var db = require("../database")

router.get('/', function(req, res, next) {
  res.send('Heart rate get method called.');
  db.findAll({type: "heartrate"});
});

router.post('/', function(req, res, next) {
    res.send('Heart rate post method called.');
});

router.put('/', function(req, res, next) {
    res.send('Heart rate put method called.');
});

router.delete('/', function(req, res, next) {
    res.send('Heart rate delete method called.');
});

module.exports = router;
