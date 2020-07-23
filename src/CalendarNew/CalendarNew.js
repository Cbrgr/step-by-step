import React from 'react';
import './CalendarNew.css';
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';

import { Redirect } from 'react-router';

class CalendarNew extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "Faire du sport",
            color: "green",
            notifications: false,
            startingDate: [],
            isReady: false
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
        setTimeout(() => {this.setState({isReady: true})}, 100)
    }
    // isPushNotificationSupported() {
    //     return "serviceWorker" in navigator && "PushManager" in window;
    // }
    generateFormID() {
        let formID = "ID";
        let id = Math.round(Math.random()*1000000)
        console.log()
        formID += id
        return formID 
    }
    generateFormData(id) {
        let title = this.state.title
        let color = this.state.color
        let notifications = this.state.notifications
        let startingDate = [this.state.today && this.state.today.day, this.state.today && this.state.today.month]
        let calendarList = [
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
        ]
        calendarList.forEach((eM, iM, cL) => {
            if (iM === startingDate[1]) {
                eM.days.forEach((eD, iD) => {
                    console.log(iD)
                    if (iD >= startingDate[0]) {
                        cL[iM].days[iD] = 1
                    }
                })
            } else if (iM > startingDate[1]) {
                eM.days.forEach((eD, iD) => {
                    cL[iM].days[iD] = 1
                })
            }
        })
        console.log(calendarList)
        let formData = {}
        formData[id] = {
            "title": title, "color": color, "startingDate": startingDate, "notifications": notifications, "calendarList": calendarList
        }
        console.log(formData)
        console.log(localStorage["calendars"])
        // localStorage["calendars"] = ""
        if (localStorage["calendars"] && localStorage["calendars"] !== {}) {
            let newCalendarData = formData
            let oldCalendarData = JSON.parse(localStorage["calendars"])
            Object.assign(newCalendarData, oldCalendarData)
            console.log(newCalendarData)
            localStorage["calendars"] = JSON.stringify(newCalendarData)
        } else {
            localStorage["calendars"] = JSON.stringify(formData)
        }
    }

    render() {
        if (this.state.redirect) {
            return <Redirect push to={`/calendar/${this.state.formID}`} />;
        }
        return (
            <div className="wrapper">
                <Header />
                <div className="main">
                    <div className={`calendarNew ${this.state.color || "green"}`}>
                        <div className={`calendarNew__form ${this.state.isReady ? "is-ready" : ""}`}>
                            <div className="calendarNew__form-heading">
                                <div className="calendarNew__form-title">
                                    <p>Cette année je vais</p>
                                    <input placeholder="Faire du sport" onChange={e => {this.setState({title: e.target.value})}} />
                                    <p>tous les jours.</p>
                                </div>
                            </div>
                            <div className="calendarNew__form-body">
                                <div className="calendarNew__form-color">
                                    <p>Couleur :</p>
                                    <select className={this.state.color || "green"} onChange={e => {this.setState({color: e.target.value})}} defaultValue="green">
                                        <option className="red" value="red">rouge</option>
                                        <option className="purple" value="purple">violet</option>
                                        <option className="indigo" value="indigo">indigo</option>
                                        <option className="cyan" value="cyan">cyan</option>
                                        <option className="green" value="green">vert</option>
                                        <option className="yellow" value="yellow">jaune</option>
                                        <option className="orange" value="orange">orange</option>
                                    </select>
                                </div>
                                <button className="calendarNew__form-submit" onClick={() => {
                                    console.log('démarrer');
                                    console.log(this.state.today)
                                    let formID = this.generateFormID()
                                    this.generateFormData(formID)
                                    this.setState({formID,redirect: true});
                                }}>
                                    Démarrer
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        );
      }
}

export default CalendarNew;
