import React, { Component } from 'react';
import style from './hero.scss'


export class Hero extends Component {
  render() {
    const { aboutPage } = this.props;
    return (
      <div className={aboutPage ? style.heroContainerAbout : style.heroContainer}>

      </div>


    )
  }
}


