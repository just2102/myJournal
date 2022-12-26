import just2102_avatar from "../img/just2102_avatar.png"

const SET_WRITERS = "SET_WRITERS"
const FOLLOW = "FOLLOW"
const UNFOLLOW = "UNFOLLOW"
let initialState = {
    writersData:
    [
        {id:1,followed: true, username:'just2102',avatar: just2102_avatar},
        {id:2,followed: false, username:'writer1',avatar: just2102_avatar},
        {id:3,followed: true, username:'writer2',avatar: just2102_avatar}
    ]
}

export const setWritersCreator = (writers)  =>    ({type: SET_WRITERS, writers: writers})
export const followCreator     = (writerId) =>    ({type: FOLLOW, writerId: writerId})
export const unfollowCreator   = (writerId) =>    ({type: UNFOLLOW, writerId: writerId})

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
                writersData: [...state.writersData, action.writers]
            }
        default: return state
    }
}

export default writersReducer