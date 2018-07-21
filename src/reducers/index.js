import { combineReducers } from 'redux'

const userInitialState = {
	results:[]
}

function userreducer (state = userInitialState, action) {
  switch (action.type) {
    case 'SEARCH_USER':
      return {
        ...state,
        results: action.payload.users
      };
    default:
      return state;
  }
}
const repoInitialState = {
	repos: []
}

function reporeducer (state = repoInitialState, action){

  switch (action.type) {
    case 'SHOW_REPO':
      return {
        ...state,
        repos: action.payload
      };
    default:
      return state;
  }
}

export const reducer = combineReducers({
	userreducer,
	reporeducer
})