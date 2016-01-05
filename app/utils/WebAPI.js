"use strict"

import {contains} from '../constants/constant'
import ServerAction from '../actions/ServerActionCreators'
var request = require('superagent');

class WebAPI {
	constructor() {

	}

	loadBlogs() {

		request.get('/api/blogs')
			   .end(function(err, res){
			   		// console.log(err, res)
			   		let blogsJSON = JSON.parse(res.text);
            		ServerAction.receiveBlogs(blogsJSON)	
			   });
		
	}
}

export default new WebAPI()