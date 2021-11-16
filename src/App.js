import React from 'react';
import Header from './components/Header';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

function App() {
  return(
    <div className='App'>
      <BrowserRouter>
        <Switch>
        <Route exact  path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/contact' component={Contact} />
        <Route path='/:user' component={Header} />
        </Switch>                
      </BrowserRouter>  
    </div>
  );
}

export default App;