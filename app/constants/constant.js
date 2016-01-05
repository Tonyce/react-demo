"use strict"

// var keyMirror = require('keymirror');
import keyMirror from 'keymirror';

export const Keys = keyMirror({
	RECEIVE_BUDGET_ITEMS: null,
	CREATE_BUDGET_ITEM: null,
	UPDATE_BUDGET_ITEM: null,
	DELETE_BUDGET_ITEM: null
});

var APIRoot = "http://localhost:3000/api";

// module.exports = {
export const contains = {

	APIEndpoints: {
		LOGIN:          APIRoot + "/v1/login",
		REGISTRATION:   APIRoot + "/v1/users",
		BLOGS:        APIRoot + "/v1/blogs"
	},

	PayloadSources: keyMirror({
		SERVER_ACTION: null,
		VIEW_ACTION: null
	}),

	ActionTypes: keyMirror({
		// Session
		LOGIN_REQUEST: null,
		LOGIN_RESPONSE: null,

		// Routes
		REDIRECT: null,

		LOAD_BLOGS: null,
		RECEIVE_BLOGS: null,
		LOAD_STORY: null,
		RECEIVE_STORY: null,
		CREATE_STORY: null,
		RECEIVE_CREATED_STORY: null
	})
}

