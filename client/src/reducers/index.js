
import {API_CALL_START, API_CALL_END, ADD_SMURF, SET_ERROR} from '../actions/index';

const initialState = {
  smurfs:[],
  isLoading:false,
  error:'',
}

const reducer = (state = initialState, action)=>{
  switch(action.type){
    case API_CALL_START:
      return {
        ...state,
        isLoading: true,
        error: '',
      };
    case API_CALL_END:
      return {
        ...state,
        isLoading: false,
        smurfs: [...state.smurfs,action.payload]
      };
    case ADD_SMURF:
      return {
        isLoading: false,
        error: '',
        smurfs: [...state.smurfs,action.payload]
      };
    case SET_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload
      };
    default:
      return state;
  }
}

export default reducer;

//Task List:
//1. Add in the initialState needed to hold: 
//      - an array of smurfs
//      - a boolean indicating if the app is loading
//      - error text
//2. Setup your reducer to take the state and action as peremeters
//3. Add in cases to your reducer to handle:
//      - The start of an api call
//      - The end of an api call
//      - The adding a smurf to the smurf list when added into payload
//      - Setting Error Text
//      - Any other state changes you see as necessary