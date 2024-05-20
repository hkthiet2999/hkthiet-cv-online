import React, { Component } from 'react';
import Header from './components/Header';
import About from './components/About';
import Resume from './components/Resume';
import Projects from './components/Projects';
import Quote from  './components/Quote';
import Footer from './components/Footer';
import resumeData from './resumeData';
import WorkProjects from './components/WorkProjects';

class App extends Component {
  render() {
    return (
        <div className="App">
            <Header resumeData={resumeData}/>
            <About resumeData={resumeData}/>
            <Resume resumeData={resumeData}/>
            <WorkProjects resumeData={resumeData}/>
            <Quote resumeData={resumeData}/>
            <Footer resumeData={resumeData}/>
        </div>
    );
  }
}

export default App;