import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing } from './landing/Landing';
import { Contact } from './contact/Contact';
import { About } from './about/About';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/contact' component={Contact} />
          <Route path='/about' component={About} />
          <Route path="/" component={ErrorPage} />
        </Switch>
      </BrowserRouter>

    );
  }
}

const ErrorPage = () => {
  return "404";
}


export default App;