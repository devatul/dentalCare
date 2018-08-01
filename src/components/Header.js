import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import profileImg from '../assets/images/user-profile.png'
import {menuData, menuBottomData} from '../constants'

class Header extends Component {
  render() {
    return (
      <div className="header-wrapper">
        <div className="header">
            <div className="profile-sec">
                <span className="icon bell"><i className="far fa-bell"></i></span>
                <span className="icon">
                    <i className="fas fa-user-circle"></i>
                    {/* <img src={profileImg} /> */}
                </span>
            </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Header);
