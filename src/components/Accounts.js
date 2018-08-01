import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';
import {accounts} from '../constants';

class Accounts extends Component {
    state = {
        searchTerm: ''
    }
    searchUpdated = (term) => {
        this.setState({searchTerm: term})
    }
  render() {
      let d= this.props.data.rows;
    return (
      <div className="page-body-wrapper">
        <div className="accounts">
            <div className="page-title">
                <h1>{this.props.data.title}</h1>
            </div>
            <div className="search-box-wrapper">
                <SearchInput className="search-input" onChange={this.searchUpdated} />
            </div>
            <div className="content-header">
                <div className="cell">
                    <span>Name</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>
                <div className="cell">
                    <span>Date</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>
                <div className="cell">
                    <span>Status</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>
            </div>
            <div className="content-body">
                {
                    d.map((row)=>{
                        return (
                            <div className="card">
                                <div className="cell">
                                    <span><i className="fas fa-user-circle"></i></span>
                                    <span>{row.name}</span>
                                </div>
                                <div className="cell">
                                    <div><strong>Date : </strong>{row.date}</div>
                                    <div><strong>Time : </strong>{row.time}</div>
                                </div>
                                <div className="cell">
                                    <span className="dot"></span>
                                    <span>{row.status}</span> 
                                    <span className="detail-page-link"><i className="fas fa-angle-right"></i></span>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Accounts);
