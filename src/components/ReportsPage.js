import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class ReportsPage extends Component {
  render() {
    return (
      <div className="page-body-wrapper">
        <div className="reports dashboard">
            <div className="page-title">
                <h1>{this.props.data.title}</h1>
            </div>
            <div className="invoice-balance">
                <div className="title">Invoices balance by Patient</div>
            </div>
            <div className="current-accounts">
                <div className="title">Number of new invoices per month</div>
            </div>
        </div>
      </div>
    );
  }
}


export default withRouter(ReportsPage);
