import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';

class AccountsPage extends Component {
    state = {
        searchTerm: ''
    }
    searchUpdated = (term) => {
        this.setState({searchTerm: term})
    }
  render() {
      let {data}= this.props;
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
                {data.headers.map((header)=>{
                    return (<div className="cell">
                    <span>{header}</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>)
                })}
            </div>
            <div className="content-body">
                {
                    data.rows.map((row)=>{
                        return (
                            <div className="card">
                                <div className="cell">
                                    <span><i className="fas fa-user-circle"></i></span>
                                    <span>{row.name}</span>
                                </div>
                                <div className="cell">
                                    <div className="f-100"><strong>Date : </strong>{row.date.d}</div>
                                    <div className="f-100"><strong>Time : </strong>{row.date.t}</div>
                                </div>
                                <div className="cell flex-end">
                                    <span className="dot"></span>
                                    <span>{row.status}</span> 
                                    <span className="detail-page-link" onClick={()=>this.props.history.push('/accountsdetails')}>
                                        <i className="fas fa-angle-right"></i>
                                    </span>
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


export default withRouter(AccountsPage);
