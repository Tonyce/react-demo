"use strict"

import EventEmitter from 'events';
// var EventEmitter = require('events').EventEmitter;
import SmallAppDispatcher from '../dispatcher/SmallAppDispatcher'
import {contains} from '../constants/constant'

var ActionTypes = contains.ActionTypes;
var CHANGE_EVENT = 'change';

var _blogs = [];
var _blog  = {
	title: "",
	body : "",
	user : {
		userName: ""
	}
}

class BlogStore extends EventEmitter {
	constructor() {
		super();
	}

	emitChange() {
		// console.log("emitChage...", _blogs)
		this.emit(CHANGE_EVENT)
	}

	addChangeListener(callback) {
		this.on(CHANGE_EVENT, callback)
	}

	removeChangeListener(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	}

	getAllBlogs() {
		// console.log("getAllBlogs", _blogs)
		return _blogs
	}

	getBlog() {
		return _blog
	}

	getErrors() {
		return []
	}
}

var blogStore = new BlogStore()

blogStore.dispatchToken = SmallAppDispatcher.register(payload => {
	var action = payload.action
	switch (action.type) {
		case ActionTypes.LOAD_BLOGS: {
			// _blogs.push({
			// 	title: new Date() + ""
			// })
			// blogStore.emitChange()
		}
			break;
		case ActionTypes.RECEIVE_BLOGS: {
			_blogs = action.json ;
			// console.log("ActionTypes.RECEIVE_BLOGS:",_blogs)
			blogStore.emitChange();
		}
      		break;
      	default: 
      		return
	}

	return true;
})

export default blogStore
