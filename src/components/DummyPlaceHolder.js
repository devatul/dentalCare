import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import SearchInput, {createFilter} from 'react-search-input';
import {accounts} from '../constants';

class Placeholder extends Component {
    state = {
        searchTerm: ''
    }
    searchUpdated = (term) => {
        this.setState({searchTerm: term})
    }
  render() {
    return (
      <div className="page-body-wrapper">
        <div className="accounts">
            <div className="page-title">
                <h1>{this.props.data.title}</h1>
            </div>
        </div>
      </div>
    );
  }
}


export default withRouter(Placeholder);
