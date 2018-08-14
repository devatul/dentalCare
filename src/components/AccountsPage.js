import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';
import $ from "jquery";
import {isEqual, cloneDeep} from 'lodash';
import {isScrolledIntoView} from '../helper';
import {initialTableStatus} from '../constants';

class AccountsPage extends Component {
    state = {
        selected: [],
        accountsData: this.props.accountsData || {},
    }
    visited = [];
    currentPage = 1;
    componentWillMount(){
        // let {tableStatus} = this.props.accountsData.data;
        this.props.getAccountsData(initialTableStatus);
    }
    componentWillReceiveProps(props){
        if(!isEqual(props.accountsData, this.state.accountsData)){
            let i=0;
            let tm = setInterval(()=>{
                i++
                this.animateRow();
                if(i > 20){
                    clearInterval(tm)
                }
            },50);
        }
    }
    componentDidMount(){
        document.addEventListener('scroll', this.handleOnScroll);
    }
    componentWillUnmount(){
        document.removeEventListener('scroll', this.handleOnScroll);
    }
    handleOnScroll = () => { 
        this.animateRow();
        if ((window.innerHeight + window.scrollY) === document.body.scrollHeight && this.props.accountsData.data.rows) {
            let tableStatus = cloneDeep(this.props.accountsData.data.tableStatus);
            if(tableStatus.page * tableStatus.range  === this.props.accountsData.data.rows.length && this.currentPage === tableStatus.page){
                tableStatus.page +=1;
                this.currentPage += 1; 
                // this.props.getAccountsData(tableStatus);
                this.props.loadMoreAccountsData(tableStatus);
            }
        }
    }
    animateRow = ()=>{
        let visited = this.visited;
        let cards = $('.card');        
        cards.each(function(i, el) {
            var el = $(el);
            let id = el.attr('id');
            if (!visited.includes(id) && isScrolledIntoView(el)) {
                el.addClass("come-in"); 
                visited.push(id);
            }
        })
        this.visited =  visited;
    }
    searchUpdated = (term) => {
        let tableStatus = cloneDeep(this.props.accountsData.data.tableStatus);
        tableStatus.searchTerm = term;
        this.props.getAccountsData(tableStatus);
    }
    handleChecked = (id)=>{
        let {selected} = this.state;
        if(selected.includes(id)){
            var index = selected.indexOf(id);
            if (index > -1) {
                selected.splice(index, 1);
            }
        }else{
            selected.push(id);
        }
        this.setState({selected});
    }
    getTableBody = () => {
        let {accountsData}= this.props;
        let {isLoading, data} = accountsData;
        let rows = [];
        let {selected} = this.state;
        
        if(data.rows && data.rows.length){
            data.rows.map((row, i)=>{
                var amt = (row.duenow + ""),
                amtarray  = amt.split(".");
                let checked = selected.includes(row.id);
                let family = [];
                row.family && row.family.map((m,j)=>{
                    family.push(<div key={j+1} className="member">
                    <div className="cell col-name">
                        <span className="profile-image"><i className="fas fa-user-circle"></i></span>
                        <span className="lastname">{m.lastName},</span>
                        <span className="firstname">{m.firstName}</span>
                    </div>
                </div>)
                })
                let styles = {height:'58px'};
                if(checked && family.length){
                    styles.height = `${58+(42*family.length)}px`;                    
                }                
                rows.push(
                    <div key={i+1} id={`row_${row.id}`} style={styles} className={`card ${row.status} ${checked ? 'selected' : ''}`} onClick={()=>this.handleChecked(row.id)}>
                        <div className="col-checkbox">
                                <span className={`checkbox-wrapper ${checked ? 'show' : ''}`} >
                                    <input type="checkbox" checked={checked}/>
                                </span>
                        </div>
                        <div className="row-content">
                            <div className="parant">
                                <div className="cell">
                                    <div className="col-name">
                                        <span className="profile-image"><i className="fas fa-user-circle"></i></span>
                                        <span className="lastname">{row.lastname},</span>
                                        <span className="firstname">{row.firstname}</span>
                                    </div>
                                </div>
                                <div className="cell col-amount">
                                    <div className="col-amount">
                                        <span className="doller">${amtarray[0]}.</span>
                                        <span className="cent">{amtarray[1]}</span>
                                    </div>
                                </div>
                                <div className="cell col-status">
                                    <span className={`status ${row.status}`}>{row.status}</span> 
                                    <span className={`date`}>{row.date}</span>
                                </div>
                            </div>
                            <div className="family">
                                <div className="cell f-1-rem w-1-rem"></div>
                                <div className="members">
                                    {family}
                                </div>
                            </div>
                        </div>
                        <div className="detail-page-link" onClick={()=>this.props.pageDetails(row)}>
                            <i className="fas fa-angle-right"></i>
                        </div>
                    </div>
                )
            })
        }else if(!isLoading){
            rows.push(
                <div key="no-data" className="card no-data-card p-20">
                    <div className="cell">
                        <span>No data available in table</span>
                    </div>
                </div>
            )
        }
        return rows;
    }
    sortTable = (column) => {
        let tableStatus = cloneDeep(this.props.accountsData.data.tableStatus);
        if(tableStatus.orderon === column && tableStatus.orderby === 'desc' ){
            tableStatus.orderby = 'asc';
        }else if(tableStatus.orderon === column && tableStatus.orderby === 'asc' ){
            tableStatus.orderby = 'desc';
        }else{
            tableStatus.orderon = column;
            tableStatus.orderby = 'asc';
        }
        this.props.getAccountsData(tableStatus);
    }
  render() {
      let {isLoading, data}= this.props.accountsData;
      let tableStatus = data.tableStatus;    
      const sortClass = name => tableStatus.orderon === name && tableStatus.orderby === 'desc' ? 'up':'down';
    return (
      <div className="page-body-wrapper">
        <div className="accounts">
            <div className="page-title">
                <h1>Accounts</h1>
            </div>
            <div className="search-box-wrapper">
                <SearchInput className="search-input" placeholder="Search accounts by Patient or Status" onChange={this.searchUpdated} />
            </div>
            <div className="table-wrapper">
                <div className="table-header">
                    <div className={`col-checkbox`}>
                        <span className={`checkbox-wrapper`} >
                            <input type="checkbox" checked={false}/>
                        </span>
                    </div>
                    <div className="headers">
                        <div className='cell' onClick={()=>this.sortTable('name')}>
                            <span>Patient</span>
                            <span><i className={`fas fa-angle-${sortClass('name')}`}></i></span>
                        </div>
                        <div className='cell' onClick={()=>this.sortTable('date')}>
                            <span>Due Now</span>
                            <span><i className={`fas fa-angle-${sortClass('date')}`}></i></span>
                        </div>
                        <div className='cell' onClick={()=>this.sortTable('status')}>
                            <span>Status</span>
                            <span><i className={`fas fa-angle-${sortClass('status')}`}></i></span>
                        </div>
                    </div>
                    <div className="detail-page-link">
                        <i className="fas fa-angle-right"></i>
                    </div>
                </div>
                <div className="table-body">
                {this.getTableBody()}
                {isLoading && <div className="loading"><i className="fas fa-spinner fa-spin"></i></div>}
                </div>
            </div>
        </div>
      </div>
    );
  }
}


export default withRouter(AccountsPage);
