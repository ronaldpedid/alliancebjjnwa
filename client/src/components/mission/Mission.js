import React, { Component } from 'react';
import style from './mission.scss';

export class MissionStatement extends Component {

  render() {
    return (
      <div className={style.missionContainer}>
        <div className={style.missionStatement}>
          <h1>OUR MISSION</h1>
          <p><em>
              We at Alliance Jiu-Jitsu of Northwest Arkansas are excited to bring the benefits of Brazilian Jiu-Jitsu to NWA. Whether your goal is weight loss, self defense, or high level competition. Alliance is here to help.
             
          </em></p>
        </div>
      </div>)
  }
}