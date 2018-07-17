import React, { Component } from 'react';
import $ from "jquery";
import './App.css';
import Header from './Components/header.jsx';
import About from './Components/about.jsx';
import Contact from './Components/contact.jsx';
import Resume from './Components/resume.jsx';
import Testimonials from './Components/testimonials.jsx';
import Portfolio from './Components/portfolio.jsx';
import Footer from './Components/footer.jsx';

class App extends Component {
  constructor(props){
    super(props);

    this.state = {
      inputValue: '',
      resumeData:{}
    }
  }

  getResumeData(){
    $.ajax({
      url: 'http://localhost:3000/resumeData.json',
      dataType: 'json',
      cache: false,
      success: function(data, status){
        this.setState({
          resumeData: data
        });
        console.log('Status:', status);
      }.bind(this),
      error: function(xhr, status, err){
        console.log('Error: ', err);
        console.log('Status:', status);
      }
    });
  }

  componentDidMount(){
    this.getResumeData();
  }

  updateInputValue(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  render() {
    console.log('data: ', this.state.resumeData);
    return (
      <div className="App">
        <Header data={this.state.resumeData.main}/>
        <About data={this.state.resumeData.main}/>
        <Resume data={this.state.resumeData.resume}/>
        <Portfolio data={this.state.resumeData.portfolio}/>
        <Testimonials data={this.state.resumeData.testimonials}/>
        <Contact data={this.state.resumeData.main}/>
        <Footer data={this.state.resumeData.main}/>
      </div>
    );
  }
}

export default App;
