import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class DashboardPage extends Component {
    getTableBody = () => {
        let {data}= this.props;
        let rows = [];
        if(data.rows.length){
            data.rows.map((row, i)=>{
                rows.push(
                    <div key={i} className="card">
                        <div className="cell">
                            <span>{row.name}</span>
                        </div>
                        <div className="cell">
                            <span>{row.amount}</span> 
                        </div>
                        <div className="cell">
                            <div className="f-100"><strong>Date : </strong>{row.date.d}</div>
                            <div className="f-100"><strong>Time : </strong>{row.date.t}</div>
                        </div>
                    </div>
                )
            })
        }else{
            rows.push(
                <div className="card">
                    <div className="cell">
                        <span>There are no payments</span>
                    </div>
                </div>
            )
        }
        return rows;
    }
  render() {
    let {data}= this.props;
    let header = data.headers;
    return (
      <div className="page-body-wrapper">
        <div className="dashboard">
            <div className="page-title">
                <h1>{this.props.data.title}</h1>
            </div>
            <div className="alert">Tasks needing your attention.</div>
            <h3>Recent Payments</h3>
            <div className="content-header">
                <div className="cell">
                    <span>{header[0]}</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>
                <div className="cell">
                    <span>{header[1]}</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>
                <div className="cell">
                    <span>{header[2]}</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>
            </div>
            <div className="content-body">
                {this.getTableBody()}
            </div>
            <div className="invoice-balance">
                <div className="title">Invoices Balance</div>
            </div>
            <div className="current-accounts">
                <div className="title">Current Accounts Receivables</div>
            </div>
        </div>
      </div>
    );
  }
}


export default withRouter(DashboardPage);
