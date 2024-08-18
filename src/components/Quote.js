import React from 'react';
export default class Quote extends React.Component {
  render() {
    let resumeData = this.props.resumeData;
    return (
      <section id="testimonials">
        <a id="contactme"></a>
        <div className="text-container">
          <div className="row">
            <div className="two columns header-col">
              <h1><span>Quote</span></h1>
            </div>
            <div className="ten columns flex-container">
              <div className="flexslider">
                <ul className="slides">
                  <li>
                    <blockquote>
                      <p>
                      I love connecting with different people so if you want to say hi, I'll be happy to meet you more!😄
                      </p>
                      {/* <cite>Hoang Kien Thiet</cite> */}
                    </blockquote>
                  </li>
                </ul>
              </div> {/* div.flexslider ends */}
            </div> {/* div.flex-container ends */}
          </div> {/* row ends */}
          <div className="row section-head">
            <div className="ten columns">
              <p className="lead">
              Finally, I would like to say "Thank You" for spent time to look at my profile. You're a flower 🌼 on earth 🌎, let's make our life beautiful and meaningful
              </p>
              <br></br>
              <p className="lead">
              Feel free to contact me 🙋‍♂️
              </p>
            </div>
            <div>
            <div className="row banner">
              <div className="banner-text">
                <ul className="social">
                    {
                      resumeData.socialLinks && resumeData.socialLinks.map(item =>{
                        return(
                                <li key={item.name}>
                                  <a href={item.url} target="_blank"><i className={item.className}></i></a>
                                </li>
                              )
                            }
                      )
                    }
                </ul>
              </div>
            </div>
          </div>
          </div>  
        </div>  {/* text-container ends */}
      </section>
        );
  }
}
