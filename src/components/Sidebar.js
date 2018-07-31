import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MenuItems from './MenuItems';
import {menuData, menuBottomData} from '../constants'

class Sidebar extends Component {
    state={
        collapsed: false
    }
    toggleSidebar = () => {
        this.setState({
            collapsed:!this.state.collapsed
        })
    }

  render() {
      let {collapsed} = this.state;
    return (
      <div className={`sibebar ${collapsed ? 'collapsed' : ''}`}>
        <div className="content-wrapper">
            <div className="menu">
                <MenuItems menuItems={menuData}/>
            </div>
            <div className="menu-bottom">
                <MenuItems menuItems={menuBottomData}/>
            </div>
        </div>
        <span className="expand-btn" onClick={this.toggleSidebar}>
        {collapsed ? <i class="fas fa-chevron-right"></i> : <i class="fas fa-chevron-left"></i>}
        </span>
      </div>
    );
  }
}


export default withRouter(Sidebar);
