import React, { Component } from 'react';

class Resume extends Component {
  render() {
    if(this.props.data){
      var education = this.props.data.education.map(function(edu){
        return <div className="row item" key={edu.school}>

           <div className="twelve columns">

              <h3>{edu.school}</h3>
              <p className="info">{edu.degree} <span>&bull;</span> <em className="date">{edu.graduated}</em></p>

              <p>
              {edu.description}
              </p>

           </div>

        </div>
      });

      var work = this.props.data.work.map(function(work){
        return <div className="row item" key={work.company}>

           <div className="twelve columns">

              <h3>{work.company}</h3>
              <p className="info">{work.title} <span>&bull;</span> <em className="date">{work.years}</em></p>

              <p>
              {work.description}
              </p>

           </div>

        </div>
      });

      var skills = this.props.data.skills.map(function(skills){
        var className = "bar-expand " + skills.name.toLowerCase();
        return <li key={skills.name}><span style={{width: skills.level}} className={className}></span><em>{skills.name}</em></li>
      });
    }

    return (
      <section id="resume">

      <div className="row education">

         <div className="three columns header-col">
            <h1><span>Education</span></h1>
         </div>

         <div className="nine columns main-col">

              {education}

         </div>

      </div>

      <div className="row work">

         <div className="three columns header-col">
            <h1><span>Work</span></h1>
         </div>

         <div className="nine columns main-col">
              {work}
         </div>

      </div>

      <div className="row skill">

         <div className="three columns header-col">
            <h1><span>Skills</span></h1>
         </div>

         <div className="nine columns main-col">

            <p>Everything that i show bellow are everything that i asked for marking my skills from interviewers and technicals after interviews.
            </p>

				<div className="bars">

				   <ul className="skills">
					   {skills}
					 </ul>

				</div>

			</div>

      </div>

   </section>
    );
  }
}

export default Resume;
