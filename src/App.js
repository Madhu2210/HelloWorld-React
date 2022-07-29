import ReactDOM from 'react-dom/client';
import React from 'react';
import './App.css'
import logo from './logo-Bridge.jpg'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ContactUs from "./Component/ContactUs";
import AboutUs from "./Component/AboutUs";
import Home from "./Component/Home";
import Layout from "./Component/Layout";
import NoPage from "./Component/NoPage";

class App extends React.Component { 
  url= 'https://www.bridgelabz.com/'
  constructor() {
    super()
    this.state= {
      userName: '',
      nameError: ''
    }
  }

  // onClick function
  onClick = ($event) => {
    console.log("save button is clicked", $event)
    window.open(this.url, "_blank");
  }

  onNameChange = (event) => {
    console.log("value is ", event.target.value);
    const nameRegex = RegExp('^[A-Z]{1}[A-Za-z]{2,}$');
    //set the title using setState method
    this.setState({userName: event.target.value})
    
    if (nameRegex.test(event.target.value)) {
      this.setState({ nameError: ""})
    } else {
      this.setState({nameError: 'Name is Incorrect'})
    }
  }
  render(){
  return (
    <>
    <div className='App'>
      <h1>Hello {this.state.userName} from Bridgelabz</h1>
      <img src={logo} onClick={this.onClick}
      alt ="The Bridgelabz logo: a Bridge to Employment through lab works" />

    <div className='App'>
      <input onChange={this.onNameChange} /><br />
      <span className="error-output">{this.state.nameError}</span>
    </div>

    <div className='Routing'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="aboutus" element={<AboutUs />} />
          <Route path="contactus" element={<ContactUs />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  
       <ul className='community'> 
       <p><b>At BridgeLabz, we are a Community of</b></p>
          <li>Techonologist</li>
        <li>Thinkers</li>
          <li>Builders</li>
      </ul>
      <p> Working together to keep the Tech Employability of Engineeers alive and accessible,
          so Tech Companies worldwide can get contributors and creators for Technology Solutions. 
         We Believe this act of human collaboration across an employability
         platform is essential to individual growth and our collective future.</p>
          
        <p>To know more about us, visit <a href="https://www.bridgelabz.com/">BridgeLabz</a> to learn even more about our mission i.e <strong>Employability To All</strong></p>
    </div>
     </>
    );
  }
}

export default App;
