var express = require('express');
var router = express.Router(); 
var path = require('path');
 
module.exports = function(app){

	app.get('/', function(req,res) {
		res.redirect('/home');
	});

	app.get('/home', function(req,res) {
		res.render('home');
	});

	app.get('/art', function(req,res) {
		res.render('art');
	});
	
	app.get('/character', function(req,res) {
		res.render('character');
	});
	
	app.get('/lillah', function(req,res) {
		res.render('lillah');
	});
	
	app.get('/bio', function(req,res) {
		res.render('bio');
	});
}