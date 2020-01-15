import React, { Component } from 'react';

export default class PageNotFound extends Component {

  render() {
    console.log(this.props)
    return (
      <div className='container'>
        <div className='row'>
          <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
            <h2 className="display-3 pt-5">OOPS!</h2>
            <h3>404 PAGE NOT FOUND</h3>
            <h3>Requested URL: <span className="text-danger"> {this.props.location.pathname} </span>was not found!</h3>
          </div>
        </div>
      </div>

    )
  }

}