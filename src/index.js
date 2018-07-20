import React from 'react'
import ReactDOM from 'react-dom'
import Search from './searchBar'
import Repos from './repos'

import {
	BrowserRouter as Router,
	Route,
	Switch,
} from 'react-router-dom'

ReactDOM.render(
	<Router>
		<Switch>
			<Route path='/' exact={true} component={Search}/>
			<Route path='/:username' component={Repos}/>
		</Switch>
	</Router>,
	document.getElementById('root')
);
