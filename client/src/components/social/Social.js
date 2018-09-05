import React, { Component } from 'react';
import style from './social.scss';


export class Social extends Component {
  render() {
    return (
      <div className={style.backgroundLanding}>
        <div className={style.contentRowVideo}>
          <div className={style.promoVideo}>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/gd0rLxjDgIQ" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
          </div>
          <div className="fb-page" data-href="https://www.facebook.com/RubalcavaJJ/" data-tabs="timeline" data-width="600" data-height="315" data-small-header="true" data-adapt-container-width="false" data-hide-cover="false" data-show-facepile="false"><blockquote cite="https://www.facebook.com/RubalcavaJJ/" className="fb-xfbml-parse-ignore"><a href="https://www.facebook.com/RubalcavaJJ/">Rubalcava Jiu-Jitsu and Fitness</a></blockquote></div>
        </div>

      </div>
    );
  }
}