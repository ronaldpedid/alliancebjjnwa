import React, { Component } from 'react';
import style from './panel.scss'

export class KidPanel extends React.Component {
  constructor(props) {
    super(props);
    this.handleMouseHover = this.handleMouseHover.bind(this);
    this.state = {
      isHovering: false,
      showOriginal: true
    };
  }

  handleMouseHover() {
    this.setState(this.toggleHoverState);
  }

  toggleHoverState(state) {
    return {
      isHovering: !state.isHovering,
      showOriginal: !state.showOriginal
    };
  }

  render() {
    return (
      <div
        onMouseEnter={this.handleMouseHover}
        onMouseLeave={this.handleMouseHover}>
        <div className={style.panelContainerKid}>
          {this.state.showOriginal &&

            <div className={style.panel}>
              <h4>KID & TEEN COURSES</h4>
              <h6 className={style.green}>LEARN MORE</h6></div>}

          {this.state.isHovering &&
            <div className={style.panelContainerKidHover}>
              <div className={style.panel}>
                <div className={style.infoPanel}>
                  <h6 className={style.infoHeader}>KID & TEEN COURSES</h6>
                  <div className={style.infoBody}>
                    <p>5pm-6pm-Mon-Wed Gi</p>
                    <p>5pm-6pm Thurs Nogi</p>
                  </div>
                  <p className={style.lato}>Learn to defend themselves, develop confidence and improve fitness. $1XX a month per student.</p>
                  <a href="/contact" >
                    <h6 className={style.btn}>Sign Up</h6>
                  </a>
                </div></div> </div>}
        </div>

      </div>
    )
  }
}