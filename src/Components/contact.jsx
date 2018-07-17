import React, { Component } from 'react';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputName: '',
      inputEmail: '',
      inputSubject: '',
      inputMessage: ''
    };
    console.log('State', this.state)
  }

  updateInputName(event) {
    this.setState({
      inputName: event.target.value
    });
  }

  updateInputEmail(event) {
    this.setState({
      inputEmail: event.target.value
    });
  }

  updateInputSubject(event) {
    this.setState({
      inputSubject: event.target.value
    });
  }

  updateInputMessage(event) {
    this.setState({
      inputMessage: event.target.value
    });
  }

  render() {
    if(this.props.data){
      var name = this.props.data.name;
      var street = this.props.data.address.street;
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone = this.props.data.phone;
    }

    return (
      <section id="contact">

         <div className="row section-head">

            <div className="two columns header-col">

               <h1><span>Get In Touch.</span></h1>

            </div>

            <div className="ten columns">

                  <p className="lead">If you want to contact me, just scroll up or click on About me tab or scroll bellow. You will find everything in there, Dont use the contact form, it wont work.
                  </p>

            </div>

         </div>

         <div className="row">

            <div className="eight columns">


               <form action="/send" method="post" id="contactForm" name="contactForm">
					          <fieldset>

                      <div>
          						   <label htmlFor="contactName">Name <span className="required">*</span></label>
          						   <input type="text" value={this.state.inputName} size="35" id="contactName" name="contactName" onChange={event => this.updateInputName(event)}/>
                      </div>

                      <div>
          						   <label htmlFor="contactEmail">Email <span className="required">*</span></label>
          						   <input type="text" value={this.state.inputEmail} size="35" id="contactEmail" name="contactEmail" onChange={event => this.updateInputEmail(event)}/>
                      </div>

                      <div>
          						   <label htmlFor="contactSubject">Subject</label>
          						   <input type="text" value={this.state.inputSubject} size="35" id="contactSubject" name="contactSubject" onChange={event => this.updateInputSubject(event)}/>
                      </div>

                      <div>
                        <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                        <textarea cols="50" value={this.state.inputMessage} rows="15" id="contactMessage" name="contactMessage" onChange={event => this.updateInputMessage(event)}></textarea>
                      </div>

                      <div>
                         <button className="submit">Submit</button>
                         <span id="image-loader">
                            <img alt="" src="images/loader.gif"/>
                         </span>
                      </div>

    					     </fieldset>
    				   </form>


               <div id="message-warning"> Error boy</div>

      				   <div id="message-success">
                        <i className="fa fa-check"></i>Your message was sent, thank you!<br/>
      				   </div>

                </div>


            <aside className="four columns footer-widgets">

               <div className="widget widget_contact">

					   <h4>Address and Phone</h4>
					   <p className="address">
						   {name}<br/>
						   {street} <br/>
						   {city}, {state} {zip}<br/>
						   <span>{phone}</span>
					   </p>

				   </div>

            </aside>

      </div>

   </section>
    )
  }
}

export default Contact;
