import React, { Component } from 'react';
import style from './calendar.scss';
import Media from 'react-media';
export class Calendar extends Component {
  makeKey(index) {
    let random1 = ['1', 'b', 'q', 's', '8', '90', 'qw'];
    let roll = Math.floor(Math.random() * 7000 / index);
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
                  <img className="res-image" src="https://res.cloudinary.com/the-sage-mages/image/upload/v1565217905/A-schedulemobile.png" alt="alliance nwa schedule" />
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
