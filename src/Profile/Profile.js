import React from 'react';
import './Profile.css';
import Header from '../Layout/Header.js';
import Footer from '../Layout/Footer.js';
import editLogo from '../Icons/pencil.svg';

class Profile extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            profileName: "",
            profilePicture: 'http://placekitten/200/200'
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
        console.log(localStorage["profilePicture"])
        if (localStorage["profilePicture"]) {
            this.setState({profilePicture: localStorage["profilePicture"]})
        }
        if (localStorage["profileName"]) {
            this.setState({profileName: localStorage["profileName"]})
        }
    }

    getBase64 (file) {
        return new Promise((resolve,reject) => {
            const reader = new FileReader();
            reader.onload = () => resolve(reader.result);
            reader.onerror = error => reject(error);
            reader.readAsDataURL(file);
        });
    }

    render() {
        return (
            <div className="wrapper">
                <Header />
                <div className="main">
                    <div className="profile">
                        <div className="profile__picture">
                            <div className="profile__picture-img" style={{backgroundImage: 'url('+this.state.profilePicture+')'}}>
                                {/* <div className="profile__picture-image-holder">
                                    <img className="profile__picture-image" src={this.state.profilePicture} />
                                </div> */}
                                <label class="profile__picture-edit">
                                    <img src={editLogo} alt="Profile" />
                                    <input className="profile__picture-input" type="file" accept="image/*" onChange={e => {
                                        console.log(e.target.files[0])
                                        this.getBase64(e.target.files[0]).then(base64 => {
                                            localStorage["profilePicture"] = base64;
                                            this.setState({profilePicture: base64})
                                        });
                                    }}/>
                                </label>
                            </div>
                        </div>
                        <input className="profile__name" type="text" placeholder="Name" value={this.state.profileName} onChange={e => {
                            this.setState({profileName: e.target.value})
                            localStorage["profileName"] = e.target.value;
                        }}/>
                    </div>
                </div>
                <Footer />
            </div>
        );
      }
}

export default Profile;
