import React, { Component } from 'react';
import { Zoom } from "react-slideshow-image";
import Dialog from 'react-dialog'
import ReactModal from 'react-modal';

import image1 from "./images/background1.jpg";
import image2 from "./images/background2.jpg";
import image3 from "./images/background3.jpg";
import image4 from "./images/background4.jpg";
import image5 from "./images/background5.jpg";
// images
// 01
import PJ01_image1 from "./images/project01/PJ01_image1.jpg";
import PJ01_image2 from "./images/project01/PJ01_image2.png";
import PJ01_image3 from "./images/project01/PJ01_image3.jpg";
// // 02 
import PJ02_image1 from "./images/project02/1.png";
import PJ02_image2 from "./images/project02/2.png";
// 03
import PJ03_image1 from "./images/project03/1.png";
import PJ03_image2 from "./images/project03/2.png";
import PJ03_image3 from "./images/project03/3.png";
import PJ03_image4 from "./images/project03/4.png";
import PJ03_image5 from "./images/project03/5.png";
// 05
import PJ05_image1 from "./images/project05/1.png";
import PJ05_image2 from "./images/project05/2.png";
import PJ05_image3 from "./images/project05/3.png";
import PJ05_image4 from "./images/project05/4.png";
import PJ05_image5 from "./images/project05/5.png";
import PJ05_image6 from "./images/project05/6.png";
// 06
import PJ06_image1 from "./images/project06/1.png";
import PJ06_image2 from "./images/project06/2.png";
import PJ06_image3 from "./images/project06/3.png";
import PJ06_image4 from "./images/project06/4.png";
import PJ06_image5 from "./images/project06/5.png";
import PJ06_image6 from "./images/project06/6.png";
import PJ06_image7 from "./images/project06/7.png";



// end import images


// style was imported in index.css
import "react-slideshow-image/dist/styles.css";


const images = [image1, image2, image3, image4, image5];
const PJ01_images = [PJ01_image1, PJ01_image2, PJ01_image3];


const Arrows = {
  prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></div>,
  nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></div>
};
//

//
const SlideshowProjects01 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4} {...Arrows}>
        {
          PJ01_images.map((each, index) => <img key={index} style={{width: "100%", objectFit: 'contain', height: 'auto', maxHeight: '400px'}} src={each} />)
        }
      </Zoom>
    </div>
  )
}

