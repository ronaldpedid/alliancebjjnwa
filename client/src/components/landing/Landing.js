//template don't commit
import React, { Component } from 'react';
import style from './landing.scss';
import { Header } from '../header/Header';
import { Navigation } from '../navigation/Navigation';
import { Hero } from '../hero/Hero';
import { AdultPanel } from '../panel/Adults';
import { KidPanel } from '../panel/Kids';
import { Promo } from '../promotional/Promo';
import { Footer } from '../footer/Footer';


export class Landing extends Component {
  render() {
    return (
      <div className={style.backgroundLanding}>
        <Header />
        <Navigation />
        <Hero />
        <div className={style.contentRow}>
          <KidPanel />
          <AdultPanel />
        </div>
        <div>
          <Promo />
        </div>
        <div>
          <Footer />
        </div>
      </div>
    );
  }
}