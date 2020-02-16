//template don't commit
import React, { Component } from 'react';
import style from './landing.scss';
import { Header } from '../header/Header';
import { Navigation, NavigationMobile } from '../navigation/Navigation';
import { Hero } from '../hero/Hero';
import { AdultPanel } from '../panel/Adults';
import { Promo } from '../promotional/Promo';
import { Footer } from '../footer/Footer';
import { MissionStatement } from '../mission/Mission';
import Calendar from '../calendar/NewCalendar';


export class Landing extends Component {
  render() {
    return (
      <div className={style.backgroundLanding}>
        <Header />
        <Navigation />
        <Hero />
        <MissionStatement />
        <AdultPanel />
        <Calendar />
        <Promo />
        <Footer />
      </div>
    );
  }
}