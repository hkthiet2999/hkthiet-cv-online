import React from 'react';
import certificateSrc from './images/certificates/serverside-nodejs-express-mongodb.png';

export default class Resume extends React.Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="resume">
        <div className="row education">
          <div className="three columns header-col">
            <h1><span>Education</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.education && resumeData.education.map((item) => {
                return (
                  <div className="row item">
                    <div className="nine columns">
                      <h3>{item.UniversityName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfPassing} {item.YearOfPassing}</em></p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                )
              })
            }
            <a id="experience"></a>
          </div>
        </div>
        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Experience</span></h1>
          </div>

          <div className="nine columns main-col">
          {
            resumeData.work && resumeData.work.map((item, index) => {
              if (Array.isArray(item)) {
                return item.map((i, subIndex) => (
                  <div className="row item" key={`subitem-${index}-${subIndex}`}>
                    <div className="twelve columns">
                      <h3>{i.CompanyName}</h3>
                      <p className="info">
                        {i.specialization}
                      </p>
                      <a href="https://seamless.insure/" target="_blank" rel="noopener noreferrer">Seamless Insurance Project</a>
                      {
                        i.Timeline && i.Timeline.map((timelineItem, timelineIndex) => (
                          <div key={`timeline-${index}-${subIndex}-${timelineIndex}`}>
                            <p className="info">
                            {timelineItem.specialization}
                            <span>&bull;</span> <em className="date">{timelineItem.time}</em>
                            </p>
                            <ul style={{ listStyleType: 'disc' }}>
                              {
                                timelineItem.descriptions && timelineItem.descriptions.map((description, descIndex) => (
                                  <li>
                                    {description}
                                  </li>
                                ))
                              }
                            </ul>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                ));
              }  else {
                return (
                  <div className="row item" key={`item-${index}`}>
                    <div className="twelve columns">
                      <h3>{item.CompanyName}</h3>
                      <p className="info">
                        {item.specialization}
                        <span>&bull;</span> <em className="date">{item.MonthOfLeaving} {item.YearOfLeaving}</em>
                      </p>
                      <p>
                        {item.Achievements}
                      </p>
                    </div>
                  </div>
                );
              }
            })
          }
          <a id="certificate"></a>
        </div>

      </div>

        <div className="row work">
          <div className="three columns header-col">
            <h1><span>Certificate</span></h1>
          </div>

          <div className="nine columns main-col">
            {
              resumeData.certificate && resumeData.certificate.map((item) => {
                return (
                  <div className="row item">
                    <div className="twelve columns">
                      <h3>{item.certificateName}</h3>
                      <p className="info">
                        <span>&bull;</span> <em className="date">{item.dateOfAchived}</em>
                      </p>

                      <div>
                        <img src={certificateSrc} alt="Server-side Development with NodeJS, Express and MongoDB" />
                      </div>

                      <p>Check it out by <a href="https://bit.ly/2VDi7lQ"> click</a> and <a href="https://bit.ly/3yxmVrA"> my GitHub repository</a> </p>
                    </div>

                  </div>

                )
              })
            }
            <a id="skills"></a>
          </div>
        </div>

        <div className="row skill">

          <div className="three columns header-col">
            <h1><span>Technical Skills</span></h1>
          </div>

          <div className="nine columns main-col">
            <div className="skills-container">
              <div className="skills-grid">
                {resumeData.skills.map((skill, index) => (
                  <div className="skill-item" key={index}>
                    <i className={`icon-${skill.toLowerCase().replace('/', '').replace(' ', '-')}`}>
                    </i>
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section >


    );
  }
}
