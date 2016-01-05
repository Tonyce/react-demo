"use strict"

import SmallAppDispatcher from '../dispatcher/SmallAppDispatcher'
import {contains} from '../constants/constant'

var ActionTypes = contains.ActionTypes;

class ServerAction {
	loadBlogs() {
		// console.log("loadBlogs...")
		SmallAppDispatcher.handleViewAction({
			type: ActionTypes.LOAD_BLOGS
		})
	}

	receiveBlogs(blogsJson) {
		// console.log("receiveBlogs...", blogsJson)
		SmallAppDispatcher.handleViewAction({
			type: ActionTypes.RECEIVE_BLOGS,
      		json: blogsJson
		})
	}
}

export default new ServerAction()