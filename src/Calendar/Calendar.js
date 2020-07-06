import React from 'react';
import './Calendar.css';
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
// import {
//     BrowserRouter as Router,
//     Switch,
//     Route,
//     Link,
//     useParams
// } from "react-router-dom";

class Calendar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            startingDate: "12/06/2020",
            today: {
                day: 0,
                month: 0
            },
            calendarId: '',
            calendarData: '',
            calendarTitle: '',
            calendarColor: '',
            calendarList: [
                {label: 'jan', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {label: 'feb', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {label: 'mar', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {label: 'avr', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {label: 'mai', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {label: 'jun', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {label: 'jul', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {label: 'aoü', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {label: 'sep', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {label: 'oct', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {label: 'nov', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
                {label: 'dec', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]}
            ],
            calendarPopinButton: false,
            calendarPopin: false,
        };

    }

    componentDidMount() {
        

        console.log(this.props.location)
        console.log(this.props.match.params)
        let calendarId = this.props.match.params.id


        // let tempObject = {
        //         'ID8477': {
        //             title: 'calendar1',
        //             color: 'red',
        //             startingDate: [14,2],
        //             calendarList: [
        //                 {label: 'jan', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
        //                 {label: 'feb', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]},
        //                 {label: 'mar', days: [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,2,2,2,2,2,2,2,2,2,2,2,2,2]},
        //                 {label: 'avr', days: [2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,1,2,2]},
        //                 {label: 'mai', days: [2,2,2,2,2,2,1,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2,2]},
        //                 {label: 'jun', days: [2,2,2,2,2,2,2,2,2,2,2,2,2,1,1,1,2,2,2,2,2,2,2,2,1,2,2,1,1,1]},
        //                 {label: 'jul', days: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},
        //                 {label: 'aoü', days: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},
        //                 {label: 'sep', days: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},
        //                 {label: 'oct', days: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},
        //                 {label: 'nov', days: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]},
        //                 {label: 'dec', days: [1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1]}
        //             ]
        //         }
        //     }
        // localStorage['calendars'] = JSON.stringify(tempObject)

        


        console.log(localStorage['calendars'])
        console.log(JSON.parse(localStorage['calendars']))
        console.log(JSON.parse(localStorage['calendars'])[calendarId])
        let calendarData = localStorage['calendars']
        let calendarTitle = JSON.parse(localStorage['calendars'])[calendarId].title
        let calendarColor = JSON.parse(localStorage['calendars'])[calendarId].color
        let calendarList = JSON.parse(localStorage['calendars'])[calendarId].calendarList
        this.setState({calendarId, calendarData, calendarTitle, calendarColor, calendarList})

        
        let date = new Date();
        let today = {}
        today.day = date.getDate() - 1;
        today.month = date.getMonth();
        this.setState({today})
        console.log(today)
        console.log(calendarList[today.month].days[today.day])
        if (calendarList[today.month].days[today.day] === 1) {
            setTimeout(() => {this.setState({calendarPopin: true})}, 500)
        }
    }

    updateCalendarDay(day, month) {
        let newCalendar = this.state.calendarList.slice()
        newCalendar[month].days[day] = (newCalendar[month].days[day] === 1 ? 2 : 1)
        this.setState({
            calendarList: newCalendar
        })
        // localStorage["calendars"][this.state.calendarId]
        console.log(this.state.calendarData)
        console.log(JSON.parse(this.state.calendarData))
        let newCalendarData = JSON.parse(this.state.calendarData)
        newCalendarData[this.state.calendarId].calendarList = newCalendar
        this.setState({calendarData: JSON.stringify(newCalendarData)})
        localStorage["calendars"] = JSON.stringify(newCalendarData)
    }


    render() {
        return (
            <div className="wrapper">
                <Header 
                    back="/"
                    title={this.state.title}
                />
                <div className={`main calendar ${this.state.calendarColor}`}>
                    {this.state.calendarList.map((month, mIndex) => (
                        <div className="calendar__month" key={"month-" + mIndex}>
                            <div className="calendar__month-title">{month.label}</div>
                            <div className="calendar__month-days">
                                {month.days.map((day, dIndex) => (
                                    <div 
                                        className={`calendar__day calendar__day--${day}`} 
                                        key={"day-" + dIndex} 
                                        onClick={() => {
                                            if (day > 0) {
                                                this.updateCalendarDay(dIndex, mIndex)
                                            }
                                        }} 
                                    >
                                        <p className="calendar__day-content">
                                            {dIndex + 1}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                    <div className={`calendar__popin ${this.state.calendarPopin && 'is-active'}`}>
                        <div className="calendar__popin-header">
                            <p>{this.state.calendarTitle}</p>
                        </div>
                        <div className="calendar__popin-content">
                            <div className="calendar__popin-button" onClick={() => {
                                this.updateCalendarDay(this.state.today.day, this.state.today.month)
                                this.setState({calendarPopinButton: true})
                                setTimeout(() => {
                                    this.setState({calendarPopin: false});
                                }, 500)
                            }}>
                                <div className={`calendar__popin-button-content ${this.state.calendarPopinButton && 'is-active'}`}>
                                    <p className="calendar__popin-button-day">{this.state.today.day + 1}</p>
                                    <p className="calendar__popin-button-month">{this.state.calendarList[this.state.today.month].label}</p>
                                </div>
                            </div>
                        </div>
                        <div className="calendar__popin-footer" onClick={() => {
                            this.setState({calendarPopin: false});
                        }}>
                            <p>Pas encore</p>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
            );
      }
}

export default Calendar;
