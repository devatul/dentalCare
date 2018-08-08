import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';
import $ from "jquery";
import {isEqual} from 'lodash';
import {isScrolledIntoView} from '../helper';

class AccountsPage extends Component {
    state = {
        searchTerm: '',
        tableStatus:{orderon:'', orderby:'',page:1,  range:10},
        selected: [],
        accountsData: this.props.accountsData || {},
    }
    visited = [];
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
        $(document).scroll(()=>{
            this.handleOnScroll();
            this.animateRow();
        })
    }
    handleOnScroll = () => { 
        if ((window.innerHeight + window.scrollY) === document.body.scrollHeight && this.props.accountsData.data.rows) {
            let {tableStatus} = this.state;
            if(tableStatus.page * tableStatus.range  === this.props.accountsData.data.rows.length){
                tableStatus.page +=1;
                this.props.loadMoreAccountsData(tableStatus);
                this.setState({tableStatus});
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
        this.setState({searchTerm: term})
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
                let checked = selected.includes(row.id);
                let family = [];
                row.family && row.family.map((m,j)=>{
                    family.push(<div key={j+1} className="member">
                    <div className="cell">
                        <div className="f-100"><strong>Fist Name : </strong>{m.firstName}</div>
                        <div className="f-100"><strong>Last Name : </strong>{m.lastName}</div>
                    </div>
                </div>)
                })
                rows.push(
                    <div key={i+1} id={`row_${row.id}`} className={`card ${checked ? 'selected' : ''}`} onClick={()=>this.handleChecked(row.id)}>
                        <div className="parant">
                            <div className="cell f-2-rem w-2-rem">
                                <span className={`checkbox-wrapper ${checked ? 'show' : ''}`} >
                                    <input type="checkbox" checked={checked}/>
                                </span>
                            </div>
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
                                    <span className={`dot ${row.status}`}></span>
                                    <span>{row.status}</span> 
                                </span>
                                <span className="detail-page-link" onClick={()=>this.props.pageDetails(row)}>
                                    <i className="fas fa-angle-right"></i>
                                </span>
                            </div>
                        </div>
                        <div className="family">
                            <div className="cell f-2-rem w-2-rem"></div>
                            <div className="members">
                                {family}
                            </div>
                        </div>
                    </div>
                )
            })
        }else if(!isLoading){
            rows.push(
                <div key="no-data" className="card">
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
        this.props.sortAccountsData(tableStatus);
        this.setState({tableStatus});
    }
  render() {
      let {accountsData}= this.props;
      let {isLoading, data} = accountsData;
      let {tableStatus} = this.state;    
      const sortClass = name => tableStatus.orderon === name && tableStatus.orderby === 'desc' ? 'up':'down';
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
                    <div className={`cell f-2-rem w-2-rem checkbox-header`}></div>
                    <div className='cell' onClick={()=>this.sortTable('name')}>
                        <span>Name</span>
                        <span><i className={`fas fa-angle-${sortClass('name')}`}></i></span>
                    </div>
                    <div className='cell' onClick={()=>this.sortTable('date')}>
                        <span>Date</span>
                        <span><i className={`fas fa-angle-${sortClass('date')}`}></i></span>
                    </div>
                    <div className='cell' onClick={()=>this.sortTable('status')}>
                        <span>Status</span>
                        <span><i className={`fas fa-angle-${sortClass('status')}`}></i></span>
                    </div>
                </div>
                <div className="content-body">
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
