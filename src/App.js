import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router,Link,Route} from 'react-router-dom';
import Header from "./Components/Core/Header";
import Navbar from "./Components/Core/Navbar";
import Add_defect from "./Components/Forms/Add_defect";
// import View_defect from "./Components/Forms/View_defect";
import View from "./Components/Forms/View";
import Addmodule from "./Components/Forms/Addmodule";
import Viewmodule from "./Components/Forms/Viewmodule";
import Add_Users from './Components/Forms/Add_Users';
import View_Users from './Components/Forms/View_Users';
import Add_Project from './Components/Forms/Add_Project';
import View_Project from './Components/Forms/View_Project';

class App extends Component {

 
  render() {
    return (
      <Router>
      <div className="App">
      <Header/>
      <div id="wrapper">
      <Navbar/>
      {/* <ScrollButton/> */}
      <Route path="/Add_defect" exact render={ () => {
          return (
            <div className="container">
            <br/>
            <Add_defect/></div>);} } />

      <Route path="/View" exact render={() => {
         return (
            <div className="container">
            <br/>
            <View/> </div>);}} />
      
     <Route path="/Addmodule" exact render={()=>{
       return(
        <div className="container">
        <Addmodule/></div> ); }}/>

        <Route path="/Viewmodule" exact render={()=>{
     return(
      <div className="container"> 
        <br/>
       <Viewmodule/></div>);}}/>

       <Route path="/Add_Users" exact render={()=>{
     return(
      <div className="container"> 
        <br/>
       <Add_Users/></div>);}}/>

       <Route path="/View_Users" exact render={()=>{
     return(
      <div className="container"> 
        <br/>
       <View_Users/></div>);}}/>

       <Route path="/Add_Project" exact render={()=>{
     return(
      <div className="container"> 
        <br/>
       <Add_Project/></div>);}}/>
       
       <Route path = "/View_Project" exact render = {() => {
         return(
           <div className="container">
           <br/>
           <View_Project/></div> ); }}/>

    </div>

    
    </div>
    <br/>
    {/* <Footer/> */}
     </Router>
      
    
    );
  }
}

export default App;
