import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';
import $ from "jquery";


const headers = ['Name', 'Date', 'Status'];
class AccountsPage extends Component {
    state = {
        searchTerm: '',
        tableStatus:{orderon:'', orderby:'',page:1,  range:10},
    }
    componentDidMount(){
        $(document).scroll(()=>{
            this.handleOnScroll();
        })
    }
    handleOnScroll = () => {
        if ((window.innerHeight + window.scrollY) === document.body.scrollHeight) {
            let {tableStatus} = this.state;
            this.props.loadMoreAccountsData(tableStatus);
            tableStatus.page +=1;
            this.setState({tableStatus});
        }
    }
    searchUpdated = (term) => {
        this.setState({searchTerm: term})
    }
    getTableBody = () => {
        let {accountsData}= this.props;
        let {isLoading, data} = accountsData;
        let rows = [];
        if(data.rows && data.rows.length){
            data.rows.map((row, i)=>{
                rows.push(
                    <div key={i+1} className="card">
                        <div className="cell">
                            <span><i className="fas fa-user-circle"></i></span>
                            <span>{row.name}</span>
                        </div>
                        <div className="cell">
                            <div className="f-100"><strong>Date : </strong>{row.date.d}</div>
                            <div className="f-100"><strong>Time : </strong>{row.date.t}</div>
                        </div>
                        <div className="cell j-c-s-b">
                            <span>
                                <span className="dot"></span>
                                <span>{row.status}</span> 
                            </span>
                            <span className="detail-page-link" onClick={()=>this.props.pageDetails(row)}>
                                <i className="fas fa-angle-right"></i>
                            </span>
                        </div>
                    </div>
                )
            })
        }else if(!isLoading){
            rows.push(
                <div className="card">
                    <div className="cell">
                        <span>No data available in table</span>
                    </div>
                </div>
            )
        }
        return rows;
    }
    sortTable = (column) => {
        let {tableStatus} = this.state;
        if(tableStatus.orderon === column && tableStatus.orderby === 'desc' ){
            tableStatus.orderby = 'asc';
        }else if(tableStatus.orderon === column && tableStatus.orderby === 'asc' ){
            tableStatus.orderby = 'desc';
        }else{
            tableStatus.orderon = column;
            tableStatus.orderby = 'asc';
        }
        this.props.getAccountsData(tableStatus);
        this.setState({tableStatus});
    }
  render() {
      let {accountsData}= this.props;
      let {isLoading, data} = accountsData;
      let {tableStatus} = this.state;      
    return (
      <div className="page-body-wrapper">
        <div className="accounts">
            <div className="page-title">
                <h1>Accounts</h1>
            </div>
            <div className="search-box-wrapper">
                <SearchInput className="search-input" onChange={this.searchUpdated} />
            </div>
            <div className="table-wrapper">
                <div className="content-header">
                    {headers.map((header)=>{
                        return (<div className="cell" onClick={()=>this.sortTable(header)}>
                        <span>{header}</span>
                        <span><i className={`fas fa-angle-${tableStatus.orderon === header && tableStatus.orderby === 'desc' ? 'up':'down'}`}></i></span>
                    </div>)
                    })}
                </div>
                <div className="content-body">
                {this.getTableBody()}
                {isLoading && <div className="loading"><i class="fas fa-spinner fa-spin"></i></div>}
                </div>
            </div>
        </div>
      </div>
    );
  }
}


export default withRouter(AccountsPage);
