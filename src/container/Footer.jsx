import React from 'react';
import '../my-style.css';

export class Footer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return(
      <React.Fragment>
        <div className="footer bg-navbar font-italic">Made by Cut Syifa © 2019</div>
      </React.Fragment>
    )
  }
}