import React, { Component } from 'react';

class Portfolio extends Component {
  render() {
    if(this.props.data){
      var projects = this.props.data.projects.map(function(projects){
      var imageUrl = 'images/portfolio/' + projects.image;
        return <div className="columns portfolio-item" key={projects.modal}>
           <div className="item-wrap">

              <a href={projects.url} title="">
                 <img alt="" src={imageUrl}/>
                 <div className="overlay">
                   <div className="portfolio-item-meta">
                        <h5>{projects.title}</h5>
                        <p>Tags: {projects.tags}</p>
                        <p>Category: {projects.category}</p><br/>
                        <p>{projects.description}</p>
                   </div>
                 </div>
                 <div className="link-icon"><i className="icon-plus"></i></div>
              </a>

           </div>
       </div>
     });
    }

    return (
      <section id="portfolio">

        <div className="row">

           <div className="twelve columns collapsed">

              <h1>Check Out Some of My Works.</h1>

              <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
            	      {projects}
              </div>

           </div>

        </div>

        <div id="call-to-action">
          <div className="row">
             <div className="two columns header-col">
                <h1><span>Get Hosting.</span></h1>
             </div>

             <div className="seven columns">
                <h2><span className="lead">Hover on one of them</span></h2>
                <p><span className="lead">Check out the summary of my works by hovering on the image above. Pixel arts come from an artist on steam.</span></p>
             </div>

             <div className="three columns action">
             </div>
          </div>
       </div>

     </section>
    );
  }
}

export default Portfolio;
