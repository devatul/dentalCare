import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Tabs, Tab, FormControl, Button } from 'react-bootstrap';


class SettingPage extends Component {
    state = {
        activeTab: 1,
        expend: {id:'', status: false}
    }
    handleCollapce = (id)=>{
        let {expend} = this.state;
        if(expend.id === id && expend.status){
            this.setState({expend: {id, status: false}})
        }else if(expend.id === id && !expend.status){
            this.setState({expend: {id, status: true}})
        }else{
            this.setState({expend: {id, status: true}})
        }
    }
  render() {
    let {expend} = this.state;
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
                            <div id="billing-1" className={`expendable-box ${expend.id === 'billing-1' && expend.status ? 'expanded' : ''}`}>
                                <div className="header" onClick={()=>this.handleCollapce('billing-1')}>Payment History</div>
                                <div className="content">page content</div>
                            </div>
                        </div>
                    </Tab>
                    <Tab eventKey={2} title="Deposit" onClick={()=>this.setState({activeTab:2})}>
                        <div className="deposits">
                            <section className="form">
                                <h2>Deposit information</h2>
                                <div className="disc">This is the bank account in which the current clinic should receive its funds.</div>
                                <div className="form-field">
                                    <div className="field-label">Account number</div>
                                    <FormControl 
                                    type="text" 
                                    placeholder="Account number"
                                    />
                                </div>
                                <div className="form-field">
                                    <div className="field-label">Routing number</div>
                                    <FormControl 
                                    type="text" 
                                    placeholder="Routing number"
                                    />
                                </div>
                                <div className="submit-button">
                                    <Button>Save</Button>
                                </div>
                            </section>
                        </div>
                    </Tab>
                    <Tab eventKey={3} title="Clinic Setting" onClick={()=>this.setState({activeTab:3})}>
                        <div className="clinic-setting">
                            <div id="seting-1" className={`expendable-box ${expend.id === 'seting-1' && expend.status ? 'expanded' : ''}`}>
                                <div className="header" onClick={()=>this.handleCollapce('seting-1')}>General settings</div>
                                <div className="content">
                                    <section className="form">
                                        <h2>General settings</h2>
                                        <div className="disc">Here you can personalize the clinic's view of the web app</div>
                                        <div className="form-field">
                                            <div className="field-label">Clinic Logo</div>
                                            <div className="field-label">
                                                <FormControl 
                                                type="file" 
                                                placeholder="No file choosen"
                                                />
                                            </div>
                                        </div>
                                        <div className="form-field">
                                            <div className="field-label">Color Theme</div>
                                            <FormControl componentClass="select" placeholder="select">
                                                <option value="select">select</option>
                                                <option value="red">red</option>
                                                <option value="yelow">yelow</option>
                                                <option value="green">green</option>
                                            </FormControl>
                                        </div>
                                        <div className="form-field">
                                            <div className="field-label">My Clinic</div>
                                            <FormControl 
                                            type="text" 
                                            placeholder="My Clinic"
                                            />
                                        </div>
                                        <div className="submit-button">
                                            <Button>Save</Button>
                                        </div>
                                    </section>
                                </div>
                            </div>
                            <div id="seting-2" className={`expendable-box ${expend.id === 'seting-2' && expend.status ? 'expanded' : ''}`}>
                                <div className="header" onClick={()=>this.handleCollapce('seting-2')}>Address Information</div>
                                <div className="content">
                                    <div className="address-info">
                                    <section className="form">
                                        <h2>Clinic Address Information</h2>
                                        <div className="form-field">
                                            <div className="field-label">Address 1</div>
                                            <FormControl 
                                            type="text" 
                                            placeholder="Address 1"
                                            />
                                        </div>
                                        <div className="form-field">
                                            <div className="field-label">Address 2</div>
                                            <FormControl 
                                            type="text" 
                                            placeholder="Address 2"
                                            />
                                        </div>
                                        <div className="part-4">
                                            <div className="form-field">
                                                <div className="field-label">City</div>
                                                <FormControl 
                                                type="text" 
                                                placeholder="City"
                                                />
                                            </div>
                                            <div className="form-field">
                                                <div className="field-label">State</div>
                                                <FormControl 
                                                type="text" 
                                                placeholder="state"
                                                />
                                            </div>
                                            <div className="form-field">
                                                <div className="field-label">Zip</div>
                                                <FormControl 
                                                type="text" 
                                                placeholder="Zip"
                                                />
                                            </div>
                                            <div className="form-field">
                                                <div className="field-label">Phone Number</div>
                                                <FormControl 
                                                type="text" 
                                                placeholder="Phone Number"
                                                />
                                            </div>
                                        </div>
                                        <div className="submit-button">
                                            <Button>Save</Button>
                                        </div>
                                    </section>
                                    </div>
                                </div>
                            </div>
                            <div id="seting-3" className={`expendable-box ${expend.id === 'seting-3' && expend.status ? 'expanded' : ''}`}>
                                <div className="header" onClick={()=>this.handleCollapce('seting-3')}>Payment Remainder</div>
                                <div className="content">
                                    <div className="payment-reminder">
                                        <section className="form">
                                            <h2>Payment Remainder Scheduler</h2>
                                            <div className="disc">Here you can personalize the clinic's view of the web app</div>
                                            <div className="form-field text-center">
                                                <div className="field-label">Current Task:</div>
                                                <div className="input-field">
                                                    none
                                                </div>
                                            </div>
                                            <div className="form-field">
                                                <div className="field-label">Description:</div>
                                                <div className="input-field">
                                                <FormControl 
                                                type="text" 
                                                placeholder="Description"
                                                />
                                                 </div>
                                            </div>
                                            <div className="form-field">
                                                <div className="field-label">Repeat every:</div>
                                                <div className="input-field part-2">
                                                <FormControl 
                                                type="number" 
                                                placeholder="1"
                                                />
                                                <FormControl  componentClass="select" placeholder="select">
                                                    <option value="select">select</option>
                                                    <option value="red">hour</option>
                                                    <option value="yelow">day</option>
                                                    <option value="green">week</option>
                                                    <option value="green">month</option>
                                                </FormControl>
                                                </div>
                                            </div>
                                            <div className="submit-button">
                                                <Button>Save</Button>
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                            <div id="seting-4" className={`expendable-box ${expend.id === 'seting-4' && expend.status ? 'expanded' : ''}`}>
                                <div className="header" onClick={()=>this.handleCollapce('seting-4')}>Template Manager</div>
                                <div className="content">
                                    <div className="manage-template">
                                        <Button>Manage Templates</Button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Tab>
                </Tabs>
            </section>
        </div>
      </div>
    );
  }
}


export default withRouter(SettingPage);
