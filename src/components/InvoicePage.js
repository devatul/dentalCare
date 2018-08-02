import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';
import { Button, ButtonGroup } from 'react-bootstrap';

class InvoicePage extends Component {
    state = {
        searchTerm: ''
    }
    searchUpdated = (term) => {
        this.setState({searchTerm: term})
    }
    getTableBody = () => {
        let {data}= this.props;
        let rows = [];
        if(data.rows.length){
            data.rows.map((row, i)=>{
                rows.push(
                    <div key={i+1} className="card">
                        <div className="cell f-30">
                            <span>{i+1}</span>
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
        }else{
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
  render() {
    let {data}= this.props;
    let header = data.headers;
    return (
      <div className="page-body-wrapper">
        <div className="invoice">
            <div className="page-title">
                <h1>{this.props.data.title}</h1>
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
            <div className="content-header">
                <div className="cell f-30">
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
                <div className="cell">
                    <span>{header[3]}</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>
                <div className="cell">
                    <span>{header[4]}</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>
                <div className="cell f-30 text-right">
                    <span>{header[6]}</span>
                    <span><i className="fas fa-angle-down"></i></span>
                </div>
            </div>
            <div className="content-body">
                {this.getTableBody()}
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
