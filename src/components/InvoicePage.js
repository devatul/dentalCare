import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';
import $ from "jquery";
import {isEqual} from 'lodash';
import { Button, ButtonGroup } from 'react-bootstrap';

$.fn.visible = function(partial) {            
    var $t            = $(this),
        $w            = $(window),
        viewTop       = $w.scrollTop(),
        viewBottom    = viewTop + $w.height(),
        _top          = $t.offset().top,
        _bottom       = _top + $t.height(),
        compareTop    = partial === true ? _bottom : _top,
        compareBottom = partial === true ? _top : _bottom;
  
    return ((compareBottom <= viewBottom) && (compareTop >= viewTop));
  };

class InvoicePage extends Component {
    state = {
        searchTerm: '',
        tableStatus:{orderon:'', orderby:'',page:1,  range:10},
        selected: [],
        invoiceData:this.props.invoiceData || {},
    }
    componentWillReceiveProps(props){
        if(!isEqual(props.invoiceData, this.state.invoiceData)){
            this.setState({
                invoiceData: props.invoiceData
            })
        }
    }
    componentDidMount(){
        $(document).scroll(()=>{
            this.handleOnScroll();
        })
    }
    handleOnScroll = () => {
        let cards = $('.card');
        cards.each(function(i, el) {
            var el = $(el);
            if (el.visible(true)) {
                el.addClass("come-in"); 
            } else {
                el.removeClass("come-in");
            }
        })    
        if ((window.innerHeight + window.scrollY) === document.body.scrollHeight && this.props.invoiceData.data.rows) {
            let {tableStatus} = this.state;
            if(tableStatus.page * tableStatus.range  === this.props.invoiceData.data.rows.length){
                this.props.loadMoreInvoiceData(tableStatus);
                tableStatus.page +=1;
                this.setState({tableStatus});
            }
        }
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
        let {invoiceData}= this.props;
        let {isLoading, data} = invoiceData;
        let rows = [];
        let {selected} = this.state;
        if(data.rows && data.rows.length){
            data.rows.map((row, i)=>{
                let checked = selected.includes(row.id);
                rows.push(
                    <div key={i+1} className={`card come-in ${checked ? 'selected' : ''}`} onClick={()=>this.handleChecked(row.id)}>
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
                            <div className="f-100"><strong>Date : </strong>{row.date.d}</div>
                            <div className="f-100"><strong>Time : </strong>{row.date.t}</div>
                        </div>
                        <div className="cell">
                            <span className="dot"></span>
                            <span>{row.status}</span> 
                        </div>
                        <div className="cell">
                            <div className="f-100"><strong>Date : </strong>{row.dueDate.d}</div>
                            <div className="f-100"><strong>Time : </strong>{row.dueDate.t}</div>
                        </div>
                        <div className="cell f-30" >
                            <div className="f-100">{row.link}</div>
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
        let {tableStatus} = this.state;
        let params = {orderon:column};
        if(tableStatus.orderon === column && tableStatus.orderby === 'desc' ){
            tableStatus.orderby = 'asc';
            params.orderby = 'asc';
        }else if(tableStatus.orderon === column && tableStatus.orderby === 'asc' ){
            tableStatus.orderby = 'desc';
            params.orderby = 'desc';
        }else{
            tableStatus.orderon = column;
            tableStatus.orderby = 'asc';
            params.orderby = 'asc';
        }
        params.data = this.props.invoiceData.data.rows || []; // will remove this when integrate API
        this.props.sortInvoiceData(params);
        this.setState({tableStatus});
    }
  render() {
    let {invoiceData:{data, isLoading}}= this.props;
    let header = data.headers;
    let {tableStatus} = this.state; 
    const sortClass = name => tableStatus.orderon === name && tableStatus.orderby === 'desc' ? 'up':'down';
    return (
      <div className="page-body-wrapper">
        <div className="invoice">
            <div className="page-title">
                <h1>{data.title}</h1>
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
                    <div className={`cell`} onClick={()=>this.sortTable('date.d')}>
                        <span>Issued Date</span>
                        <span><i className={`fas fa-angle-${sortClass('date.d')}`}></i></span>
                    </div>
                    <div className={`cell`} onClick={()=>this.sortTable('status')}>
                        <span>Status</span>
                        <span><i className={`fas fa-angle-${sortClass('status')}`}></i></span>
                    </div>
                    <div className={`cell`} onClick={()=>this.sortTable('dueDate.d')}>
                        <span>Due On</span>
                        <span><i className={`fas fa-angle-${sortClass('dueDate.d')}`}></i></span>
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
            <div className="paginat">
                <ButtonGroup>
                    <Button>Previous</Button>
                    <Button>Next</Button>
                </ButtonGroup>
            </div>
            <div className="inoive-buttons">
                <ButtonGroup>
                    <Button>Send Remainder</Button>
                    <Button>Cancel Invoice</Button>
                </ButtonGroup>
            </div>
        </div>
      </div>
    );
  }
}


export default withRouter(InvoicePage);
