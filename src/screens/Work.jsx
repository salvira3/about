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
            <div className="col-sm-10 offset-sm-2 pt-5 vertical-center">
              <h1 className="font-black font-italic my-title py-5 ">Hi peeps, I’m <span style={{color:'#8E8E95'}}>Cut Syifa</span>! <br/>
              Here's some of my web development projects</h1>
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
                <p>Front-End Developer & UI Designer | Sept 2017</p>
                <ul>
                  <li>A landing page that consist information of Open House Fasilkom, a Fasilkom UI's annual event.</li>
                  <li>Designed mock-up and graphics to adjust the interface with client’s requirements.</li>
                  <li>Developed the website based on mock-up and ensured responsiveness by testing in multiple browsers</li>
                  <li>Used HTML5, CSS3, JavaScript, and jQuery.</li>
                  <li>Live preview <a href="https://wizardly-montalcini-02e904.netlify.com/" target="_blank"><span className="font-black ml-1" style={{color: '#E1B1B0'}}><u>here</u></span></a></li>
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
                <p>Front-End Developer & UI Designer | March 2018 - Apr 2018</p>
                <ul>
                  <li>A website project for our client from School of Business and Management ITB. Connect between jobseekers with the companies.</li>
                  <li>Designed the UI mockup based on wireframe provided by client.</li>
                  <li>Contributed to full-stack development with Django MVC but mostly focused on front-end development.</li>
                  <li>Developed functional responsive views based on user’s requirements using HTML5, CSS3, JavaScript and jQuery.</li>
                  <li>Github <a href="https://github.com/faisalridwan55/IMPROMPT.ID/" target="_blank"><span className="font-black ml-1" style={{color: '#E1B1B0'}}><u>here</u></span></a></li>
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
              <div className="col-md-6 pb-5">
                <h3 className="font-bold title-project pt-md-0 pt-sm-4"><u>Pharmacy Information System of Rumah Sakit Budi Kemuliaan</u></h3>
                <p>Full Stack Developer & UI Designer | Jan 2019 - Apr 2019</p>
                <ul>
                  <li>A web-based pharmacy information system that helps the business process of pharmacy division in the hospital.</li>
                  <li>Involved in all system development phases, from planning, analysis, design, development, and testing.</li>
                  <li>Designed mockup for 3 use cases based on system proposal.</li>
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