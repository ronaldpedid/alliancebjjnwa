import React, { Component } from 'react';
import style from './instructor.scss';
import { Header } from '../header/Header';
import { Navigation } from '../navigation/Navigation';
import { InstructorHero } from '../hero/Hero';
import { Footer } from '../footer/Footer';

export class Instructor extends Component {
  render() {
    return (
      <div className={style.backgroundLanding}>
        <Header />
        <Navigation />
        <InstructorHero />
        <div className={style.contentRowVideo}>
          <div className={style.promoVideo}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gd0rLxjDgIQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          <div>
            <h1>Head Instructor: Luis Rubalcava</h1>
            <blockquote><h1><em>' You can do better than tha3 man!'</em></h1></blockquote>
            <h2>Accolades</h2>
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