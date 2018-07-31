import '@fortawesome/fontawesome-free/css/all.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import * as actions from '../redux/home/actions';
import Sidebar from '../components/Sidebar';


class Home extends Component {
  state = {
    userDate:{}
  }
  componentWillMount(){
    this.props.getUserData();
  }
  render() {
    return (
      <div  className="app app-home">
        <Sidebar />
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

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
