import just2102_avatar from "../img/just2102_avatar.png"

let initialState = {
    currentWriter: {id:1,username:'just2102',avatar: just2102_avatar},
    isAuthorized: true,
    isFetching: false
}


function authReducer (state = initialState, action) {
    return {...state}
}


export default authReducer