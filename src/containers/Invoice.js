import '@fortawesome/fontawesome-free/css/all.css';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import {getUserData} from '../redux/home/actions';
import {getInvoiceData, loadMoreInvoiceData, sortInvoiceData} from '../redux/invoice/actions';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import InvoicePage from '../components/InvoicePage';
import $ from "jquery";


class Invoice extends Component {
  state = {
    userDate:{},
    collapsed: false
  }
  componentWillMount(){
    this.props.getUserData();
    // this.props.getInvoiceData();
  }
  handleSlide = ()=>{
    $("#invoice-detail").toggle("slide", {direction: "left"}, 500);
    $("#invoice-detail-page").toggle("slide", {direction: "right"}, 500);  
  }
  render() {
    let {collapsed} = this.state;
    return (
      <div  id="app" className={`app app-invoice ${collapsed ? 'collapsed' : ''}`}>
        <Sidebar page="Invoices" toggleSidebar={()=>this.setState({collapsed:!this.state.collapsed})} collapsed={collapsed} />
        <div className="main-page">
          <Header />
          <div id="invoice">
              <div id="invoice-detail" className="page" >
                <InvoicePage {...this.props} pageDetails={this.handleSlide}/>
              </div>
              <div id="invoice-detail-page" className="page nodisplay">
                <div className="page-body-wrapper">
                  <div className="invoice-details">
                    <div className="page-title">
                      <h1><span className="link" onClick={this.handleSlide}>Invoice</span> > Details Page</h1>
                    </div>
                  </div>
                </div>
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
    // sortInvoiceData:(params)=>{
    //   return dispatch(sortInvoiceData(params));
    // },
  }
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Invoice));
