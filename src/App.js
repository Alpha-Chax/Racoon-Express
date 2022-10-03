import './App.css';

import React, { useState } from 'react'
import NavBar from './Components/NavBar';
import News from './Components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom" 
import LoadingBar from 'react-top-loading-bar'


const App = ()=> {
  const pageSize = 5;
  const apiKey = "pub_118985d2873298d82176b2a5a96e5241c9aeb"
  const [progress, setProgress] = useState(0)
 
    return (
      <div>
        <Router>
        <NavBar/> 
        <LoadingBar
        height={3}
        color='#f11946'
        progress={progress} 
      />
        <Switch>
          <Route exact path="/"><News setProgress={setProgress} apiKey={apiKey} key="home"  country="in" pageSize={pageSize} category="world"/></Route> 
          <Route exact path="/business"><News setProgress={setProgress} apiKey={apiKey} key="business"  country="in,us" pageSize={pageSize} category="business"/></Route> 
          <Route exact path="/entertainment"><News setProgress={setProgress} apiKey={apiKey} key="entertainment"  country="in" pageSize={pageSize} category="entertainment"/></Route> 
          <Route exact path="/world"><News setProgress={setProgress} apiKey={apiKey} key="world"  country="in,us" pageSize={pageSize} category="world"/></Route> 
          <Route exact path="/politics"><News setProgress={setProgress} apiKey={apiKey} key="politics"  country="in,us" pageSize={pageSize} category="politics"/></Route> 
          <Route exact path="/health"><News setProgress={setProgress} apiKey={apiKey} key="health"  country="in,us" pageSize={pageSize} category="health"/></Route> 
          <Route exact path="/environment"><News setProgress={setProgress} apiKey={apiKey} key="environment"  country="in,us" pageSize={pageSize} category="environment"/></Route> 
          <Route exact path="/food"><News setProgress={setProgress} apiKey={apiKey} key="food"  country="in,us" pageSize={pageSize} category="food"/></Route> 
          <Route exact path="/science"><News setProgress={setProgress} apiKey={apiKey} key="science"  country="in" pageSize={pageSize} category="science"/></Route> 
          <Route exact path="/sports"><News setProgress={setProgress} apiKey={apiKey} key="sports"  country="in" pageSize={pageSize} category="sports"/></Route> 
          <Route exact path="/technology"><News setProgress={setProgress} apiKey={apiKey} key="technology"  country="in,us" pageSize={pageSize} category="technology"/></Route> 
        </Switch>
        </Router>
      </div>
    )
 
}

export default App;