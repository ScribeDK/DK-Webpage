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

	app.get('/charity', function(req,res) {
		res.render('charity');
	});
	
	app.get('/characters', function(req,res) {
		res.render('characters');
	});
	
	app.get('/lillah', function(req,res) {
		res.render('lillah');
	});
	
	app.get('/biography', function(req,res) {
		res.render('biography');
	});
}