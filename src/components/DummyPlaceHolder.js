import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class Placeholder extends Component {
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