const SlideshowProjects02 = () => {
  const PJ02_images = [ PJ02_image1,  PJ02_image2];
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          PJ02_images.map((each, index) => <img key={index} style={{width: "100%", objectFit: 'contain', height: 'auto', maxHeight: '400px'}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects03 = () => {

  const PJ03_images = [PJ03_image1, PJ03_image2, PJ03_image3, PJ03_image4, PJ03_image5];
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          PJ03_images.map((each, index) => <img key={index} style={{width: "100%", objectFit: 'contain', height: 'auto', maxHeight: '400px'}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects04 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects05 = () => {
  const PJ05_images = [PJ05_image1, PJ05_image2, PJ05_image3, PJ05_image4, PJ05_image5, PJ05_image6];
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          PJ05_images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects06 = () => {
  const PJ06_images = [PJ06_image1, PJ06_image2, PJ06_image3, PJ06_image4, PJ06_image5, PJ06_image6 , PJ06_image7];
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          PJ06_images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects07 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects08 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects09 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects010 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
const SlideshowProjects011 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4}  arrows={true} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}
export default class Projects extends Component {
  // constructor() {
  //   super();
  //   this.state = {
  //       isDialogOpen: false
  //   }
  // }

  // openDialog = () => this.setState({ isDialogOpen: true })

  // handleClose = () => this.setState({ isDialogOpen: false })
  constructor () {
    super();
    this.state = {
      showModal1: false,
      hiddenSlideShow: 'inline',

      showModal2: false,
      showModal3: false,
      showModal4: false,
      showModal5: false,
      showModal6: false,
      showModal7: false,
      showModal8: false,
      showModal9: false,
      showModal10: false,
    };
    
    this.handleOpenModal1 = this.handleOpenModal1.bind(this);
    this.handleCloseModal1 = this.handleCloseModal1.bind(this);

    this.handleOpenModal2 = this.handleOpenModal2.bind(this);
    this.handleCloseModal2 = this.handleCloseModal2.bind(this);

    this.handleOpenModal3 = this.handleOpenModal3.bind(this);
    this.handleCloseModal3 = this.handleCloseModal3.bind(this);

    this.handleOpenModal4 = this.handleOpenModal4.bind(this);
    this.handleCloseModal4 = this.handleCloseModal4.bind(this);

    this.handleOpenModal5 = this.handleOpenModal5.bind(this);
    this.handleCloseModal5 = this.handleCloseModal5.bind(this);

    this.handleOpenModal6 = this.handleOpenModal6.bind(this);
    this.handleCloseModal6 = this.handleCloseModal6.bind(this);

    this.handleOpenModal7 = this.handleOpenModal7.bind(this);
    this.handleCloseModal = this.handleCloseModal7.bind(this);

    this.handleOpenModal8 = this.handleOpenModal8.bind(this);
    this.handleCloseModal8 = this.handleCloseModal8.bind(this);

    this.handleOpenModal9 = this.handleOpenModal9.bind(this);
    this.handleCloseModal9 = this.handleCloseModal9.bind(this);

    this.handleOpenModal10 = this.handleOpenModal10.bind(this);
    this.handleCloseModal10 = this.handleCloseModal10.bind(this);
  }
  // 01 ecommerce
  handleOpenModal1 () {
    this.setState({ showModal1: true , hiddenSlideShow: 'none'});
  }
  
  handleCloseModal1 () {
    this.setState({ hiddenSlideShow: 'inline', showModal1: false});
  }
  // 02 app chat
  handleOpenModal2 () {
    this.setState({ showModal2: true , hiddenSlideShow: 'none'});
  }
  
  handleCloseModal2 () {
    this.setState({ hiddenSlideShow: 'inline', showModal2: false});
  }
  // 03 files
  handleOpenModal3 () {
    this.setState({ showModal3: true , hiddenSlideShow: 'none'});
  }
  
  handleCloseModal3 () {
    this.setState({ hiddenSlideShow: 'inline', showModal3: false});
  }
  // 04 CV
  handleOpenModal4 () {
    this.setState({ showModal4: true , hiddenSlideShow: 'none'});
  }
  
  handleCloseModal4 () {
    this.setState({ hiddenSlideShow: 'inline', showModal4: false});
  }
  // 05 Kubernetes
  handleOpenModal5 () {
    this.setState({ showModal5: true , hiddenSlideShow: 'none'});
  }
  
  handleCloseModal5 () {
    this.setState({ hiddenSlideShow: 'inline', showModal5: false});
  }
  // 06 Massive data
  handleOpenModal6 () {
    this.setState({ showModal6: true , hiddenSlideShow: 'none'});
  }
  
  handleCloseModal6 () {
    this.setState({ hiddenSlideShow: 'inline', showModal6: false});
  }
  // 07 Room Ocupancy
  handleOpenModal7 () {
    this.setState({ showModal7: true , hiddenSlideShow: 'none'});
  }
  
  handleCloseModal7 () {
    this.setState({ hiddenSlideShow: 'inline', showModal7: false});
  }
  // 08 Echocardiogram
  handleOpenModal8 () {
    this.setState({ showModal8: true , hiddenSlideShow: 'none'});
  }
  
  handleCloseModal8 () {
    this.setState({ hiddenSlideShow: 'inline', showModal8: false});
  }
  // 09 Number Bounding
  handleOpenModal9 () {
    this.setState({ showModal9: true , hiddenSlideShow: 'none'});
  }
  
  handleCloseModal9 () {
    this.setState({ hiddenSlideShow: 'inline', showModal9: false});
  }
  // 10 Crawling News
  handleOpenModal10 () {
    this.setState({ showModal10: true , hiddenSlideShow: 'none'});
  }
  
  handleCloseModal10 () {
    this.setState({ hiddenSlideShow: 'inline', showModal10: false});
  }
  // 11 Soduku 
  handleOpenModal11 () {
    this.setState({ showModal11: true , hiddenSlideShow: 'none'});
  }
  
  handleCloseModal11 () {
    this.setState({ hiddenSlideShow: 'inline', showModal11: false});
  }

  // end
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <h1><span>Projects</span></h1>

        <h1><span>Web Application</span></h1>
        <div  className="row">
          <div className="twelve columns collapsed">
            <h2>E-COMMERCE WEBSITE</h2>
            <div className="three columns">
              <p><b><i>Technologies and Tools</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal1}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal1}
                  contentLabel="01"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}>KT E-Commerce</h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	CRUD features to manage list of products.</li>
                    <li>•	Sign-in, Sign-up, Sign-out and User Profile for manage user information.</li>
                    <li>•	Making HTTP calls using Axios and calling multipart API with file upload.</li>
                    <li>•	Using ExpressJS on the server-side and MongoDB for database management.</li>
                    <li>•	Using ReactJS with Material UI library on the client-side.</li>
                    <li>•	API Specification using Swagger 2.0.</li>
                    <li>•	Unit testing for API using Mocha & Chai and NYC for Coverage reporter.</li>
                    <li>•	Built Docker Compose for the API, Database and working on how to deploy a complete application</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal1}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>
        
            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects01 />
            </div>
          </div>
        </div>
        
        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>Chat application</h2>
            <div className="three columns">
              <p><b><i>Technologies and Tools</i></b> <br></br> 
              •NodeJS •ExpressJS •JavaScript •Socket.io
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal2}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal2}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> Chatty</h3>
                  <ul>
                    <li>•	Realtime chat website using Web Socket protocol. The website has features such as Login and select Chatroom, list of users and chat together</li>
                    <li>•	Writing the backend that implements the Web Socket protocol</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/chatty" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal2}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/chatty" target="_blank">GitHub</a> </p></p>
            </div>

            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects02 />
            </div>
          </div>
        </div>

        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>FILES MANAGEMENT WEBSITE</h2>
            <div className="three columns">
            <p><b><i>Technologies and Tools</i></b> <br></br> 
              •NodeJS •ExpressJS •JavaScript •EJS View Engine
            </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal3}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal3}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> FileManager </h3>
                  <ul>
                    <li>•	This site used Express and other modules to develop a File Management Website, has features such as: Account Registration, Login, and File/Folder Management.</li>
                    <li>•	Used MySQL for Database management</li>
                    <li>•	Used View Engine EJS</li>
                    <li>•	The backend API for login, register, logout and upload files in this project.</li>
                    <li>• cookie and session implements for Login</li>
                    <li>• fs to read and write files and multer to upload</li>
                    <li>• Security: bcrypt to hashing user password and cross site request forgery token to attack prevention CSRF and rate limit to attack prevention DDOS</li>
                    <li>• express-form, express-validator to validate data form HTML form.</li>
                    <li>• flash messsage to send messages between routes.</li>
                    <li>• ajax/fetch combined with server-side rest api to perform features that need to read/change data from server without reloading the web</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/FileManager" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal3}>Close</button>
                </ReactModal>
              </div>
            <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/FileManager" target="_blank">GitHub</a> </p></p>          </div>
            
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects03 />
            </div>
          </div>
        </div>

        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>This CV Online with Love</h2>
            <div className="three columns">
            <p><b><i>Technologies and Tools</i></b> <br></br> 
              •ReactJS •Bootstrap4 •HTML/CSS •JavaScript
              </p>
              <hr></hr>
              <p>The most valuable description is your experience with this CV</p>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/hkthiet-cv-online" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}} >
              <SlideshowProjects04/>
            </div>
          </div>
        </div>

        

        <h1 style={{marginTop:'120px'}}><span>Research</span></h1>
        <div className="row">
          <div className="twelve columns collapsed">
            <h2>KUBERNETES NOTEBOOK</h2>
            <div className="three columns">
            <p><b><i>Technologies and Tools</i></b> <br></br> 
              •Kubernetes •Docker
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal5}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal5}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> Kubernetes Notebook </h3>
                  <ul>
                    <li>•	Researching about Containerization on Docker, Google Kubernetes for distributed application deployment and try to document what I learn in this GitHub repository and look forward to learning more about Containerization.</li>
                    <li>•	Architecture of the Kubernetes Cluster and Containers, Workloads.</li>
                    <li>•	Practie with exercies on Katacoda such as  Deploy Single Node on Kubernetes Cluster, HPA, POD & Service using YAML manifest and practice with ReplicaSet, Deployment.</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/kubernetes-notebook" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal5}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/kubernetes-notebook" target="_blank">GitHub</a> </p></p></div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects05 />
            </div>
          </div>
        </div>
         
        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>MASSIVE DATA PROCESSING</h2>
            <div className="three columns">
            <p><b><i>Technologies and Tools</i></b> <br></br> 
              •Python •Jupyter Notebook •Machine Learning •PySpark
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal6}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal6}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}>Massive Data Processing</h3>
                  <ul>
                    <li>•	Researching about Massive Data Processing and synthesized as an instrumental study at GitHub.</li>
                    <li>•	Finding Similar Documents Application with Locality Sensitive Hashing in Big Data.
                    <a href="https://colab.research.google.com/drive/13yTs0VT0wYDV9YzDB9YMIEwu-SKZv-yl?usp=sharing" target="_blank">&nbsp; Colab using PySpark</a>
                    &nbsp; and <a href="https://colab.research.google.com/drive/1al-1mblo6cCYbNAlHqMY36LNqNOHOC2E?usp=sharing" target="_blank" >Colab not using PySpark</a>
                    </li> 
                    <li>•	<a href="https://colab.research.google.com/drive/1llG_cU6rhy6f1Ly15V--qy4ZNftFJZHV?usp=sharing" target="_blank" >Machine Learning &nbsp;</a>
