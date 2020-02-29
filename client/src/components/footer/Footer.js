import React from 'react';
import style from './footer.scss';
import { LogoRegular } from '../logo/Logo';


export class Footer extends React.Component {
  render() {
    return (
      <div>
      <div className={style.footer}>
        <div className={style.footerContainer}>
          <div className={style.mapPanel}>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d21665.593251795137!2d-94.15570157344338!3d36.176051075746486!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x842a312086ee6b4f!2sAlliance+Jiu-Jitsu+of+NWA!5e0!3m2!1sen!2sus!4v1536200605951" width="100%" height="355" frameBorder="0" className={style.iFrameBorder} allowFullScreen></iframe>
          </div>
          <div className={style.contactPanel}>
            <div className={style.contactGroup}>
            <h5 className={style.footerLinks}><span className={style.block}></span>1772 West Sunset Ave, Suite 2B, Springdale, Arkansas 72762</h5>
            <h5 className={style.footerLinks}><span className={style.block}></span>479-402-4914</h5>
            <h5 className={style.footerLinks}><span className={style.block}></span>alliancebjjofnwa@gmail.com</h5>
            <h5 className={style.footerLinks}><span className={style.block}></span><a href="https://www.facebook.com/alliancejiujitsuofnwa/" target="_blank">Join us on Facebook</a></h5>
            <div className={style.pipeRow}>
              <h5><a href="https://www.facebook.com/alliancejiujitsuofnwa/" target="_blank">About the alliance Association</a></h5>
              <h5 className={style.pipe}> | </h5>
              <h5><a href="https://www.facebook.com/alliancejiujitsuofnwa/" target="_blank">Member Login</a></h5>
            </div>
            </div>
            <div className={style.contactGroup}>
              <LogoRegular className={style.logoBig} />
            </div>

          </div>
        </div>
        </div>
        <div className={style.copyrightPanel}>
          <h4 className={style.copyrightCopy}>Alliance Jiu-Jitsu Association. &copy; 2020 All rights reserved.</h4>
        </div>
        </div>
    )
  }
}