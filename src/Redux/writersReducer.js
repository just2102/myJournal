import just2102_avatar from "../img/just2102_avatar.png"

const SET_WRITERS = "SET_WRITERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
const SET_TOTAL_WRITERS = "SET_TOTAL_WRITERS"
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE"

const SET_WRITERS_ON_PAGE = "SET_WRITERS_ON_PAGE"
let initialState = {
    writersData:
    [
        // {id:1,followed: true, username:'just2102',avatar: just2102_avatar},
        // {id:2,followed: false, username:'writer1',avatar: just2102_avatar},
        // {id:3,followed: true, username:'writer2',avatar: just2102_avatar}
    ],
    writersOnPage: 2,
    totalWriters: 0,
    currentPage: 1,
    isFetching: false
}

export const setWriters = (writers)     =>    ({type: SET_WRITERS, writers})
export const follow     = (writerId)    =>    ({type: FOLLOW, writerId})
export const unfollow   = (writerId)    =>    ({type: UNFOLLOW, writerId})
export const setTotalWriters = (number) =>    ({type: SET_TOTAL_WRITERS, number})
export const setCurrentPage  = (page)   =>    ({type: SET_CURRENT_PAGE, page})

// fake behavior to imitate real API get request
export const setWritersOnPage = (number) => ({type: SET_WRITERS_ON_PAGE, number})

function writersReducer (state = initialState, action) {
    switch(action.type) {
        case FOLLOW:
            return {
                ...state,
                writersData: state.writersData.map(writer => {
                    if (writer.id === action.writerId) {
                        let currentWriter = {...writer};
                        currentWriter.followed = true;
                        return currentWriter;
                    }
                    return writer
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                writersData: state.writersData.map(writer => {
                    if (writer.id === action.writerId) {
                        let currentWriter = {...writer}
                        currentWriter.followed = false
                        return currentWriter;
                    }
                    return writer;
                })
            }
        case SET_WRITERS:
            return {
                ...state,
                writersData: action.writers
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        case SET_TOTAL_WRITERS:
            return {
                ...state,
                totalWriters: action.number
            }
        // fake behavior to imitate real API get request with pre-determined number of writers on page
        case SET_WRITERS_ON_PAGE:
            return {
                ...state,
                writersOnPage: action.number
            }
        default: return state
    }
}

export default writersReducer