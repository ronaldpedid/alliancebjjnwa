//template don't commit
import React, { Component } from 'react';
import style from './landing.scss';
import { Header } from '../header/Header';
import { Navigation, NavigationMobile } from '../navigation/Navigation';
import { Hero } from '../hero/Hero';
import { AdultPanel } from '../panel/Adults';
import { KidPanel } from '../panel/Kids';
import { Promo } from '../promotional/Promo';
import { Footer } from '../footer/Footer';
import { Social } from '../social/Social';
import { MissionStatement } from '../mission/Mission';


export class Landing extends Component {
  render() {
    return (
      <div className={style.backgroundLanding}>
        <Header />
        <Navigation />
        <Hero />
        <MissionStatement />
        <div className={style.landingClasses}>
          <KidPanel />
          <AdultPanel />
        </div>
        <Promo />
        <Social />
        <Footer />
      </div>
    );
  }
}