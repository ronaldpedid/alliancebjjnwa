import React from "react";
import * as dateFns from "date-fns";
import './newCal.scss';
import style from './calendar.scss';
import { Link } from "react-router-dom";

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            currentMonth: new Date(),
            currentWeek: new Date(),
            selectedDate: new Date()
        };
        this.onDateClick = this.onDateClick.bind(this);


    }

    renderDays() {
        const dateFormat = "iiii";
        const days = [];
        console.log('days: ', days);

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
            if (i === 0) {
                days.pop();
            }

        }

        return <div className="days row">{days}</div>;
    }


    getFirstThree(str) {
        let newstring = str.toString().substring(0, 3);;
        return newstring;
    }

    Monday() {
        return (
            <div className="schedule--wrapper">
                <h1 className="header-underline">Monday</h1>
                <h4 className="schedule--item">Intermediate <span className="schedule--dates">6a - 7a</span></h4>
                <h4 className="schedule--item">Intermediate <span className="schedule--dates">
                    12p - 1p
                 </span>
                </h4>
                <h4 className="schedule--item">Teenager <span className="schedule--dates_t">
                    5:30p - 6:30p
                 </span>
                </h4>
                <h4 className="schedule--item">
                    Beginner
                    <span className="schedule--dates"> 6:30p - 7:30p</span>
                </h4>
                <h4 className="schedule--item">Advance <span className="schedule--dates_a">
                    7:30p - 9p
                 </span>
                </h4>
            </div>)
    }
    Tuesday() {
        return (
            <div className="schedule--wrapper">
                <h1 className="header-underline">Tuesday</h1>

                <h4 className="schedule--item">Beginner
                <span className="schedule--dates">

                        6a - 7a
                </span>
                </h4>
                <h4 className="schedule--item">Beginner
                <span className="schedule--dates">

                        12p - 1p
                </span>
                </h4>
                <h4 className="schedule--item">Kids
                <span className="schedule--dates_t">

                        5:15p - 6:00p
                </span>
                </h4>
                <h4 className="schedule--item">Intermediate
                <span className="schedule--dates">

                        6:00p - 7:00p
                </span>
                </h4>
                <h4 className="schedule--item">Beginner
                <span className="schedule--dates">

                        7:30p - 8:30p
                </span>
                </h4>
            </div>)
    }

    Wednesday() {
        return (
            <div className="schedule--wrapper">
                <h1 className="header-underline">Wednesday</h1>

                <h4 className="schedule--item">Intermediate <span className="schedule--dates">6a - 7a</span></h4>
                <h4 className="schedule--item">Intermediate <span className="schedule--dates">
                    12p - 1p
                 </span>
                </h4>
                <h4 className="schedule--item">Teenager <span className="schedule--dates_t">
                    5:30p - 6:30p
                 </span>
                </h4>
                <h4 className="schedule--item">
                    Beginner
                    <span className="schedule--dates"> 6:30p - 7:30p</span>
                </h4>
                <h4 className="schedule--item">Advance <span className="schedule--dates_a">
                    7:30p - 9p
                 </span>
                </h4>
            </div>)
    }
    Thursday() {
        return (
            <div className="schedule--wrapper">
                <h1 className="header-underline">Thursday</h1>

                <h4 className="schedule--item">Beginner
                <span className="schedule--dates">

                        6a - 7a
                </span>
                </h4>
                <h4 className="schedule--item">Beginner
                <span className="schedule--dates">

                        12p - 1p
                </span>
                </h4>
                <h4 className="schedule--item">Kids
                <span className="schedule--dates_t">

                        5:15p - 6:00p
                </span>
                </h4>
                <h4 className="schedule--item">Intermediate
                <span className="schedule--dates">

                        6:00p - 7:00p
                </span>
                </h4>
                <h4 className="schedule--item">Beginner
                <span className="schedule--dates">

                        7:30p - 8:30p
                </span>
                </h4>
            </div>)
    }
    Friday() {
        return (
            <div className="schedule--wrapper">
                <h1 className="header-underline">Friday</h1>

                <h4 className="schedule--item">No Gi <span className="schedule--dates">

                    6a - 7a
                    </span>
                </h4>
                <h4 className="schedule--item">No Gi Advanced <span className="schedule--dates_a">

                    12p - 1p
                    </span>
                </h4>
                <h4 className="schedule--item">
                    Teenager <span className="schedule--dates_t">

                        5:30p - 6:30p
                        </span>
                </h4>
                <h4 className="schedule--item">Beginner <span className="schedule--dates">

                    6:30p - 7:30p
                    </span>
                </h4>
                <h4 className="schedule--item">No Gi Advanced <span className="schedule--dates_a">

                    7:30p - 9:00p
                    </span>
                </h4>
            </div>)
    }
    Saturday() {
        return (
            <div className="schedule--wrapper">
                <h1 className="header-underline">Saturday</h1>

                <h4 className="schedule--item">Beginner <span className="schedule--dates">

                    10a - 11a
                    </span>
                </h4>
                <h4 className="schedule--item">Intermediate <span className="schedule--dates">

                    11a - 12:30p
                    </span>
                </h4>

            </div>)
    }
    appendEventsToDates(day) {
        switch (this.getFirstThree(day)) {

            case "Mon":
                return this.Monday();
            case "Tue":
                return this.Tuesday();
            case "Wed":
                return this.Wednesday();
            case "Thu":
                return this.Thursday();
            case "Fri":
                return this.Friday()
            case "Sat":
                return this.Saturday();
            default:
                console.log('default');
        }
    }
    renderCells() {
        const { currentMonth, selectedDate, currentWeek } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);

        const weekStart = dateFns.startOfWeek(currentWeek);
        const weekEnd = dateFns.endOfWeek(weekStart);


        const startDateW = dateFns.startOfWeek(weekStart);
        const endDateW = dateFns.endOfWeek(weekEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDateW;
        console.log('day: ', day);

        let formattedDate = "";

        while (day <= endDateW) {
            for (let i = 0; i < 7; i++) {

                formattedDate = dateFns.format(day, dateFormat);
                const cloneDay = day;

                days.push(
                    <div
                        className={`col cell ${
                            !dateFns.isSameMonth(day, monthStart)
                                ? "disabled"
                                : dateFns.isSameDay(day, selectedDate) ? "selected" : ""
                            }`}
                        key={day}
                        onClick={() => this.onDateClick(dateFns.parse(cloneDay))}
                    >
                        {this.appendEventsToDates(day)}
                        <span className="number">{formattedDate}</span>
                        <span className="bg">{formattedDate}</span>
                    </div>
                );
                if (this.getFirstThree(day) === "Sun") {
                    days.pop();
                }
                day = dateFns.addDays(day, 1);
            }
            rows.push(
                <div className="row" key={day}>
                    {days}
                </div>
            );
            days = [];
        }

        return <div className="body">{rows}</div>;
    }

    onDateClick(day) {
        this.setState({
            selectedDate: day
        });
    };

    render() {
        return (
            <div className={style.calWrapper}>
                <div className={style.calContentWrapper}>
                    <h1 className={style.classHeader}>CLASS SCHEDULE</h1>
                    {/* <h3 className={style.classCopy}>All classes are taught by Gullihemre "Gi" Augusto Sores</h3> */}
                    <h3 className={style.classCopy}>Kids Classes are ages: 5 - 12 | Teenager Classes are ages: 12 - 17</h3>
                    <h3 className={style.classCopy}>Beginner: All Ranks  |  Intermediate: 2 Degree White Belt and Up | Advanced: Blue Belt and Up</h3>
                </div>

                <div className={style.calRow}>
                    {this.Monday()}
                    {this.Tuesday()}
                    {this.Wednesday()}
                    {this.Thursday()}
                    {this.Friday()}
                    {this.Saturday()}
                </div>

                <div className={style.calButtonWrapper}>
                    <span className={style.borderLine} />
                    <Link to="/dist/public/images/backgrounds/Schedule.pdf" target="_blank" download>
                     <button className={style.allyBtn}>Download Schedule</button>                      
                    </Link>
                    <span className={style.borderLine} />
                </div>
            </div>
        );
    }
}

export default Calendar;