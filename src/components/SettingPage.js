import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Tabs, Tab, FormControl, Button } from 'react-bootstrap';


class SettingPage extends Component {
    state = {
        activeTab: 1
    }
  render() {
    return (
      <div className="page-body-wrapper">
        <div className="settings">
            <section className="page-title">
                <h1>{this.props.data.title}</h1>
            </section>
            <section className="tabs-data">
                <Tabs defaultActiveKey={this.state.activeTab} id="uncontrolled-tab-example">
                    <Tab eventKey={1} title="Billing" onClick={()=>this.setState({activeTab:1})}>
                        <div className="billing">
                            <div className="button-wrapper">
                                <Button>Subscriptions</Button>
                            </div>
                            <div className="expendable-box expanded">
                                <div className="header">Payment History</div>
                                <div className="content">page content</div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="Deposit" onClick={()=>this.setState({activeTab:2})}>
                        Deposit
                    </Tab>
                    <Tab eventKey={3} title="Clinic Setting" onClick={()=>this.setState({activeTab:3})}>
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
