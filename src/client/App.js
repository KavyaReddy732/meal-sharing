import React from "react";
import './App.css';
import { BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import {FetchMeals} from './components/TestComponent/Meals/FetchMeal';
import RenderResForm from './components/TestComponent/Meals/RenderResForm';
import { Navbar, Nav } from 'react-bootstrap';
import {Home} from './components/TestComponent/home/Home';
import {Review} from './components/TestComponent/Meals/Reviews';
import {About} from './components/TestComponent/Meals/About';

function App() {
  return (
    <div className="app">
      <div>
      <Navbar  bg="dark" variant="dark"  >
      <Navbar.Brand href="/">Meal Sharing</Navbar.Brand>
      <Nav.Link href='/meals' style={{color:"white"}}>Meals</Nav.Link>
      <Nav.Link href='/review/:id' style={{color:"white"}}>Add Review</Nav.Link>
      <Nav.Link href='/contact' style={{color:"white"}}>Contact Us</Nav.Link>
    </Navbar>
    </div>
    <switch>
    <Route exact path = "/" >
      <Home>Home</Home>
    </Route>
    <Route exact path = "/meals" >
      <FetchMeals>Meals</FetchMeals>
    </Route>
    <Route exact path = "/meals/:id" >
      <RenderResForm>Form
      </RenderResForm>
    </Route>
    <Route exact path = "/review/:id" >
      <Review>Reviews</Review>
    </Route>
    <Route exact path = "/contact" >
      <About>About</About>
    </Route>
    </switch>
    </div>
  );
}

export default App;