in PySpark and Recommendation System</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/Massive-Data-Processing-Course" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal6}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/Massive-Data-Processing-Course" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects06 />
            </div>
          </div>
        </div>

        <h1 style={{marginTop:'120px'}}><span>Artificial Intelligence &#38; Machine Learning</span></h1>
        
        <div className="row">
          <div className="twelve columns collapsed">
            <h2>Room Ocupancy Detection</h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal7}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal7}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                  
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal7}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects07 />
            </div>
          </div>
        </div>

        {/*
        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>Echocardiogram</h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	CRUD features to manage list of products.</li>
                    <li>•	Sign-in, Sign-up, Sign-out and User Profile for manage user information.</li>
                    <li>•	Making HTTP calls using Axios and calling multipart API with file upload.</li>
                    <li>•	Using ExpressJS on the server-side and MongoDB for database management.</li>
                    <li>•	Using ReactJS with Material UI library on the client-side.</li>
                    <li>•	API Specification using Swagger 2.0.</li>
                    <li>•	Unit testing for API using Mocha & Chai and NYC for Coverage reporter.</li>
                    <li>•	Built Docker Compose for the API, Database and working on how to deploy a complete application</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects08 />
            </div>
          </div>
        </div>


        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>Number Bounding Boxes Detection</h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	Using JWT token authentication user based on RSA SHA-256 mechanism and login authorization for Facebook, Google. There are also features send emails for user using Nodemailer module</li>
                    <li>•	CRUD features to manage list of products.</li>
                    <li>•	Sign-in, Sign-up, Sign-out and User Profile for manage user information.</li>
                    <li>•	Making HTTP calls using Axios and calling multipart API with file upload.</li>
                    <li>•	Using ExpressJS on the server-side and MongoDB for database management.</li>
                    <li>•	Using ReactJS with Material UI library on the client-side.</li>
                    <li>•	API Specification using Swagger 2.0.</li>
                    <li>•	Unit testing for API using Mocha & Chai and NYC for Coverage reporter.</li>
                    <li>•	Built Docker Compose for the API, Database and working on how to deploy a complete application</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects09 />
            </div>
          </div>
        </div>

        <h1 style={{marginTop:'120px'}}><span>Others</span></h1>

        <div className="row">
          <div className="twelve columns collapsed">
            <h2>Cralwing Viet Nam News</h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects010 />
            </div>
          </div>
        </div>

        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>Soduku Problem</h2>
            <div className="three columns">
            <p><b><i>Technology Used</i></b> <br></br> 
              •NodeJS •MongoDB •ReactJS •ExpressJS •Mocha & Chai •NYC Coverage reporter •Swagger API Specification •Docker Compose
              </p>
              <hr></hr>
              <div>
                <button onClick={this.handleOpenModal}>Description</button>
                <ReactModal 
                  isOpen={this.state.showModal}
                  contentLabel="Description My Project"
                  style={{
                    overlay: {
                      backgroundColor: '#2F2D2E',
                      position: 'fixed',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                    },
                    content: {
                      position: 'absolute',
                      top: '40px',
                      left: '40px',
                      right: '40px',
                      bottom: '40px',
                      border: '1px solid #ccc',
                      background: '#fff',
                      overflow: 'auto',
                      WebkitOverflowScrolling: 'touch',
                      borderRadius: '4px',
                      outline: 'none',
                      paddingLeft: '120px',
                      paddingTop: '24px',
                      color: 'rgb(0, 0, 0)',
                      fontSize: 'large'
                    }
                  }}
                >
                  <h3 style={{textAlign: 'center'}}> E-Commerce Website </h3>
                  <ul>
                    <li>•	Developing a web application for merchants. The application helps users manage their personal information and list of products</li>
                  </ul>
                  <p><b><i>Source code at</i></b> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank" style={{fontSize: 'x-large'}}>GitHub</a> </p>
                  <button onClick={this.handleCloseModal}>Close</button>
                </ReactModal>
              </div>
              <p><b><i>Source code at  </i></b> <p style={{fontSize: 'x-large'}}> <a href="https://github.com/smoothkt4951/KT-Ecommerce" target="_blank">GitHub</a> </p></p>            </div>
            <div id="portfolio-wrapper" className="nine columns" style={{display: this.state.hiddenSlideShow}}>
              <SlideshowProjects011 />
            </div>
          </div>
        </div> */}

  </section>
        );
  }
}