var express = require('express');
var passport = require('passport');
var router = express.Router();
require('dotenv').config();

router.get('/', function(req, res, next) {
	if(req.user){
	console.log(req.user);
    res.render('home_caller', {
    	user : req.user,
    	HOST_SERVER: process.env.SERVER_HOST
    });
   }else{
   	console.log('not logged in');
   	res.render('carousel', {})
   }
});

module.exports = router;
