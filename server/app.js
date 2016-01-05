
'use strict';

var express = require('express');
var bodyParser = require('body-parser');
// var multer = require('multer'); 


var assert = require('assert');

var fs = require("fs")

function respond(req, res, next) {
	res.contentType = 'json';
  	res.send('hello ' + req.params.name);
  	next();
}

var server = express();
server.use(bodyParser.json()); // for parsing application/json
server.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
// server.use(multer()); // for parsing multipart/form-data


server.route('/api/blogs')
	.get(function(req, res) {
		let blogs = [
			{title: "api one"},
			{title: "api oneone"},
			{title: "api twotwo"},
			{title: "api threethreee"},
			{title: "api two"},
			{title: "api three"},
			{title: "api oneone"},
			{title: "api twotwo"},
			{title: "api threethreee"}
		]
		res.send(blogs);
	})
	.put(function(req, res) {
		var id = req.params.id
		console.log("put")
		console.log(id)
		console.log(req.body)
		res.send({});
	})
	.delete(function(req, res) {
		var id = req.params.id
		console.log('delete')
		console.log(id)
		res.send({});
	});

server.listen(3000, function serverStart() {
		console.log('Server running at http://127.0.0.1:3000/');
	});


