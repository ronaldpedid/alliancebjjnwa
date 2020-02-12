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
import { MissionStatement } from '../mission/Mission';


export class Landing extends Component {
  render() {
    return (
      <div className={style.backgroundLanding}>
        <Header />
        <Navigation />
        <Hero />
        <MissionStatement />
        <AdultPanel />
        <Promo />
        <Footer />
      </div>
    );
  }
}