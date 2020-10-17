import React, {useEffect} from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Header from './Header';
import Home from './Home';
import Checkout from './Checkout'
import Login from './Login';
import { useStateValue } from './StateProvider';
import { auth } from "./firebase"

function App() {
  const[{ user}, dispatch]=useStateValue();
  
  //useEffect <<<<<<POWERFUL
  //Piece of code which run based on a given condition

  useEffect(() => {
    const unsub = auth.onAuthStateChanged((authUser) => {
      if (authUser){
        //the user is logged in

        dispatch({
          type: "Set_user",
          user: authUser
        })
      }
      else {
        //the user is logged out
        
        dispatch({
          type: "Set_user",
          user: null
        })
      }
    })
    return () => {
      //Any cleanup operation
      unsub();
    }
  }, [])

  console.log("user is",user)

  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Route checkout */}
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          {/* Route login */}
          <Route path="/login">
            <Login />
          </Route>
          
          {/* This is default route */}
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
        
      </div>
    </Router>
    
  );
}



export default App;
