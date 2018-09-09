import React, { Component } from 'react';
import style from './instructor.scss';
import { Header } from '../header/Header';
import { Navigation } from '../navigation/Navigation';

import { Footer } from '../footer/Footer';

export class Instructor extends Component {
  render() {
    return (
      <div className={style.backgroundLanding}>
        <Header />
        <Navigation />
        <div className={style.contentRowInstructor}>
          <div className={style.luis}>
          </div>
          <div className={style.luisInfo}>
            <h1>Head Instructor: Luis Rubalcava</h1>
            <blockquote><h1><em>' You can do better than tha3 man!'</em></h1></blockquote>
            <p className={style.bio}>
              Aliquam id enim ac dolor scelerisque facilisis. Donec in ante mattis, viverra lectus a, convallis tellus. Aliquam accumsan est mattis eleifend sollicitudin. Pellentesque imperdiet efficitur porta. Donec nec ex luctus, gravida ex sed, viverra magna. Nam condimentum finibus massa, eu dictum neque hendrerit ultrices. Curabitur a ante tellus.
            </p>
            <h2 className={style.accolades}>Accolades</h2>
            <h3>3x Pan Am Medalist.</h3>
            <h3>3x Pan Am Medalist.</h3>
            <h3>3x Pan Am Medalist.</h3>
            <h3>3x Pan Am Medalist.</h3>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}