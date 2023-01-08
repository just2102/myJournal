import { authAPI } from "../api/api";
import just2102_avatar from "../img/just2102_avatar.png"
const UPDATE_USERNAME_INPUT = "UPDATE_USERNAME_INPUT";
const UPDATE_PASSWORD_INPUT = "UPDATE_PASSWORD_INPUT";
const UPDATE_EMAIL_INPUT = "UPDATE_EMAIL_INPUT"

const TOGGLE_AUTH_IN_PROGRESS = "TOGGLE_AUTH_IN_PROGRESS"
const AUTH_SUCCESS = "AUTH_SUCCESS"

const REGISTER_SUCCESS = "REGISTER_SUCCESS"

let initialState = {
    currentUser: {},
    isAuthorized: false,
    isFetching: false,
    emailInput: '',
    usernameInput: '',
    passwordInput: '',
    authInProgress: false
}

export const updateUsernameInput = (input)  => ({type: UPDATE_USERNAME_INPUT, input})
export const updateEmailInput = (input)     => ({type: UPDATE_EMAIL_INPUT, input})
export const updatePasswordInput = (input)  => ({type: UPDATE_PASSWORD_INPUT, input})
//auth actions
const toggleAuthInProgress = (status)      => ({type: TOGGLE_AUTH_IN_PROGRESS, status})
const authSuccess = (user)               => ({type: AUTH_SUCCESS, user})
//register actions
const registerSuccess = () => ({type: REGISTER_SUCCESS})


export function requestRegister (username, email, password) {
    return function (dispatch) {
        dispatch(toggleAuthInProgress(true));

        authAPI.register(username, email, password).then(response=>{
            if (response!==undefined) {
                dispatch(registerSuccess())
                dispatch(authSuccess(response.data))
            } dispatch(toggleAuthInProgress(false))
        })
    }
}
export function requestAuth (email, password) {
    return function (dispatch) {
        dispatch(toggleAuthInProgress(true));

        authAPI.login(email, password).then(response=>{
            if (response.status===200) {
                dispatch(authSuccess(response.data.user))
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
        case UPDATE_EMAIL_INPUT:
            return {
                ...state,
                emailInput: action.input
            }
        case UPDATE_PASSWORD_INPUT:
            return {
                ...state,
                passwordInput: action.input
            }
        case AUTH_SUCCESS:
            return {
                ...state,
                currentUser: action.user,
                isAuthorized: true
            }
        case TOGGLE_AUTH_IN_PROGRESS:
            return {
                ...state,
                authInProgress: action.status,
                usernameInput: "",
                emailInput: "",
                passwordInput: ""
            }
        default: return state
    }    
}


export default authReducer