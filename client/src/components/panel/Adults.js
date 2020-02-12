import React, { Component } from 'react';
import style from './panel.scss';
import { Link } from 'react-router-dom';



export class GreenAdultPanel extends Component {
  render() {
    return (
      <div className={style.panelContainerAdultHover}>
        <div className={style.panel}>
          <div className={style.infoPanel}>
            <h6 className={style.infoHeader}>ADULT COURSES</h6>
            <p className={style.lato}>Learn to defend yourself, develop confidence and improve fitness.</p>
            <a href="/contact" >
              <h6 className={style.btn}>Sign Up</h6>
            </a>
          </div></div>
      </div>
    )
  }
}


export class AdultPanel extends React.Component {
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
      <div>
        <div className={style.panelContainerAdult}>
          <div className={style.panel}>
            <h2>Drop in and start learning</h2>
            <br />
            <Link to="/dist/public/images/backgrounds/Schedule.pdf" target="_blank" download><h4 className={style.infoHeader}>Download Schedule</h4></Link>
          </div>
        </div>
      </div>
    )
  }
}