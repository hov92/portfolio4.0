import React from "react";
import {Route, } from 'react-router-dom';
import "./App.css";
import Home from "./index.jsx";
import CssBaseline from '@material-ui/core/CssBaseline';
import Resume from "./Resume";
import Portfolio from "./Portfolio";
import Contacts from "./Contacts";


function App(){
  return(
    <>
    <CssBaseline />
    {/* <Switch> */}
    <Route exact path="/" component={Home} />
    <Route path="/resume" component={Resume} />
    <Route path="/portfolio" component={Portfolio} />
    <Route path="/contacts" component={Contacts} />
    {/* </Switch> */}
    

    </>
  );
}

export default App;