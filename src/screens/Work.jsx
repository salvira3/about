import React from 'react';
import { GeneralContainer } from '../container/GeneralContainer';
import { Footer } from '../container/Footer';
import { MyIcon } from '../components/MyIcon';

export class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <GeneralContainer/>
        
        <Footer />
      </React.Fragment>
    )
  }
  
}