import React from 'react'
import ReactDOM from 'react-dom'
import Search from './searchBar'
import Repos from './repos'
import { Provider } from 'react-redux';
import store from './store'
import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'



ReactDOM.render(
	<Provider store={store}>
		<Router>
			<Switch>
				<Route path='/' exact={true} component={Search}/>
				<Route path='/:username' component={Repos}/>
			</Switch>
		</Router>
	</Provider>,
	document.getElementById('root')
);
