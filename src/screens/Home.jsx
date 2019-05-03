import React from 'react';
import { GeneralContainer } from '../container/GeneralContainer';
import { Footer } from '../container/Footer';
import { MyIcon } from '../components/MyIcon';

export class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <React.Fragment>
        <GeneralContainer/>
        <div className="container pt-5">
          <div className="row">
            <div className="col-sm-12">
              <img src={require('../asset/my-photo.png')} className="rounded-circle my-photo mt-5" />
              <h1 className="font-black font-italic my-title pt-5">Cut Syifa Salvira</h1>
              <h5 className="font-italic pt-3"><MyIcon type="fas fa-map-marker-alt" />Jakarta, Indonesia</h5>
              <h5 className="detail text-justify pt-3">An undergraduate <span className="font-bold">Information System student at University of Indonesia</span> who always eager to learn new things
                 and seek out new challenges. Passionate in <span className="font-bold">frontend development and UI UX</span>. 
                 I enjoy developing ideas on how to improve websites. I am also happy to collaborate with other people.</h5>
              <h5 className="pt-5 font-italic"> Reach me through <span className="font-black ml-2" style={{color: '#E1B1B0'}}><u>salvirasyifa@gmail.com</u></span></h5>
              <div className="pt-5">
                <MyIcon type="fab fa-linkedin" url="https://www.linkedin.com/in/cut-syifa-salvira/"/>
                <MyIcon type="fab fa-github" url="http://github.com/salvira3"/>
                <MyIcon type="fab fa-gitlab" url="http://gitlab.com/salvira3" />
                <MyIcon type="fab fa-instagram" url="http://instagram.com/salvira3/" />
                <MyIcon type="fab fa-twitter-square" url="http://twitter.com/salvira3" />
                <MyIcon type="fab fa-spotify" url="https://open.spotify.com/user/salvira3?si=Jb9wo_XbSB-DYNnvnYR9jA" />
              </div>
              
            </div>
          </div>
          
        </div>
        <Footer />
      </React.Fragment>
    )
  }
  
}