import { connect } from "react-redux";
import Writers from "./Writers";
import {
  follow,
  unfollow,
  setCurrentPage,
  getWriters,
} from "../../Redux/writersReducer";
import React, { useEffect } from "react";
const WritersAPIComponent = (props) => {
  useEffect(()=> {
    props.getWriters(props.writersOnPage,props.currentPage)
  })

  function onPageClick (page) {
    props.setCurrentPage(page);
    props.getWriters(props.writersOnPage,page)
  };
    return (
      <Writers
        writers={props.writers}
        follow={props.follow}
        unfollow={props.unfollow}
        onPageClick={onPageClick}
        totalWriters={props.totalWriters}
        writersOnPage={props.writersOnPage}
        currentPage={props.currentPage}
      ></Writers>
    );
}

function mapStateToProps(state) {
  return {
    writers: state.writersPage.writers,
    totalWriters: state.writersPage.totalWriters,
    writersOnPage: state.writersPage.writersOnPage,
    currentPage: state.writersPage.currentPage,
  };
}

const WritersContainer = connect(mapStateToProps, {
  // setWriters,
  follow,
  unfollow,
  setCurrentPage,

  getWriters,
})(WritersAPIComponent);

export default WritersContainer;
