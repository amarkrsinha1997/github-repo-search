	import axios from 'axios'
	import React from 'react'

	const API_URL = 'https://api.github.com'

	// action to trigger whenever a key is pressed.
	var items;
	const getInfo = (username) => {		
		axios.get(`${API_URL}/search/users?q=${username}`)
		.then(({ data }) => {
			items = data.items
		})
	}

	const user = (event) => {
		if (event.target.value && event.target.value.length > 1) {
			if (event.target.value.length % 2 === 0) {
				getInfo(event.target.value)
				}
			}
		}
	export const handleInputChange = (event) => dispatch => {
		user(event)

		const statedata = {
			query: event.target.value,
			users: items
		}

		dispatch({
			type:'SEARCH_USER',
			payload: statedata
		})
	}



	const liStyle = {
		margin:'10px',
		fontSize:'20px',
	}

	export const showRepos = (username) => dispatch => {
		axios.get(`${API_URL}/users/${username}/repos`)
		.then(({ data }) => {
			const repos = data.map(repo => {
				return repo.fork ? '' : <li key={repo.id} style={liStyle}>{repo.name}</li>
				})
			return repos
		}).then((repos)=>{
				dispatch({
					type:'SHOW_REPO',
					payload: repos
				})
			})
	}

