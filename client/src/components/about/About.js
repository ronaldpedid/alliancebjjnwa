//template don't commit
import React, { Component } from 'react';
import style from './about.scss';
import { Header } from '../header/Header';
import { Hero } from '../hero/Hero';
import { Footer } from '../footer/Footer';
import { MissionStatement } from '../mission/Mission';

 

export class About extends Component {
  render() {
    return (
      <div className={style.backgroundLanding}>
        <Header />
        <Hero aboutPage/>
        <MissionStatement />
        <Footer />
      </div>
    );
  }
}