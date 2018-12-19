import { FETCH_USER, IS_LOADING, IS_LOADING_FALSE } from './../actions/types';

const initialState = {
    userList: [],
    isLoading:false,
    isFalse:false
}

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_USER:
            return {
                ...state,
                userList: action.payload,
                isLoading:false
            }
        case IS_LOADING:{
            return {
                ...state,
                isLoading:true
            }
        }
        case IS_LOADING_FALSE:{
            return {
                ...state,
                isFalse:true
            }
        }
        default:
            return state;
    }
}