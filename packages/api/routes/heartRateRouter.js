const { query } = require('express');
var express = require('express');
var router = express.Router();
var db = require("../database")

router.get('/', function(req, res, next) {
  res.send('Heart rate get method called.');
  queryString = 'SELECT * FROM User';
  db.query(queryString);
});

router.post('/', function(req, res, next) {
    res.send('Heart rate post method called.');
    const bpm = req.query.bpm;
    const ts = req.query.ts;
    const deviceId = req.query.deviceId;
    const queryString = "INSERT INTO `a21iot16`.`heartRate`(`bpm`,`ts`,`deviceId`)VALUES(" + bpm + "," + ts + "," + deviceId + ");";
    db.query(queryString);
});

router.put('/', function(req, res, next) {
    res.send('Heart rate put method called.');
    const filterDoc = req.query.type;
    const newDoc = req.query;
    db.update(filterDoc, newDoc)
});

router.delete('/', function(req, res, next) {
    res.send('Heart rate delete method called.');
});

module.exports = router;
