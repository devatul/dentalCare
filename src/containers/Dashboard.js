import '@fortawesome/fontawesome-free/css/all.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../redux/home/actions';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import DashboardPage from '../components/DashboardPage';


class Dashboard extends Component {
  state = {
    userDate:{},
    collapsed: false
  }
  componentWillMount(){
    this.props.getUserData();
  }
  render() {
    let {collapsed} = this.state;
    return (
      <div  id="app" className={`app app-home ${collapsed ? 'collapsed' : ''}`}>
        <Sidebar page="Dashboard" toggleSidebar={()=>this.setState({collapsed:!this.state.collapsed})} collapsed={collapsed} />
        <div className="main-page">
          <Header />
          <DashboardPage {...this.props}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user:state.home.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (params)=>{
      return dispatch(actions.getUserData(params))
    }
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Dashboard));
