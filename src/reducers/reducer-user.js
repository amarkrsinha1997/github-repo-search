const initialState = {
	query: '',
	results:[]
}

export function userreducer (state = initialState, action) {
  switch (action.type) {
    case 'SEARCH_USER':
      return {
        query: action.payload.query,
        results: action.payload.users
      };
    default:
      return state;
  }
}
