import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MenuItems from './MenuItems';
import {menuData, menuBottomData} from '../constants'
import logo from '../assets/images/logo.png';
import connected from '../assets/images/icons8-connected-48.png';

class Sidebar extends Component {
    handleClick = (link) =>{
        this.props.history.push(link)        
    }
  render() {
      let {collapsed} = this.props;
    return (
      <div className="sidebar-wrapper">
          <div className="sidebar">
            <div className="content-wrapper">
                <div className="logo-wrapper">
                    <img src={logo}/>
                </div>
                <div className="connection">
                    <div className="icon-wrapper">
                        <span className="status">
                            <span className="icon">
                                <img src={connected}/>
                            </span>
                        </span>
                    </div>
                    <div className="full-width">
                        <div className="profile-text">Gental Dental...<i class="fas fa-angle-down"></i></div>
                        <div>
                            <span className="status">
                                <span className="text">connected</span>
                            </span>
                            <span>| 5 sec ago <i class="fas fa-sync"></i></span>
                        </div>
                    </div>
                </div>
                <div className="menu">
                    <MenuItems page={this.props.page} menuItems={menuData} onClick={this.handleClick}/>
                </div>
            </div>
            <div className="menu-bottom">
                <MenuItems page={this.props.page} menuItems={menuBottomData} onClick={this.handleClick} />
            </div>
        </div>
        <div className={`resize-btn`} onClick={()=>this.props.toggleSidebar()}>
            <span className="expand-btn">
                {collapsed ? <i className="fas fa-chevron-right"></i> : <i className="fas fa-chevron-left"></i>}
            </span>
        </div>
      </div>
    );
  }
}


export default withRouter(Sidebar);
