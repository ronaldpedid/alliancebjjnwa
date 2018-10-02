import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Landing } from './landing/Landing';
import { Instructor } from './instructor/Instructor';
import { Contact } from './contact/Contact';

class App extends Component {
  render() {
    return (

      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route path='/classes' component={Instructor} />
          <Route path='/contact' component={Contact} />
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