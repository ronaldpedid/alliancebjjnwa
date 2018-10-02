import React, { Component } from 'react';
import style from './social.scss';


export class Social extends Component {
  render() {
    return (
      <div className={style.socialLanding}>
        <h1 className={style.socialHeader}>HOW WE ROLL</h1>
        <div className={style.contentRowVideo}>
          <div className={style.promoVideo}>
            <iframe width="320" height="320" src="https://www.youtube.com/embed/gd0rLxjDgIQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          <div className="fb-wrapper">
            <div className="fb-page" data-href="https://www.facebook.com/alliancejiujitsuofnwa/" data-tabs="timeline" data-width="1500" data-height="315" data-small-header="true" data-adapt-container-width="true" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/alliancejiujitsuofnwa/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/alliancejiujitsuofnwa/">Alliance JJ of NWA</a></blockquote></div>
          </div>

        </div>

      </div>
    );
  }
}