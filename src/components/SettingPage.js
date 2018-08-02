import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Tabs, Tab, FormControl } from 'react-bootstrap';


class SettingPage extends Component {
  render() {
    return (
      <div className="page-body-wrapper">
        <div className="settings">
            <section className="page-title">
                <h1>{this.props.data.title}</h1>
            </section>
            <section className="tabs-data">
                <Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Billing">
                        Billing
                    </Tab>
                    <Tab eventKey={2} title="Deposit">
                        Deposit
                    </Tab>
                    <Tab eventKey={3} title="Clinic Setting">
                        Clinic Setting
                    </Tab>
                </Tabs>
            </section>
        </div>
      </div>
    );
  }
}


export default withRouter(SettingPage);
