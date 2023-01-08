import { connect } from "react-redux";
import Writers from "./Writers";
import Preloader from "../Common/Preloader";
import {
  //thunks
  follow,
  unfollow,
  getWriters,
  setCurrentPage,
} from "../../Redux/writersReducer";
import React, { useEffect } from "react";
import withAuthRedirect from "../hoc/withAuthRedirect";
import { compose } from "redux";
const WritersAPIComponent = (props) => {
  useEffect(() => {
    if (props.writers.length === 0) {
      props.getWriters(props.writersOnPage, props.currentPage);
    }
  });
  function onFollow(userId) {
    props.follow(userId);
  }
  function onUnfollow(userId) {
    props.unfollow(userId);
  }
  function onPageClick(page) {
    props.setCurrentPage(page);
    props.getWriters(props.writersOnPage, page);
  }
  let numberOfPages = Math.ceil(props.totalWriters / props.writersOnPage);
  let pages = [];
  for (let i = 1; i <= numberOfPages; i++) {
    pages.push(i);
  }
  return (
    <>
      {props.isFetching ? (
        <Preloader />
      ) : (
        <Writers
          writers={props.writers}
          pages={pages}
          onFollow={onFollow}
          onUnfollow={onUnfollow}
          onPageClick={onPageClick}
          currentPage={props.currentPage}
          followingInProgress={props.followingInProgress}
        ></Writers>
      )}
    </>
  );
};

function mapStateToProps(state) {
  return {
    writers: state.writersPage.writers,
    totalWriters: state.writersPage.totalWriters,
    writersOnPage: state.writersPage.writersOnPage,
    currentPage: state.writersPage.currentPage,

    isFetching: state.writersPage.isFetching,
    followingInProgress: state.writersPage.followingInProgress,
  };
}

export default compose(
  connect(mapStateToProps, { getWriters, follow, unfollow, setCurrentPage }),
  withAuthRedirect
)(WritersAPIComponent);
