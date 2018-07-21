import React, { Component } from 'react'
import Suggestions from './userSuggestions'
import {handleInputChange} from './actions/actions'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Search extends Component {
	render() {
		return (
			<form>
				<input
					placeholder="Search for..."
					onChange={this.props.handleInputChange.bind(this)}
				/>
				<Suggestions results={this.props.results} />
			</form>
		)
	}
}
Search.propTypes = {
	handleInputChange: PropTypes.func.isRequired,
};

const mapStateToProps = (state)=>{
	return {results:state.userreducer.results}
}

export default connect(mapStateToProps, { handleInputChange })(Search)
