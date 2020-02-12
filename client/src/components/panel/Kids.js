import React, { Component } from 'react';
import style from './panel.scss'



export class GreenKidPanel extends Component {
  render() {
    return (
      <div className={style.panelContainerKidHover}>
        <div className={style.panel}>
          <div className={style.infoPanel}>
            <h6 className={style.infoHeader}>KID & TEEN COURSES</h6>
            <p className={style.lato}>Learn to defend themselves, develop confidence and improve fitness.</p>
            <a href="/contact" >
              <h6 className={style.btn}>Sign Up</h6>
            </a>
          </div></div>
      </div>
    )
  }
}



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
            <GreenKidPanel />}
        </div>

      </div>
    )
  }
}