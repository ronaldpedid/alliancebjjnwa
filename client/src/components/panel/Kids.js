import React, { Component } from 'react';
import style from './panel.scss'
import shapes from '../../../src/shapes.scss';

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
        onMouseLeave={this.handleMouseHover}
        className={style.panelContainer}>
        {this.state.showOriginal &&
          <div className={style.panel}>
            <div className={shapes.triangleUP}></div>
            <h4>KID & TEEN COURSES</h4>
            <h6><a>LEARN MORE</a></h6>
          </div>}
        {this.state.isHovering &&
          <div className={style.panel}>
            <div className={style.infoPanel}>
              <h6>KID & TEEN COURSES</h6>
              <p>5pm-6pm-Mon-Wed Gi</p>
              <p>5pm-6pm Thurs Nogi</p>
              <p>Learn to defend themselves, develop confidence and improve fitness. $1XX a month per student.</p>
              <h6 className={style.signup}><a href="/contact">Sign Up</a></h6>
            </div>
          </div>}
      </div>
    )
  }
}