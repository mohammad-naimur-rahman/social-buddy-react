import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About/About';
import Home from './Components/Home/Home';
import PostDetails from './Components/PostDetails/PostDetails';
import Contact from './Components/Contact/Contact';


function App() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route exact path='/'>
            <Home></Home>
          </Route>
          <Route path="/about">
            <About></About>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path='/post/:postID'>
            <PostDetails></PostDetails>
          </Route>

        </Switch>
      </div>
    </Router>

  );
}

export default App;
