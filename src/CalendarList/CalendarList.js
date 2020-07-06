import React from 'react';
import './CalendarList.css';
// import Calendar from '../Calendar/Calendar.js';
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import { ReactComponent as Empty } from '../Icons/radio-unchecked.svg';
import { ReactComponent as Done } from '../Icons/checkmark.svg';
import { ReactComponent as Bin } from '../Icons/bin.svg';
import { ReactComponent as Plus } from '../Icons/plus.svg';
import {
    // BrowserRouter as Router,
    // Switch,
    // Route,
    Link,
    // useParams
} from "react-router-dom";

class CalendarList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calendarList: []
        };
    }

    componentDidMount() {
        var date = new Date();
        console.log('init')
        console.log(Date.now())
        console.log(date)
        console.log(date.getMonth())
        console.log(date.getDate())
        let today = {}
        today.day = date.getDate() - 1;
        today.month = date.getMonth();
        this.setState({today})
        console.log(today)

        if (localStorage['calendars']) {
            let tempCalendarList = JSON.parse(localStorage['calendars'])
            let calendarList = []
            Object.keys(tempCalendarList).forEach((e, i) => {
                console.log(e)
                console.log(tempCalendarList[e])
                calendarList[i] = {}
                calendarList[i].id = e
                calendarList[i].title = tempCalendarList[e].title
                calendarList[i].color = tempCalendarList[e].color
                calendarList[i].isdone = tempCalendarList[e].calendarList[today.month].days[today.day] === 2
                let total = 0
                let count = 0
                tempCalendarList[e].calendarList.forEach(m => {
                    m.days.forEach(d => {
                        total++
                        d === 2 && count++
                    })
                })
                calendarList[i].progress = (count/total*100)
                console.log("progress")
                console.log(count/total*100)
            });
            this.setState({calendarList})
        }
    }

    deleteCalendar(id) {
        let updatedCalendarState = []
        this.state.calendarList.forEach(e => {
            if (e.id !== id) {
                updatedCalendarState.push(e)
            }
        })
        let updatedCalendar = JSON.parse(localStorage['calendars'])
        delete updatedCalendar[id]
        console.log(id)
        console.log(updatedCalendar)
        localStorage['calendars'] = JSON.stringify(updatedCalendar)
        this.setState({calendarList: updatedCalendarState})
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="main">
                    <div className="calendarList">
                        {this.state.calendarList.length > 0 ? this.state.calendarList.map((e, i) => (
                            <Link to={`/calendar/${e.id}`} className="calendarList__item" key={"calendarItem-" + i}>
                                <div className={`calendarList__item-state ${e.isdone ? "calendarList__item-state--done" : ""} ${e.color}`}>
                                    <Empty className="calendarList__item-state-empty" />
                                    <Done className="calendarList__item-state-done" />
                                </div>
                                <div className="calendarList__item-content">
                                    <div className="calendarList__item-title">
                                        {e.title}
                                    </div>
                                    <div className="calendarList__item-delete" onClick={a => {
                                        a.preventDefault()
                                        this.deleteCalendar(e.id)
                                    }}>
                                        <Bin />
                                    </div>
                                    <div className="calendarList__item-percentage">
                                        <div className={`calendarList__item-percentage-progress ${e.color}`} style={{width: e.progress+"%"}}></div>
                                    </div>
                                </div>
                            </Link>
                        )) : (
                            <Link to={`/new`} className="calendarList__empty">
                                <Plus />
                                Créer votre premier calendrier
                            </Link>
                        )}
                    </div>
                </div>
                <Footer />
            </div>
        );
      }
}

export default CalendarList;
