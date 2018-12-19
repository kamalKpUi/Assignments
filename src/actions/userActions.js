import {FETCH_USER, IS_LOADING, IS_LOADING_FALSE} from './types'

export const fetchUser = (id) => dispatch => {
    dispatch({
        type:IS_LOADING
    });
    fetch('https://reqres.in/api/users/'+id)
    .then(response => response.json())
    
    .then(data => dispatch({
        type: FETCH_USER,
        payload: data.data
    }))
    .catch(err => {
        console.log(err);
    });
    dispatch({
        type:IS_LOADING_FALSE
    });
}