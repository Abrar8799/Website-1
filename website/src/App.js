import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/Pages/Home'
import Products from './components/Pages/Products.js'
// import Rout from './components/Pages/Rout'



 function App() {
  return (
    <>
<div className="App">
<Router>
<Navbar />
<Switch>
<Route exact Path='/' component={Home} />
<Route Path='/products' component={Products}/>
</Switch>
</Router>
</div>
</>
  )
  
}

export default App
