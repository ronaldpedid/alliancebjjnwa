import React, { Component } from 'react';
import style from './calendar.scss';

export class Calendar extends Component {
  render() {
    return (
      <div className={style.calendarContainer}>
        <div className={style.calendarContentWrapper}>
          <div className={style.calendarHeader}>
            <h2>Hours of Operation</h2>
          </div>
          <div className={style.calendarContent}>
            <div className={style.calendarRow}>
              <h3 className={style.day}>Day</h3>
              <h3 className={style.hours}>Hours</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Monday Kids Gi</h3>
              <h3 className={style.info}>5:00pm - 6:00pm</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Monday Adult Gi</h3>
              <h3 className={style.info}>6:00pm - 8:00pm</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Tuesday Executive Class</h3>
              <h3 className={style.info}>6:15am - 7:15pm</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Tuesday Kids Gi</h3>
              <h3 className={style.info}>5:00pm - 6:00pm</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Tuesday Adult Gi</h3>
              <h3 className={style.info}>6:00pm - 8:00pm</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Wednesday Kids Gi</h3>
              <h3 className={style.info}>5:00pm - 6:00pm</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Wednesday Adult Gi</h3>
              <h3 className={style.info}>6:00pm - 8:00pm</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Thursday Executive Class</h3>
              <h3 className={style.info}>6:15am - 7:15pm</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Thursday Kids No Gi</h3>
              <h3 className={style.info}>5:00pm - 6:00pm</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Thursday Adult No Gi</h3>
              <h3 className={style.info}>6:00pm - 8:00pm</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Women's Self Defense Class</h3>
              <h3 className={style.info}>6:00pm - 7:00pm</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Friday Open Mat</h3>
              <h3 className={style.info}>7:00pm - 9:00pm</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Saturday Open Mat</h3>
              <h3 className={style.info}>Call for details</h3>
            </div>
            <div className={style.calendarRow}>
              <h3 className={style.info}>Sunday Open Mat</h3>
              <h3 className={style.info}>Call for details</h3>
            </div>
          </div>
          <div className={style.calendarHeader}>
            <div className={style.additionalInfo}>
              <h3>Our Woman's self defense class is offered for free every Friday night.</h3>
            </div>
          </div>
        </div>
      </div>
    )
  }
}