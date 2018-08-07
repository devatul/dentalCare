import '@fortawesome/fontawesome-free/css/all.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getUserData} from '../redux/home/actions';
import {getInvoiceData, loadMoreInvoiceData, sortInvoiceData} from '../redux/invoice/actions';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import InvoicePage from '../components/InvoicePage';


class Invoice extends Component {
  state = {
    userDate:{},
    collapsed: false
  }
  componentWillMount(){
    this.props.getUserData();
    this.props.getInvoiceData();
  }
  render() {
    let {collapsed} = this.state;
    console.log('this.props', this.props);
    
    return (
      <div  id="app" className={`app app-invoice ${collapsed ? 'collapsed' : ''}`}>
        <Sidebar toggleSidebar={()=>this.setState({collapsed:!this.state.collapsed})} collapsed={collapsed} />
        <div className="main-page">
          <Header />
          <InvoicePage {...this.props}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user:state.home.user,
    invoiceData: state.invoice.invoice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUserData: (params)=>{
      return dispatch(getUserData(params))
    },
    getInvoiceData: (params)=> {
      return dispatch(getInvoiceData(params))
    },
    loadMoreInvoiceData: (params)=>{
      return dispatch(loadMoreInvoiceData(params));
    },
    sortInvoiceData:(params)=>{
      return dispatch(sortInvoiceData(params));
    },
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Invoice));
