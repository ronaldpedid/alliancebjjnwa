import React, { Component } from 'react';
import style from './header.scss'
import { LogoRegular } from '../logo/Logo';

export class Header extends Component {
  render() {
    return (
      <div className={style.headerContainer}>
        <div className={style.logoContainer}>
          <a href="/"><LogoRegular /></a>
          <h1 className={style.logo}>ALLIANCE BJJ of <span className={style.yellow}>North West Arkansas</span></h1>
        </div>
        <div className={style.address}>
          <h4><span className={style.green}>OPEN</span> MONDAY TO THURSDAY 5PM TO 8PM</h4>
          <h3>1771 West Sunset Ave, Suite 2B, Springdale, Arkansas 555-434-3445</h3>
        </div>
      </div>
    )
  }
}