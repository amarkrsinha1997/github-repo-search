import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import {showRepos} from './actions/actions'

import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class Repos extends Component {
    componentDidMount(){

		const username = this.props.match.params.username
		this.props.showRepos(username)

	}
    render(){
        return (
        	<div>
				<Link to='/'>{'<< Go Back'}</Link>
				<ol>
					{this.props.repos}
				</ol>
			</div>
        );
    }
}

Repos.propTypes = {
	showRepos: PropTypes.func.isRequired
}
const mapStateToProps = state => {
	return {repos:state.reporeducer.repos}
}

export default connect(mapStateToProps, { showRepos })(Repos)
