import React from 'react';
import Typewriter from "typewriter-effect";
export default class Header extends React.Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <React.Fragment>

        <header id="home">
          <nav id="nav-wrap">
            <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
            <a className="mobile-btn" href="#" title="Hide navigation">Hide navigation</a>
            <ul id="nav" className="nav">
              <li className="current"><a className="smoothscroll" href="#home">Home</a></li>
              <li><a className="smoothscroll" href="#about">About</a></li>
              {/* <li><a className="smoothscroll" href="#resume">Resume</a></li> */}
              <li><a className="smoothscroll" href="#education">Education</a></li>
              <li><a className="smoothscroll" href="#experience">Experience</a></li>
              <li><a className="smoothscroll" href="#certificate">Certificate</a></li>
              <li><a className="smoothscroll" href="#skills">Skills</a></li>

              <li><a className="smoothscroll" href="#portfolio">Projects</a></li>
              <li><a className="smoothscroll" href="#contactme">Contact</a></li>
            </ul>
          </nav>

          <div className="row banner">
            <div className="banner-text">
              <h2 style={{color: '#fff', fontFamily: 'sans-serif '}}>
                Hi There! 👋🏻
              </h2>
              <h1 className="responsive-headline"><span style={{color: '#000000'}}>I am</span> {resumeData.name}</h1>
              <h2 style={{color: '#fff', fontFamily: 'sans-serif '}}>
                <Typewriter
                    options={{
                      loop: true,
                    }}
                    onInit={(typewriter) => {
                      typewriter.typeString('Software Developer')
                          .pauseFor(2500)
                          .deleteAll()
                          .typeString('Welcome to my portfolio')
                          .pauseFor(2500)
                          .deleteAll()
                          .start();
                    }}
                />
              </h2>
              <hr/>
              <ul className="social">
                {
                    resumeData.socialLinks && resumeData.socialLinks.map(item => {
                          return (
                              <li key={item.name}>
                                <a href={item.url} target="_blank" rel="noopener noreferrer"><i className={item.className}></i></a>
                              </li>
                          )
                        }
                    )
                }
              </ul>
            </div>
          </div>

          <p className="scrolldown">
            <a className="smoothscroll" href="#about"><i className="icon-down-circle"></i></a>
          </p>

        </header>
      </React.Fragment>
    );
  }
}
