import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { Landing } from './landing/Landing';
import { Instructor } from './instructor/Instructor';
import { Contact } from './contact/Contact';

class App extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path='/' component={Landing} />
            <Route exact path='/classes' component={Instructor} />
            <Route exact path='/contact' component={Contact} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;