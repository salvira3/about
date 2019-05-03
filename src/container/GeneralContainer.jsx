import React from 'react';
import '../my-style.css';
import { BrowserRouter as Router, Route, Switch, NavLink} from 'react-router-dom';

export class GeneralContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return(
      <React.Fragment>
        <div className="head-line"></div>
        <nav className="navbar navbar-expand-sm navbar-light bg-navbar py-3">
          <ul className="navbar-nav mr-auto">
            <li className='nav-item'>
              <NavLink to="/" exact className="nav-link text-uppercase" activeClassName="active" >About</NavLink>
            </li>
            <li className='nav-item'>
              <NavLink to="/work" exact className="nav-link text-uppercase" activeClassName="active" >Work</NavLink>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto">
            <a href="https://drive.google.com/file/d/1XwdZolO2hRYtlcI2548ylTdJ2Hi-papk/view?usp=sharing"><button className="btn btn-resume px-5 font-bold">Resume</button></a>
          </ul>
          
        </nav>
      </React.Fragment>
    )
  }
}