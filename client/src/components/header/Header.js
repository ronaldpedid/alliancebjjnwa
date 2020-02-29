import React, { Component } from 'react';
import style from './header.scss'
import { LogoLongName } from '../logo/Logo';
import { Navigation } from '../navigation/Navigation';

export class Header extends Component {
  render() {
    return (
      <div className={style.headerContainer}>
        <div className={style.logoContainer}>
          <a href="/"><LogoLongName className={style.logoLong} /></a>
   
        </div>
        <div className={style.navContainer} >
          <Navigation />
        </div>
      </div>
    )
  }
}



