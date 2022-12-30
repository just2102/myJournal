import { connect } from "react-redux";
import Writers from "./Writers";
import {
  follow,
  setWriters,
  unfollow,
  setTotalWriters,
  setCurrentPage,

  setWritersOnPage
} from "../../Redux/writersReducer";
import React, { Component } from 'react'
import writers from "../../Redux/writers.json"



class WritersAPIComponent extends Component {
    componentDidMount() {
// imitates real API get request (because in a real API request we would specify the number of writers on page that we want based on pre-coded value in state)
        this.props.setWritersOnPage(2)
        this.props.setWriters(writers)
        this.props.setTotalWriters(writers.length)
    }
    onPageClick = (page) => {
        this.props.setCurrentPage(page)
        // if we use real users API this will work: 
        // this.props.setWriters(response.data.items)
    }

    render() {
        return (
                <Writers 
                writersData={this.props.writersData}    follow={this.props.follow} 
                unfollow={this.props.unfollow}          onPageClick={this.onPageClick}
                totalWriters={this.props.totalWriters}  writersOnPage={this.props.writersOnPage}
                currentPage={this.props.currentPage}    
                >
                </Writers>
        )
    }
}

function mapStateToProps(state) {
  return {
    writersData: state.writersPage.writersData,
    totalWriters: state.writersPage.totalWriters,
    writersOnPage: state.writersPage.writersOnPage,
    currentPage: state.writersPage.currentPage,
  };
}

const WritersContainer = connect(mapStateToProps, {
    setWriters,
    follow,
    unfollow,
    setTotalWriters,
    setCurrentPage,

    setWritersOnPage
})(WritersAPIComponent);

export default WritersContainer;
