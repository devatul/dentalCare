import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MenuItems from './MenuItems';
import {menuData, menuBottomData} from '../constants'

class Sidebar extends Component {
  render() {
      let {collapsed} = this.props;
    return (
      <div className="sidebar-wrapper">
          <div className="sibebar">
            <div className="content-wrapper">
                <div className="menu">
                    <MenuItems menuItems={menuData} onClick={(link)=>this.props.history.push(link)}/>
                </div>
                <div className="menu-bottom">
                    <MenuItems menuItems={menuBottomData} onClick={(link)=>this.props.history.push(link)}/>
                </div>
            </div>
        </div>
        <div className={`resize-btn`} onClick={()=>this.props.toggleSidebar()}>
            <span className="expand-btn">
                {collapsed ? <i class="fas fa-chevron-right"></i> : <i class="fas fa-chevron-left"></i>}
            </span>
        </div>
      </div>
    );
  }
}


export default withRouter(Sidebar);
