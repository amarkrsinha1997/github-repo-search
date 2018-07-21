const initialState = {
	repos: []
}

export function reporeducer(state = initialState, action){
  switch (action.type) {
    case 'SHOW_REPO':
      return {
        repos: action.payload
      };
    default:
      return state;
  }
}
