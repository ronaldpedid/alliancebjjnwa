import React, { Component } from 'react';
import style from './header.scss'
import { LogoRegular } from '../logo/Logo';



export class Header extends Component {
  render() {
    return (
      <div className={style.headerContainer}>
        <div className={style.logoContainer}>
          <LogoRegular />
          <h1 className={style.logo}>ALLIANCE BJJ OF NWA</h1>
        </div>
        <div className={style.address}>
          <h4><span className={style.bold}>OPEN</span> MONDAY TO THURSDAY 5PM TO 8PM</h4>
          <h3>1771 West Sunset Ave, Suite 2B, Springdale, Arkansas 555-434-3445</h3>
        </div>

      </div>


    )
  }
}