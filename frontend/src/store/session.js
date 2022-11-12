import { csrfFetch } from './csrf';



const SET_USER = 'session/setUser';
const REMOVE_USER = 'session/removeUser';


//ACTIONS------------------------------------------
const setUser = (user) => {
    console.log("user", user)
    return {
      type: SET_USER,
      payload: user,
    };
  };
  
  const removeUser = () => {
    return {
      type: REMOVE_USER,
    };
  };

//THUNK ACTIONS
export const login = (user) => async (dispatch) => {
    const { credential, password } = user;
    const response = await csrfFetch('/api/session', {
      method: 'POST',
      body: JSON.stringify({
        credential,
        password,
      }),
    });
    const data = await response.json();
    console.log("in login")
    dispatch(setUser(data.user));
    return response;
  };


  export const restoreUser = () => async dispatch => {
    const response = await csrfFetch('/api/session');
    const data = await response.json();
    dispatch(setUser(data.user));
    return response;
  };


  


  //REDUCERS-----------------------------------------------

  const initialState = { user: null };
  
  const sessionReducer = (state = initialState, action) => {
    let newState;
    console.log("in sessionReducer", action,"\nstate", state)
    switch (action.type) {
      case SET_USER:
        newState = Object.assign({}, state);
        newState.user = action.payload;
        console.log("in sessionReducer newState", newState)
        return newState;
      case REMOVE_USER:
        newState = Object.assign({}, state);
        newState.user = null;
        return newState;
      default:
        return state;
    }
  };
  
  export default sessionReducer;