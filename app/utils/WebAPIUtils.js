"use strict"

var ServerActionCreators = require()
var Constants = require("../constants/constant")
var $ = require("jquery")

var APIEndPoints = Constants.APIEndPoints;

module.exports = {
	signup: function (email, username, password, passwordConfirmation) {
		$.ajax({
			url: APIEndPoints.REGISTRATION,
			method: "POST",
			data: { 
				email: email, 
		        username: username,
		        password: password,
		        password_confirmation: passwordConfirmation
			},
			dataType: "json"
		}).done(function( msg ) {
			console.log(msg)
			ServerActionCreators.receiveLogin(msg, null);
		}).fail(function( jqXHR, textStatus ) {
			alert( "Request failed: " + textStatus );
		});
	},

	login: function (email, password) {
		$.ajax({
			url: APIEndPoints.LOGIN,
			method: "POST",
			data: { 
				email: email,
		        password: password
			},
			dataType: "json"
		}).done(function( msg ) {
			// $( "#log" ).html( msg );
			ServerActionCreators.receiveLogin(msg, null);
		}).fail(function( jqXHR, textStatus ) {
			alert( "Request failed: " + textStatus );
		});
	},

	loadBlogs: function () {
		$.ajax( APIEndPoints.BLOGS )
		.done(function(msg) {
			// alert( "success" );
			ServerActionCreators.receiveBlogs(msg);
		}).fail(function() {
			alert( "error" );
		}).always(function() {
			alert( "complete" );
		});	
	},

	loadBlog: function (blogId) {
		$.ajax( APIEndPoints.BLOGS + "/" + blogId)
		.done(function(msg) {
			// alert( "success" );
			ServerActionCreators.receiveBlog(msg);
		}).fail(function() {
			alert( "error" );
		}).always(function() {
			alert( "complete" );
		});	
	}

}