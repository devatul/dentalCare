import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import $ from "jquery";
import {getUserData} from '../redux/home/actions';
import {getAccountsData, loadMoreAccountsData, sortAccountsData, getAccountDetails} from '../redux/accounts/actions';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AccountsPage from '../components/AccountsPage';
import AccountDetailsPage from '../components/AccountDetailsPage';


class Accounts extends Component {
  state = {
    userDate:{},
    collapsed: false,
    accountDetails:{}
  }
  componentWillMount(){
    this.props.getUserData();
    // this.props.getAccountsData();
  }
  handleSlide = ()=>{
    $("#account-detail").toggle("slide", {direction: "left"}, 500);
    $("#account-detail-page").toggle("slide", {direction: "right"}, 500);  
  }
  pageDetails = (accountDetails)=>{
    // this.setState({accountDetails});
    this.props.getAccountDetails({id:accountDetails.id});
    this.handleSlide();
  }
  goToAccountPage = ()=>{
    // this.setState({accountDetails:{}});
    this.handleSlide();
  }
  render() {
    let {collapsed} = this.state;
    let {accountDetails} = this.props;    
    return (
      <div  id="app" className={`app app-home ${collapsed ? 'collapsed' : ''}`}>
        <Sidebar page="Accounts" toggleSidebar={()=>this.setState({collapsed:!this.state.collapsed})} collapsed={collapsed} />
        <div className="main-page">
          <Header />
          <div id="account">
              <div id="account-detail" className="page" >
                <AccountsPage {...this.props} pageDetails={this.pageDetails}/>
              </div>
              <div id="account-detail-page" className="page nodisplay">
                <AccountDetailsPage  data={accountDetails.data} onToggleSlide={this.goToAccountPage}/>
              </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user:state.home.user,
    accountsData: state.accounts.accounts,
    accountDetails: state.accounts.accountDetails
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (params)=>{
      return dispatch(getUserData(params))
    },
    getAccountsData: (params)=> {
      return dispatch(getAccountsData(params))
    },
    loadMoreAccountsData: (params)=>{
      return dispatch(loadMoreAccountsData(params));
    },
    // sortAccountsData:(params)=>{
    //   return dispatch(sortAccountsData(params));
    // },
    getAccountDetails: (params)=>{
      return dispatch(getAccountDetails(params))
    },
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Accounts));
