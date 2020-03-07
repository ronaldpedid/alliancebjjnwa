//template don't commit
import React, { Component } from 'react';
import style from './landing.scss';
import { Header } from '../header/Header';
import { Hero } from '../hero/Hero';
import { Footer } from '../footer/Footer';
import Calendar from '../calendar/NewCalendar';
import AllianceCarousel from '../carousel/Carousel';


export class Landing extends Component {
  render() {
    return (
      <div className={style.backgroundLanding}>
        <Header />
        <Hero />
        <AllianceCarousel showArrows />
        <Calendar />
        <Footer />
      </div>
    );
  }
}