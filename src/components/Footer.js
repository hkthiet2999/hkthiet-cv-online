import React from 'react';
export default class Footer extends React.Component {
  render() {
    // let resumeData = this.props.resumeData;
    return (
      <footer>
      <div className="row">
        <div className="twelve columns">
          <ul className="social-links">
            <li>
              <p>
              © Kien Thiet - 2021
              </p>
            </li>
          </ul>
          
        </div>
        <div id="go-top"><a className="smoothscroll" title="Back to Top" href="#home"><i className="icon-up-open" /></a></div>
      </div>
    </footer>
    );
  }
}
