import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import MenuItems from './MenuItems';
import {menuData, menuBottomData} from '../constants'

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
                <div className="menu">
                    <MenuItems menuItems={menuData} onClick={this.handleClick}/>
                </div>
                <div className="menu-bottom">
                    <MenuItems menuItems={menuBottomData} onClick={this.handleClick} />
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
