import React, { Component } from 'react';
import style from './footer.scss';
import { MapComponent } from '../map/Map';

export class Footer extends React.Component {
  render() {
    return (
      <div>
        <div className={style.footerContainer}>
          <div className={style.mapPanel}>
            <MapComponent />
          </div>
          <div className={style.addressPanel}>
            <h3>Alliance Bjj of NWA</h3>
            <h4>1991 West Sunset Ave, Suite 2B, Springdale, Arkansas</h4>
            <h5>555-434-3445</h5>
          </div>
          <div className={style.contactPanel}>
            <h3>Contact Us</h3>
            <h4>479-402-4941</h4>
            <h5>alliancebjjofnwa@gmail.com</h5>
            <h5>Become an Affilate</h5>
          </div>
        </div>
        <div className={style.copyrightPanel}>
          <h4 className={style.copyrightCopy}>Alliance Jiu-Jitsu Association. 2016 All rights reserved.</h4>
        </div>
      </div>
    )
  }
}