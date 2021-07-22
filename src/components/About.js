import React, { Component } from 'react';
export default class About extends Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="about">
         <div className="row">

            {/* <div className="three columns">

               <img className="profile-pic"  src="images/profilepic.jpg" alt="" />

            </div> */}
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
                        <span> <i class="fa fa-envelope"></i>&nbsp;&nbsp;{resumeData.website}</span>
                        <br></br>
                        <span><i class="fa fa-phone"></i>&nbsp;&nbsp;(+84) 79 862-4951</span>
       					</p>
                  </h3> 
                  </div>

               </div>
            </div>
         </div>
         <a id="education"></a>
      </section>
    );
  }
}