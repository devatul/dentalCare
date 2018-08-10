import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';
import $ from "jquery";
import {isEqual, cloneDeep} from 'lodash';
import { Button, ButtonGroup } from 'react-bootstrap';
import {isScrolledIntoView} from '../helper';

class InvoicePage extends Component {
    state = {
        selected: [],
        invoiceData:this.props.invoiceData || {},
    }
    visited = [];
    componentWillMount(){
        let {tableStatus} = this.props.invoiceData.data;
        this.props.getInvoiceData(tableStatus);
    }
    componentWillReceiveProps(props){
        if(!isEqual(props.invoiceData, this.state.invoiceData)){
            this.setState({
                invoiceData: props.invoiceData
            })
            let i=0;
            let tm = setInterval(()=>{
                i++
                this.animateRow();
                if(i > 10){
                    clearInterval(tm)
                }
            },100);
        }

    }
    componentDidMount(){
        $(document).scroll(()=>{
            this.handleOnScroll();
            this.animateRow();
        })
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
        this.visited = visited;
    }
    handleOnScroll = () => { 
        if ((window.innerHeight + window.scrollY) === document.body.scrollHeight && this.props.invoiceData.data.rows) {
            let tableStatus = cloneDeep(this.props.invoiceData.data.tableStatus);
            if(tableStatus.page * tableStatus.range  === this.props.invoiceData.data.rows.length){
                tableStatus.page +=1;
                this.props.getInvoiceData(tableStatus);
            }
        }
    }
    searchUpdated = (term) => {
        let tableStatus = cloneDeep(this.props.invoiceData.data.tableStatus);
        tableStatus.searchTerm = term;
        this.props.getInvoiceData(tableStatus);
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
        let {invoiceData}= this.props;
        let {isLoading, data} = invoiceData;
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
                    <div key={i+1} id={`row_${row.id}`} className={`card  ${checked ? 'selected' : ''}`} onClick={()=>this.handleChecked(row.id)}>
                        <div className="parant">
                            {/* <div className="cell f-30">
                                <span>{i+1}</span>
                            </div> */}
                            <div className="cell f-10">
                                <span className={`checkbox-wrapper ${checked ? 'show' : ''}`} >
                                    <input type="checkbox" checked={checked}/>
                                </span>
                            </div>
                            <div className="cell">
                                <span>{row.name}</span>
                            </div>
                            <div className="cell">
                                <div className="f-100"><strong>Date : </strong>{row.issuedate.d}</div>
                                <div className="f-100"><strong>Time : </strong>{row.issuedate.t}</div>
                            </div>
                            <div className="cell">
                                <span className="dot"></span>
                                <span>{row.status}</span> 
                            </div>
                            <div className="cell">
                                <div className="f-100"><strong>Date : </strong>{row.dueon.d}</div>
                                <div className="f-100"><strong>Time : </strong>{row.dueon.t}</div>
                            </div>
                            <div className="cell f-30" >
                                <div className="f-100">{row.link}</div>
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
                <div key={'No-Date'} className="card">
                    <div className="cell">
                        <span>No data available in table</span>
                    </div>
                </div>
            )
        }
        return rows;
    }
    sortTable = (column) => {
        let tableStatus = cloneDeep(this.props.invoiceData.data.tableStatus);
        if(tableStatus.orderon === column && tableStatus.orderby === 'desc' ){
            tableStatus.orderby = 'asc';
        }else if(tableStatus.orderon === column && tableStatus.orderby === 'asc' ){
            tableStatus.orderby = 'desc';
        }else{
            tableStatus.orderon = column;
            tableStatus.orderby = 'asc';
        }
        this.props.getInvoiceData(tableStatus);
    }
  render() {
    let {data, isLoading}= this.props.invoiceData;
    let tableStatus = data.tableStatus;
    const sortClass = name => tableStatus.orderon === name && tableStatus.orderby === 'desc' ? 'up':'down';
    return (
      <div className="page-body-wrapper">
        <div className="invoice">
            <div className="page-title">
                <h1>Invoices</h1>
            </div>
            <div className="range-wrapper">
                <ButtonGroup>
                    <Button>0-30 days</Button>
                    <Button>30 - 60 days</Button>
                    <Button>60-90 days</Button>
                    <Button>All time</Button>
                </ButtonGroup>
            </div>
            <div className="summary">
                <div className="total">
                    <div className="amt">$0</div>
                    <div className="text">billed</div>
                </div>
                <div className="total">
                    <div className="amt">$0</div>
                    <div className="text">collected</div>
                </div>
                <div className="total">
                    <div className="amt">$0</div>
                    <div className="text">outstanding</div>
                </div>
            </div>
            <div className="inoive-buttons">
                <ButtonGroup>
                    <Button>Send Remainder</Button>
                    <Button>Cancel Invoice</Button>
                </ButtonGroup>
            </div>
            <div className="search-box-wrapper">
                <SearchInput className="search-input" onChange={this.searchUpdated} />
            </div>
            <div className="table-wrapper">
                <div className="content-header">
                    <div className={`cell f-10`}></div>
                    <div className={`cell`} onClick={()=>this.sortTable('name')}>
                        <span>Patient</span>
                        <span><i className={`fas fa-angle-${sortClass('name')}`}></i></span>
                    </div>
                    <div className={`cell`} onClick={()=>this.sortTable('issuedate.d')}>
                        <span>Issued Date</span>
                        <span><i className={`fas fa-angle-${sortClass('issuedate.d')}`}></i></span>
                    </div>
                    <div className={`cell`} onClick={()=>this.sortTable('status')}>
                        <span>Status</span>
                        <span><i className={`fas fa-angle-${sortClass('status')}`}></i></span>
                    </div>
                    <div className={`cell`} onClick={()=>this.sortTable('dueon.d')}>
                        <span>Due On</span>
                        <span><i className={`fas fa-angle-${sortClass('dueon.d')}`}></i></span>
                    </div>
                    <div className={`cell f-30 text-right`}>
                        <span></span>
                        <span><i className="fas fa-angle-down"></i></span>
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


export default withRouter(InvoicePage);
