"use strict"

// import React from 'react';  
// import Router, { DefaultRoute, Link, Route, RouteHandler } from 'react-router';

// import LoginHandler from './components/Login.js';

// class App extends React.Component {
// 	render() {
// 		return (
// 			<div id="app">
// 				<nav>
// 					<Link to="app">Home</Link>
// 					<Link to="login">Login</Link>          
// 				</nav>
// 				<div className="Main">
// 					<RouteHandler/>
// 				</div>
// 			</div>
// 		);
// 	}
// }

// let routes = (  
// 	<Route name="app" path="/" handler={App}>
// 		<Route name="login" path="/login" handler={LoginHandler}/>
// 	</Route>
// );

// Router.run(routes, function (Handler) {  
// 	React.render(
// 		<Handler/>, 
// 		document.body
// 	);
// });

import React from 'react';
import mui from 'material-ui';
import injectTapEventPlugin from 'react-tap-event-plugin';
import Router, { Route, DefaultRoute, NotFoundRoute, Redirect, Link } from 'react-router';
 
injectTapEventPlugin();
 
import App from './App';
import Home from './components/Home';
import Blog from './components/Blog';
import About from './components/About';
import Contact from './components/Contact';
 
const AppRoutes = (
	<Route path="/" handler={App}>
		<DefaultRoute handler={Home} />
		<Route name="blog" handler={Blog} />
		<Route name="about" handler={About} />
		<Route name="contact" handler={Contact} />
	</Route>
);
 
Router.run(AppRoutes, Router.HashLocation, (Root) => {
  	React.render(
  		<Root />, document.body
  	);
});