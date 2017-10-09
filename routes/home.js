var express = require('express');
var router = express.Router();
var firebase = require('firebase');
var Moment = require('moment-timezone');
/* GET home page. */
router.get('/',function(req, res, next) {
    res.render('home');
});

module.exports = router;
