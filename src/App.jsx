import React from "react";
import "./App.css";
import { Header } from "./components/header/header.jsx";
import { MainSection } from "./components/MainSection/MainSection.jsx";
import { Footer } from "./components/footer/footer";
import { RestaurantPage } from "./components/RestaurantPage/RestaurantPage.jsx";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Header />

      <Router>
        <Route path="/" exact component={MainSection} />
        <Route path="/restaurant" component={RestaurantPage} />
      </Router>
      <Footer />
    </div>
  );
}

export default App;
