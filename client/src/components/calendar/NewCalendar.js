import React from "react";
import * as dateFns from "date-fns";
import './newCal.css';

class Calendar extends React.Component {
    constructor() {
        super();
        this.state = {
            currentMonth: new Date(),
            selectedDate: new Date()
        };
        this.onDateClick = this.onDateClick.bind(this);
        this.nextMonth = this.nextMonth.bind(this);
        this.prevMonth = this.prevMonth.bind(this);

    }

    renderHeader() {
        const dateFormat = "MMMM yyyy";

        return (
            <div className="header row flex-middle">
                <div className="col col-start">
                    <div className="icon" onClick={this.prevMonth}>
                        chevron_left
          </div>
                </div>
                <div className="col col-center">
                    <h2>{dateFns.format(this.state.currentMonth, dateFormat)}</h2>
                </div>
                <div className="col col-end" onClick={this.nextMonth}>
                    <div className="icon">chevron_right</div>
                </div>
            </div>
        );
    }

    renderDays() {
        const dateFormat = "iiii";
        const days = [];

        let startDate = dateFns.startOfWeek(this.state.currentMonth);

        for (let i = 0; i < 7; i++) {
            days.push(
                <div className="col col-center" key={i}>
                    {dateFns.format(dateFns.addDays(startDate, i), dateFormat)}
                </div>
            );
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
                <h4 className="schedule--item">Intermediate <span className="schedule--dates">6a - 7a</span></h4>
                <h4 className="schedule--item">Intermediate <span className="schedule--dates">
                    12p - 1p
                 </span>
                </h4>
                <h4 className="schedule--item">Teenager <span className="schedule--dates">
                    5:30p - 6:30p
                 </span>
                </h4>
                <h4 className="schedule--item">
                    Beginner
                    <span className="schedule--dates"> 6:30p - 7:30p</span>
                </h4>
                <h4 className="schedule--item">Advance <span className="schedule--dates">
                    7:30p - 9p
                 </span>
                </h4>
            </div>)
    }
    Tuesday() {
        return (
            <div className="schedule--wrapper">
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
                <span className="schedule--dates">

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
        return  (
            <div className="schedule--wrapper">
                <h4 className="schedule--item">Intermediate <span className="schedule--dates">6a - 7a</span></h4>
                <h4 className="schedule--item">Intermediate <span className="schedule--dates">
                    12p - 1p
                 </span>
                </h4>
                <h4 className="schedule--item">Teenager <span className="schedule--dates">
                    5:30p - 6:30p
                 </span>
                </h4>
                <h4 className="schedule--item">
                    Beginner
                    <span className="schedule--dates"> 6:30p - 7:30p</span>
                </h4>
                <h4 className="schedule--item">Advance <span className="schedule--dates">
                    7:30p - 9p
                 </span>
                </h4>
            </div>)
    }
    Thursday() {
        return (
            <div className="schedule--wrapper">
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
                <span className="schedule--dates">

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
                <h4 className="schedule--item">No Gi <span className="schedule--dates">

                    6a - 7a
                    </span>
                </h4>
                <h4 className="schedule--item">No Gi Advanced <span className="schedule--dates">

                    12p - 1p
                    </span>
                </h4>
                <h4 className="schedule--item">
                    Teenager <span className="schedule--dates">

                        5:30p - 6:30p
                        </span>
                </h4>
                <h4 className="schedule--item">Beginner <span className="schedule--dates">

                    6:30p - 7:30p
                    </span>
                </h4>
                <h4 className="schedule--item">No Gi Advanced <span className="schedule--dates">

                    7:30p - 9:00p
                    </span>
                </h4>
            </div>)
    }
    Saturday() {
        return (
            <div className="schedule--wrapper">
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
            case "Sun":
                return <div>No Class</div>
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
        const { currentMonth, selectedDate } = this.state;
        const monthStart = dateFns.startOfMonth(currentMonth);
        const monthEnd = dateFns.endOfMonth(monthStart);
        const startDate = dateFns.startOfWeek(monthStart);
        const endDate = dateFns.endOfWeek(monthEnd);

        const dateFormat = "d";
        const rows = [];

        let days = [];
        let day = startDate;
        let formattedDate = "";

        while (day <= endDate) {
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

    nextMonth() {
        this.setState({
            currentMonth: dateFns.addMonths(this.state.currentMonth, 1)
        });
    };

    prevMonth() {
        this.setState({
            currentMonth: dateFns.subMonths(this.state.currentMonth, 1)
        });
    };

    render() {
        return (
            <div className="calendar">
                {this.renderHeader()}
                {this.renderDays()}
                {this.renderCells()}
            </div>
        );
    }
}

export default Calendar;