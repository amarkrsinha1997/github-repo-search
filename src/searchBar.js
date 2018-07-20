import React, { Component } from 'react'
import axios from 'axios'
const API_URL = 'https://api.github.com'
import Suggestions from './userSuggestions'



class Search extends Component {
	state = {
		query: '',
		results: []
	}

	getInfo = () => {
		axios.get(`${API_URL}/search/users?q=${this.state.query}`)
		.then(({ data }) => {
			this.setState({
			results: data.items
			})
		})
	}

	handleInputChange = () => {
		this.setState({
		 query: this.search.value},() => {
		  if (this.state.query && this.state.query.length > 1) {
		    if (this.state.query.length % 2 === 0) {
		      this.getInfo()
		    }
		  }else if (!this.state.query) {
		  }
		})
	}

	render() {
		return (
		  <form>
		    <input
		      placeholder="Search for..."
		      ref={input => this.search = input}
		      onChange={this.handleInputChange}
		    />
		   	<Suggestions results={this.state.results} />
		  </form>
		)
	}
}

export default Search
