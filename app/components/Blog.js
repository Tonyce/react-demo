"use strict"

import React from 'react';
import BlogStore from '../stores/BlogStore';
import BlogAction from '../actions/BlogActionCreators'
 
class Blog extends React.Component {

	constructor(props) {
	    super(props);
	    this.state = { 
			blogs: BlogStore.getAllBlogs(), 
			errors: []
		};
	    BlogStore.addChangeListener(this._onChange.bind(this));
    	BlogAction.loadBlogs();
	}

	componentWillUnmount() {
	    BlogStore.removeChangeListener(this._onChange.bind(this));
	}

	_onChange() {
		// console.log("this", this)
		// console.log("this.isMounted()", this.isMounted.bind(this))
		console.log("_onChange", BlogStore.getAllBlogs())
		this.setState({ 
			blogs: BlogStore.getAllBlogs(),
			errors: BlogStore.getErrors()
		}); 
	}

	render() {
		return (
			<div className="blogsContainer">
				<BlogsList blogs={this.state.blogs}>
				</BlogsList>
			</div>
		);
	}
}

class BlogsList extends React.Component {
	render() {
		return (
			<ul>
				{this.props.blogs.map(function(blog, index){
					return <BlogItem blog={blog} key={"blog-" + index} />
				})}
			</ul>
		);
	}
}


class BlogItem extends React.Component {
	render() {
		return (
			<li>
				<div className="blogContainer">
					{this.props.blog.title}
				</div>
			</li>
		);
	}
}


export default Blog;