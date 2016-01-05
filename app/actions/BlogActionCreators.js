"use strict"

import SmallAppDispatcher from '../dispatcher/SmallAppDispatcher'
import {contains} from '../constants/constant'
import WebAPI from '../utils/WebAPI'

var ActionTypes = contains.ActionTypes;

class BlogAction {
	loadBlogs() {
		// console.log("loadBlogs...")
		SmallAppDispatcher.handleViewAction({
			type: ActionTypes.LOAD_BLOGS
		})
		WebAPI.loadBlogs()
	}
}

export default new BlogAction()