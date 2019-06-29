import React from 'react';
import './App.css';
import {Header} from "./header/header.jsx";
import {MainSection} from "./main-section/main-section.jsx";
import {Footer} from "./footer/footer";
import {RestaurantPage} from "./RestaurantPage/RestaurantPage.jsx";
import {BrowserRouter as Router, Route} from "react-router-dom";



function App() {
  return (
      <div className="App">
        <Header/>

        <Router>
          <Route path="/"
                 exact
                 component={MainSection}/>
          <Route path="/restaurant"
                 component={RestaurantPage}/>
        </Router>
        <Footer/>
      </div>
  );
}

export default App;
