import React, { Component } from 'react';
import { Zoom } from "react-slideshow-image";
import image1 from "./images/background1.jpg";
import image2 from "./images/background2.jpg";
import image3 from "./images/background3.jpg";
import image4 from "./images/background4.jpg";
import image5 from "./images/background5.jpg";
// style was imported in index.css
import "react-slideshow-image/dist/styles.css";
const images = [image1, image2, image3, image4, image5];

const Arrows = {
  prevArrow: <div style={{width: "30px", marginRight: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
</svg></div>,
  nextArrow: <div style={{width: "30px", marginLeft: "-30px"}}><svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
</svg></div>
};

const SlideshowProjects01 = () => {
  return (
    <div className="slide-container">
      <Zoom scale={0.4} {...Arrows}>
        {
          images.map((each, index) => <img key={index} style={{width: "100%"}} src={each} />)
        }
      </Zoom>
    </div>
  )
}

const SlideshowProjects02 = () => {
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
const SlideshowProjects03 = () => {
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
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="portfolio">
        <h1><span>Projects</span></h1>

        <div  className="row">
          <div className="twelve columns collapsed">
            <h2>Projects 01 </h2>
            <div className="three columns">
              <p>Emojis should be wrapped in have role="img", and have an accessible description with aria-label or aria-labelledby  jsx-a11y/accessible-emoji </p>
            </div>
            <div id="portfolio-wrapper" className="nine columns">
              <SlideshowProjects01 />
            </div>
          </div>
        </div>

        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>Projects 02</h2>
            <div className="three columns">
              <p>Emojis should be wrapped in have role="img", and have an accessible description with aria-label or aria-labelledby  jsx-a11y/accessible-emoji </p>
            </div>
            <div id="portfolio-wrapper" className="nine columns">
              <SlideshowProjects02 />
            </div>
          </div>
        </div>

        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>Projects 03</h2>
            <div className="three columns">
              <p>Emojis should be wrapped in have role="img", and have an accessible description with aria-label or aria-labelledby  jsx-a11y/accessible-emoji </p>
            </div>
            <div id="portfolio-wrapper" className="nine columns">
              <SlideshowProjects03 />
            </div>
          </div>
        </div>

        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>Projects 04</h2>
            <div className="three columns">
              <p>Emojis should be wrapped in have role="img", and have an accessible description with aria-label or aria-labelledby  jsx-a11y/accessible-emoji </p>
            </div>
            <div id="portfolio-wrapper" className="nine columns">
              <SlideshowProjects04/>
            </div>
          </div>
        </div>

        <div style={{marginTop:'120px'}} className="row">
          <div className="twelve columns collapsed">
            <h2>Projects 05</h2>
            <div className="three columns">
              <p>Emojis should be wrapped in have role="img", and have an accessible description with aria-label or aria-labelledby  jsx-a11y/accessible-emoji </p>
            </div>
            <div id="portfolio-wrapper" className="nine columns">
              <SlideshowProjects05 />
            </div>
          </div>
        </div>

  </section>
        );
  }
}