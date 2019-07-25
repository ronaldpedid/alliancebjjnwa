import React, { Component } from 'react';
import style from './calendar.scss';

export class Calendar extends Component {
  makeKey(index) {
    let random1 = ['1', 'b', 'q', 's', '8', '90', 'qw'];
    let roll = Math.floor(Math.random() * 7000 / index);
    return random1[roll];
  }

  renderDays(days) {
    return days.map((day, index) => {
      return <div key={this.makeKey(index)} className={style.calendarDay}>{day.day}</div>
    });
  }

  renderTimes(times) {
    return times.map((time, index) => {
      return <div key={this.makeKey(index)} className={style.calendarTime}>{time.time}</div>
    });
  }

  renderEvent(dayEvents) {
    return dayEvents.map((event, index) => {
      return <div key={this.makeKey(index)} className={style.calendarEvent}>{event.event}</div>
    });
  }
  render() {
    const days = [
      { day: 'mon' },
      { day: 'tue' },
      { day: 'wed' },
      { day: 'thu' },
      { day: 'fri' },
      { day: 'sat' },
    ];

    const times = [
      { time: '6:30am - 7:30am' },
      { time: '10am - 11am' },
      { time: '11am - 12:30pm' },
      { time: '12pm - 1pm' },
      { time: '5pm - 6pm' },
      { time: '6pm - 7pm' },
      { time: '6pm - 7:30pm' },
      { time: '7pm - 8:30pm' },
      { time: '7:30pm - 8:30pm' },
      { time: '8:30pm - 9:30pm' },
    ];
    const monday = [
      { event: 'inter/advance' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'kids ii' },
      { event: 'beginner' },
      { event: 'closed' },
      { event: 'advance' },
      { event: 'closed' },
      { event: 'beginner' },
    ];
    const tuesday = [
      { event: 'closed' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'beginner' },
      { event: 'kids i' },
      { event: 'closed' },
      { event: 'inter/advance' },
      { event: 'closed' },
      { event: 'beginner' },
      { event: 'closed' },
    ];
    const wednesday = [
      { event: 'inter/advance' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'kids ii' },
      { event: 'beginner' },
      { event: 'closed' },
      { event: 'advance' },
      { event: 'closed' },
      { event: 'beginner' },
    ];
    const thursday = [
      { event: 'closed' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'beginner' },
      { event: 'kids i' },
      { event: 'closed' },
      { event: 'inter/advance' },
      { event: 'closed' },
      { event: 'beginner' },
      { event: 'closed' },
    ];
    const friday = [
      { event: 'inter/advance' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'kids ii' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'nogi' },
      { event: 'closed' },
      { event: 'closed' },
    ];
    const saturday = [
      { event: 'closed' },
      { event: 'beginner' },
      { event: 'inter/advance' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'closed' },
      { event: 'closed' },
    ];

    return (
      <div className={style.calendarContainer}>
        <div className={style.calendarContentWrapper}>
          <div className={style.calendarHeader}>
            <h2 className={style.schedule}>schedule</h2>
          </div>
          <div className={style.calendarHeadings}>{this.renderDays(days)}</div>
          <div className={style.calendarColumnsRow}>
            <div style={{ marginTop: '0.25rem' }} className={style.calendarColumn}>
              {this.renderTimes(times)}
            </div>
            <div className={style.calendarEvents}>
              <div className={style.calendarColumn}>
                {this.renderEvent(monday)}
              </div>
              <div className={style.calendarColumn}>
                {this.renderEvent(tuesday)}
              </div>
              <div className={style.calendarColumn}>
                {this.renderEvent(wednesday)}
              </div>
              <div className={style.calendarColumn}>
                {this.renderEvent(thursday)}
              </div>
              <div className={style.calendarColumn}>
                {this.renderEvent(friday)}
              </div>
              <div className={style.calendarColumn}>
                {this.renderEvent(saturday)}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
