import React, { Component } from 'react';
import style from './calendar.scss';
import Media from 'react-media';

export class Calendar extends Component {
  makeKey(index) {
    let random1 = ['1', 'b', 'q', 's', '8', '90', 'qw'];
    let roll = Math.floor(Math.random() * 700000 / index);
    roll.toString();
    console.log(roll.length);
    if (roll.length > 10) {
      roll = null;
      this.makeKey(index);
    } else {
      let numRoll = parseInt(roll);
      return random1[numRoll];
    }
    return random1[roll];
  }
  render() {
    return (
      <div className={style.calendarContainer}>
        <div className={style.calendarContentWrapper}>
          <Media query="(max-width: 599px)">
            {matches =>
              matches ? (
                <div id="res">
                  <img className="res-image" src="https://res.cloudinary.com/the-sage-mages/image/upload/v1565611502/A-schedulemobile350.png" alt="alliance nwa schedule" />
                </div>
              ) : (
                  <div id="res">
                    <img className="res-image" src="https://res.cloudinary.com/the-sage-mages/image/upload/v1565140660/A-schedule.png" alt="alliance nwa schedule" />
                  </div>
                )
            }
          </Media>


        </div>
      </div>
    )
  }
}
