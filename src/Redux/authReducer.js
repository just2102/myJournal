import { authAPI } from "../api/api";
import just2102_avatar from "../img/just2102_avatar.png"
const UPDATE_PASSWORD_INPUT = "UPDATE_PASSWORD_INPUT";
const UPDATE_USERNAME_INPUT = "UPDATE_USERNAME_INPUT"

const TOGGLE_AUTH_IN_PROGRESS = "TOGGLE_AUTH_IN_PROGRESS"
const AUTH_SUCCESS = "AUTH_SUCCESS"

let initialState = {
    currentWriter: {},
    //{id:1,username:'just2102',avatar: just2102_avatar},
    isAuthorized: true,
    isFetching: false,
    usernameInput: '',
    passwordInput: '',
    authInProgress: false
}

export const updateUsernameInput = (input) => ({type: UPDATE_USERNAME_INPUT, input})
export const updatePasswordInput = (input) => ({type: UPDATE_PASSWORD_INPUT, input})

const toggleAuthInProgress = (status)      => ({type: TOGGLE_AUTH_IN_PROGRESS, status})
const authSuccess = (writer)               => ({type: AUTH_SUCCESS, writer})

export function requestAuth (username, password) {
    return function (dispatch) {
        dispatch(toggleAuthInProgress(true));

        authAPI.login(username, password).then(response=>{
            if (response!==404) {
                dispatch(authSuccess(response))
            } dispatch(toggleAuthInProgress(false))
        })
    }
}

function authReducer (state = initialState, action) {
    switch(action.type) {
        case UPDATE_USERNAME_INPUT:
            return {
                ...state,
                usernameInput: action.input
            }
        case UPDATE_PASSWORD_INPUT:
            return {
                ...state,
                passwordInput: action.input
            }
        case AUTH_SUCCESS:
            debugger
            return {
                ...state,
                currentWriter: action.writer,
                isAuthorized: true
            }
        case TOGGLE_AUTH_IN_PROGRESS:
            return {
                ...state,
                authInProgress: action.status,
                usernameInput: "",
                passwordInput: ""
            }
        default: return state
    }    
}


export default authReducer