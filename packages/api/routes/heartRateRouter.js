var express = require('express');
var router = express.Router();
var db = require("../database")

router.get('/', function(req, res, next) {
  res.send('Heart rate get method called.');
  db.findAll({type: "heartrate"}); //TODO: limit returned data
});

router.post('/', function(req, res, next) {
    res.send('Heart rate post method called.');
    const doc = req.query;
    db.insertOne(doc);
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
