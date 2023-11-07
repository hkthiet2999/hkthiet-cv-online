import React from 'react';
import cvpdf from './cv-pdf/[HCM]-CV-HoangKienThiet-2021.pdf';
export default class About extends React.Component {
   render() {
      let resumeData = this.props.resumeData;
      return (
         <section id="about">
            <div className="row">
               <div>

                  <h3>
                     <p>
                        {
                           resumeData.aboutme
                        }
                     </p>
                  </h3>


                  <div className="row">

                     <div className="columns">

                        <h2>Contact Details</h2>
                        <h3>

                           <p className="address">

                              <span><i class="fa fa-user"></i>&nbsp;&nbsp;{resumeData.name}</span>
                              <br></br>
                              <span> <i class="fa fa-map-marker"></i>&nbsp;&nbsp;{resumeData.address}
                              </span>
                              <br></br>
                              <span> <i class="fa fa-envelope"></i>&nbsp;&nbsp; <a href="mailto:hkthiet99@gmail.com" target="_blank" rel="noopener noreferrer">{resumeData.website}</a> </span>
                              <br></br>
                              <span><i class="fa fa-phone"></i>&nbsp;&nbsp;(+84) 79 862-4951</span>
                              <br></br>
                              <span><i class="fa fa-download"></i>&nbsp;&nbsp;
                              Download my CV.pdf by
                              <a href={cvpdf} download="[HCM]_CV_HoangKienThiet_2021.pdf"> click</a>
                              </span>

                           </p>
                        </h3>
                     </div>

                  </div>
               </div>
            </div>
            <a id="education" href="#education" aria-label="Education Section"></a>
         </section>
      );
   }
}
