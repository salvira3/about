import React from 'react';
import { GeneralContainer } from '../container/GeneralContainer';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <GeneralContainer/>
      </React.Fragment>
    )
  }
  
}