const initialState = {
  pending: true,
  logged: false,
  id: null,
  userInfo: {}
}

const loggedUserReducer = (state = initialState, action) => {
  if (action.type === 'GET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false
    })
  }
  if (action.type === 'SET_LOGGED_USER') {
    return Object.assign({}, state, {
      pending: false,
      logged: action.logged,
      userInfo: action.userInfo
    })
  }
  return state
}

export default loggedUserReducer
