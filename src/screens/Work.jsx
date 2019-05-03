import React from 'react';
import { GeneralContainer } from '../container/GeneralContainer';
import { Footer } from '../container/Footer';

export class Work extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }
  render() {
    return (
      <div className="main-body">
        <GeneralContainer/>
        <div className="container-fluid bg-work content-wrap">
          <div className="row">
            <div className="col-md-6 offset-md-3 col-sm-12 pt-5 vertical-center">
              <h1 className="font-black font-italic my-title py-5 ">Hello, I’m <span style={{color:'#8E8E95'}}>Cut Syifa</span>, <br/>
              currently learning to be a front end developer</h1>
            </div>
          </div>
        </div>
        <div className="container content-wrap">
        <div className="row">
            <div className="col-sm-12 pt-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="container-thumbnail">
                    <img src="https://image.ibb.co/hWFrgJ/ohfasilkom_com.png" class="img-gallery"/>
                  </div>
              </div>
              <div className="col-md-6">
                <h3 className="font-bold title-project pt-md-0 pt-sm-4"><u>Open House Fasilkom UI Landing Page</u></h3>
                <p>Front-End Developer | Sept 2017</p>
                <ul>
                  <li>A landing page that consist information of Open House Fasilkom, a Fasilkom UI's annual event.</li>
                  <li>Designed mock-up to adjust the interface with client’s requirements.</li>
                  <li>Developed the website based on mock-up and ensured responsiveness by testing in multiple browsers</li>
                  <li>Used HTML5, CSS3, JavaScript, and jQuery.</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 pt-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="container-thumbnail">
                    <img src="https://preview.ibb.co/fqsMgJ/edited.png" class="img-gallery"/>
                  </div>
              </div>
              <div className="col-md-6">
                <h3 className="font-bold title-project pt-md-0 pt-sm-4"><u>IMPROMPT.ID</u></h3>
                <p>Front-End Developer | March 2018 - Apr 2018</p>
                <ul>
                  <li>A website project for our client from School of Business and Management ITB. Connect between jobseekers with the companies.</li>
                  <li>Contributed to full-stack development with Django MVC but mostly focused on front-end development.</li>
                  <li>Developed functional responsive views based on user’s requirements using HTML5, CSS3, JavaScript and jQuery.</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-12 pt-5">
              <div className="row">
                <div className="col-md-6">
                  <div className="container-thumbnail">
                    <img src={require('../asset/hospital.png')} class="img-gallery"/>
                  </div>
              </div>
              <div className="col-md-6">
                <h3 className="font-bold title-project pt-md-0 pt-sm-4"><u>Pharmacy Information System of Rumah Sakit Budi Kemuliaan</u></h3>
                <p>Full Stack Developer | Jan 2019 - Apr 2019</p>
                <ul>
                  <li>A web-based pharmacy information system that helps the business process of pharmacy division in the hospital.</li>
                  <li>Involved in all system development phases, from planning, analysis, design, development, and testing.</li>
                  <li>Developed and implemented core of business process system and authentication system using Flask API as back-end.</li>
                  <li>Developed and designed front-end side using VueJS based on mock-up and converted data from AJAX and JSON.</li>
                  <li>Stored, retrieved, and manipulated data from MySQL Database for system needs.</li>
                </ul>
              </div>
            </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
  
}