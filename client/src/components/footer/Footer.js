import React, { Component } from 'react';
import style from './footer.scss';


export class Footer extends React.Component {
  render() {
    return (
      <div className={style.footer}>
        <div className={style.footerContainer}>
          <div className={style.mapPanel}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21665.593251795137!2d-94.15570157344338!3d36.176051075746486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x842a312086ee6b4f!2sAlliance+Jiu-Jitsu+of+NWA!5e0!3m2!1sen!2sus!4v1536200605951" width="305" height="255" frameBorder="0" className={style.iFrameBorder} allowFullScreen></iframe>
          </div>
          <div className={style.addressPanel}>
            <h3 className={style.green}>Alliance BJJ of NWA</h3>
            <h4>1772 West Sunset Ave, Suite 2B, Springdale, Arkansas 72762</h4>
          </div>
          <div className={style.contactPanel}>
            <h3 className={style.contactHeader}>Contact Us</h3>
            <h5>479-402-4914</h5>
            <h5>alliancebjjofnwa@gmail.com</h5>
            <a href="http://www.allianceofficial.com/filiais-alliance-jiu-jitsu" target="_blank"><h5 className={style.btn}>View All Affilates</h5></a>
          </div>
        </div>
        <div className={style.copyrightPanel}>
          <h4 className={style.copyrightCopy}>Alliance Jiu-Jitsu Association. 2016 All rights reserved.</h4>
        </div>
      </div >
    )
  }
}