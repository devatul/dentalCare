import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FormControl } from 'react-bootstrap';


class UserPage extends Component {
  render() {
    return (
      <div className="page-body-wrapper">
        <div className="settings">
            <section className="page-title">
                <h1>{this.props.data.title}</h1>
            </section>
            <section className="tabs-data">
                <FormControl 
                type="text" 
                placeholder="Name"
                />
            </section>
        </div>
      </div>
    );
  }
}


export default withRouter(UserPage);
