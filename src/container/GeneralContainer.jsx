import React from 'react';
import '../my-style.css';

export class GeneralContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return(
      <React.Fragment>
        <div className="head-line"></div>
        <nav className="navbar navbar-light bg-navbar py-3">
          <a className="navbar-brand" href="#">Navbar</a>
          <ul className="navbar-nav ml-auto">
            <button className="btn btn-resume px-5 font-bold">Resume</button>
          </ul>
        </nav>
      </React.Fragment>
    )
  }
}