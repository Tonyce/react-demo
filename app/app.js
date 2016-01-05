
import React from 'react';
import mui from 'material-ui';
import { RouteHandler } from 'react-router';

import MyBar from './components/my/self-bar';

// Get mui Components
let ThemeManager = new mui.Styles.ThemeManager();
let AppBar = mui.AppBar
let LeftNav = mui.LeftNav
let MenuItem = mui.MenuItem;
var IconButton = mui.IconButton;
var NavigationClose = mui.NavigationClose;
var FlatButton = mui.FlatButton;

let CloseButton = require('material-ui/lib/svg-icons/navigation/close');

 
// Define menu items for LeftNav
let menuItems = [
	{ route: '/', text: 'Home' },
	{ route: 'blog', text: 'Blog' },
	{ route: 'contact', text: 'Contact' },
	{ route: 'about', text: 'About' },
];
 
class App extends React.Component {
 
  	constructor() {
    	super();
 
	    this._handleClick = this._handleClick.bind(this);
	    this._getSelectedIndex = this._getSelectedIndex.bind(this);
	    this._onLeftNavChange = this._onLeftNavChange.bind(this);
  	}
 
	getChildContext() {
		return {
			muiTheme: ThemeManager.getCurrentTheme()
		};
	}

	_handleClick(e) {
		e.preventDefault();
		this.refs.leftNav.toggle();
	}
 
	// Get the selected item in LeftMenu
	_getSelectedIndex() {
		let currentItem;

		for (let i = menuItems.length - 1; i >= 0; i--) {
			currentItem = menuItems[i];
			if (currentItem.route && this.context.router.isActive(currentItem.route)) {
				return i;
	  		}
		}
	}
 
	_onLeftNavChange(e, key, payload) {
		// Do DOM Diff refresh
		this.context.router.transitionTo(payload.route);
	}
 
	render() {
		return (
			<div id="page_container">
				<LeftNav
					ref="leftNav"
					docked={false}
					menuItems={menuItems}
					selectedIndex={this._getSelectedIndex()}
					onChange={this._onLeftNavChange} />

				<header>
					<MyBar 
						onLeftIconButtonTouchTap={this._handleClick} 
						Height={300}>
						TOP • 30
					</MyBar>
				</header>

				<section className="content">
					<RouteHandler />
				</section>
			</div>
		);
	}
 
}
 
App.childContextTypes = {
	muiTheme: React.PropTypes.object
};
 
App.contextTypes = {
 	router: React.PropTypes.func
};

module.exports = App;