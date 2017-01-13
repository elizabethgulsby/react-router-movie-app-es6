import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Router, Route, hashHistory, IndexRoute } from 'react-router'
import SingleMovie from './SingleMovie'

ReactDOM.render(

	<Router history={hashHistory}>
		<Route path="/" component={App} />
		<Route path="/:movie" component={SingleMovie} />
	</Router>,
	document.getElementById('root')
);
