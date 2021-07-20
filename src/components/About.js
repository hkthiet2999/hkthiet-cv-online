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
            <div className="nine columns main-col">

               <h2>Short Introdution</h2>
               <h3>
               <p>
               {
                 resumeData.aboutme
               }
               </p>
               </h3>
               

               <div className="row">

                  <div className="columns contact-details">

                  <h2>Contact Details</h2>
                  <h3>
                  <p className="address">
       						<span>{resumeData.name}</span>
                     <br></br>
       						   <span>
                     {resumeData.address}
                    </span>
                    <br></br>
                    <span>{resumeData.website}</span>
                    <br></br>
                    <span>(+84) 79 862-4951</span>
       					   </p>
                  </h3>
                
                  </div>
               </div>
            </div>
         </div>
      </section>
    );
  }
}