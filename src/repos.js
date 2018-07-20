import React, { Component } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const API_URL = 'https://api.github.com'

const liStyle = {
	margin:'10px',
	fontSize:'20px',
}

class Repos extends Component {
	// Constructor is responsible for setting up props and setting initial stte
	constructor(props){
		// Pass props to the parent component
		super(props);
		// Set initial state
		this.state = {
		// State needed
			repos: []
		};
	}

    componentDidMount(){
    	const username = this.props.match.params.username;
    	axios.get(`${API_URL}/users/${username}/repos`)
		.then(({ data }) => {

			let repos = data.map(repo => {
				return repo.fork ? '' : <li key={repo.id} style={liStyle}>{repo.name}</li>
			})

			this.setState({
			repos: repos
			})
		})
    }

    render(){
        return (
        	<div>
				<Link to='/'>{'<< Go Back'}</Link>
				<ol>
					{this.state.repos}
				</ol>
			</div>
        );
    }
}

export default Repos