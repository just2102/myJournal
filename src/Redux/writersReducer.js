import { writersAPI } from "../api/api";
import just2102_avatar from "../img/just2102_avatar.png";

const SET_WRITERS = "SET_WRITERS";
const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_TOTAL_WRITERS = "SET_TOTAL_WRITERS";
const SET_CURRENT_PAGE = "SET_CURRENT_PAGE";
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_FOLLOWING_IN_PROGRESS = "TOGGLE_FOLLOWING_IN_PROGRESS"

let initialState = {
  writers: [
    // {id:1,followed: true, username:'just2102',avatar: just2102_avatar},
    // {id:2,followed: false, username:'writer1',avatar: just2102_avatar},
    // {id:3,followed: true, username:'writer2',avatar: just2102_avatar}
  ],
  writersOnPage: 2,
  totalWriters: 0,
  currentPage: 1,
  isFetching: false,
  followingInProgress: null
};

const setWriters = (writers)            => ({ type: SET_WRITERS, writers });
const followSuccess = (writerId)        => ({ type: FOLLOW, writerId });
const unfollowSuccess = (writerId)      => ({ type: UNFOLLOW, writerId });
export const setCurrentPage = (page)    => ({ type: SET_CURRENT_PAGE, page });
const setTotalWriters = (number)        => ({type: SET_TOTAL_WRITERS,number,});
const toggleFollowingInProgress = (writerId)=> ({type:TOGGLE_FOLLOWING_IN_PROGRESS, writerId})
const toggleIsFetching = (isFetching)       => ({type: TOGGLE_IS_FETCHING, isFetching});

export function getWriters(writersOnPage, currentPage) {
  return function (dispatch) {
    dispatch(toggleIsFetching(true));

    setTimeout(()=> {
        writersAPI.getTotalWriters().then((number) => {
            dispatch(setTotalWriters(number));
          })
        .then(
            writersAPI.getWriters(writersOnPage, currentPage).then((data) => {
              dispatch(setWriters(data));
              dispatch(toggleIsFetching(false));
            })
          );
    }, 800)
  };
}
export function follow(writerId) {
    return function (dispatch) {
        dispatch(toggleFollowingInProgress(writerId))


        writersAPI.follow(writerId).then(response=> {
            if (response.status===200) {
                dispatch(followSuccess(writerId))
            } setTimeout(() => {
              dispatch(toggleFollowingInProgress(null))
            }, 400);
        })
    }
}
export function unfollow(writerId) {
    return function (dispatch) {
        dispatch(toggleFollowingInProgress(writerId));

        writersAPI.unfollow(writerId).then(response=> {
            if (response.status===200) {
                dispatch(unfollowSuccess(writerId))
            } setTimeout(() => {
              dispatch(toggleFollowingInProgress(null))
            }, 400);
        })
    }
}

function writersReducer(state = initialState, action) {
  switch (action.type) {
    case FOLLOW:
      return {
        ...state,
        writers: state.writers.map((writer) => {
          if (writer.id === action.writerId) {
            let currentWriter = { ...writer };
            currentWriter.followed = true;
            return currentWriter;
          }
          return writer;
        }),
      };
    case UNFOLLOW:
      return {
        ...state,
        writers: state.writers.map((writer) => {
          if (writer.id === action.writerId) {
            let currentWriter = { ...writer };
            currentWriter.followed = false;
            return currentWriter;
          }
          return writer;
        }),
      };
    case SET_WRITERS:
      return {
        ...state,
        writers: action.writers,
      };
    case SET_CURRENT_PAGE:
      return {
        ...state,
        currentPage: action.page,
      };
    case SET_TOTAL_WRITERS:
      return {
        ...state,
        totalWriters: action.number,
      };
    case TOGGLE_IS_FETCHING:
      return {
        ...state,
        isFetching: action.isFetching,
      };
    case TOGGLE_FOLLOWING_IN_PROGRESS:
        return {
            ...state,
            followingInProgress: action.writerId
        }
    default:
      return state;
  }
}

export default writersReducer;
