import axios from 'axios';

export const API_CALL_START = "API_CALL_START";
export const API_CALL_END = "API_CALL_END";
export const ADD_SMURF = "ADD_SMURF";
export const SET_ERROR = "SET_ERROR";

export const fetchSmurfs = () => dispatch => {
  console.log("fetching");
  dispatch({type: API_CALL_START});
  axios.get(`http://localhost:3333/smurfs`)
  .then(res => {
    console.log(res.data);
    dispatch({type: API_CALL_END, payload: res.data});
  })
  .catch(err => {
    console.log(err);
    dispatch({type: SET_ERROR, payload: err})
  })
}
export const addSmurf = (smurf) => dispatch => {
  console.log(smurf);
  if(!smurf.name || !smurf.nickname || !smurf.position){
    dispatch({type: SET_ERROR, payload: "Missing Parameter(s)"})
    return;
  }
  dispatch({type: API_CALL_START});
  axios.post('http://localhost:3333/smurfs', smurf)
  .then(res => {
    console.log(res.data);
    dispatch({type: ADD_SMURF, payload: res.data});
  })
  .catch(err =>{
    console.log(err.response.data.Error);
    dispatch({type: SET_ERROR, payload: err.response.data.Error});
  })
}
export const setErrorText = (error) => dispatch => {

}

//Task List:
//1. Add fetch smurfs action: 
//              - fetch and return initial list of smurfs
//              - dispatch actions that indicate if we are waiting for a server response
//              - dispatch an error text action if an error is returned from the server
//2. Add add smurf action:
//              - dispatch an error text action if smurf data does not includes a name, nickname and position field
//              - send a post request with the smurf as body to see if there is an error
//              - dispatch add smurf action if request is successful
//              - dispatch an error text action if an request returns an error
//3. Add set error text action:
//              - return action object setting error text
//4. Any other actions you deem nessiary to complete application.