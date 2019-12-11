import React, { Component } from 'react';
import style from './social.scss';


export class Social extends Component {
  render() {
    return (
      <div className={style.socialLanding}>
        <h1 style={{ marginTop: '5px' }} className={style.socialHeader}>HOW WE ROLL</h1>
        <div className={style.contentRowVideo}>
          <div className={style.promoVideo}>
            <iframe className={style.video} height="450px" width="450px" src="https://www.youtube.com/embed/gd0rLxjDgIQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
        </div>
      </div>
    );
  }
}