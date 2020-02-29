//template don't commit
import React, { Component } from 'react';
import style from './landing.scss';
import { Header } from '../header/Header';
import { Hero } from '../hero/Hero';
import { Footer } from '../footer/Footer';
import { MissionStatement } from '../mission/Mission';
import Calendar from '../calendar/NewCalendar';
import AllianceCarousel from '../carousel/Carousel';
 

export class Landing extends Component {
  render() {
    return (
      <div className={style.backgroundLanding}>
        <Header />
        <Hero />
        <MissionStatement />
        <AllianceCarousel showArrows/>
        <Calendar />
        <Footer />
      </div>
    );
  }
}