import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { Button } from 'react-bootstrap';

class AccountDetailsPage extends Component {
  render() {
    return (
      <div className="page-body-wrapper">
        <div className="account-details">
            <div className="page-title">
                <h1><span className="link" onClick={()=>this.props.history.push('/accounts')}>Accounts</span> > {this.props.data.userName}</h1>
            </div>
            <div className="banner">
                <div className="top-bg">
                    <div className="profile-wrapper">
                        <div className="profile">
                            <span className="img"></span>
                            <span> <h3 className="page-title">{this.props.data.userName} </h3> </span>
                        </div>
                    </div>
                    <div className="rect-wrapper">
                        <span className="rect"></span>
                    </div>
                </div>
                <div className="bottom-bg"></div>
                <div className="menu-bar">
                    <span className="item active">Personal</span>
                    <span className="item">Medical Info</span>
                </div>
            </div>
            <div>
            <section className="box-wrapper col-left">
                <div className="box">
                    <div className="page-title">
                        <h3>Personal Info</h3>
                        <span className="edit">
                            <i className="fas fa-pen"></i>
                        </span>
                    </div>
                    <div className="data-display">
                        <div className="data-label">E-mail</div>
                        <div className="text">test@gmail.com</div>
                    </div>
                    <div className="data-display">
                        <div className="data-label">Street</div>
                        <div className="text">24/185, MJ Street </div>
                    </div>
                    <div className="data-display">
                        <div className="data-label">City</div>
                        <div className="text">New Yark</div>
                    </div>
                </div>
                <div className="box">
                    <div className="page-title">
                        <h3>Personal Info</h3>
                        <span className="edit">
                            <i className="fas fa-pen"></i>
                        </span>
                    </div>
                    <div className="data-display">
                        <div className="data-label">Position</div>
                        <div className="text">Home Remedies for blisters</div>
                    </div>
                    <div className="data-display">
                        <div className="data-label">University</div>
                        <div className="text">Cellulite Treatment Option </div>
                    </div>
                    <div className="data-display">
                        <div className="data-label">License number</div>
                        <div className="text">718-147-2718</div>
                    </div>
                </div>
            </section>
            <section className="box-wrapper col-right">
                <div className="box">
                    <div className="page-title">
                        <h3>Password</h3>
                        <span className="edit">
                            <i className="fas fa-pen"></i>
                        </span>
                    </div>
                    <div className="data-display">
                        <div className="data-label">Note: To change these settings you must enter a password.</div>
                        <div className="text"></div>
                    </div>
                    <div className="data-display">
                        <div className="data-label">Last Change Date</div>
                        <div className="text">18 Sep 2017 10:33AM</div>
                    </div>
                    <div className="data-display password-btn">
                        <Button >Change Password</Button>
                    </div>
                </div>
                <div className="box">
                    <div className="page-title">
                        <h3>Pay Info</h3>
                        <span className="edit">
                            <i className="fas fa-pen"></i>
                        </span>
                    </div>
                    <div className="data-display">
                        <div className="data-label">Credit Card</div>
                        <div className="text">**** **** **** **** 2747</div>
                    </div>
                    <div className="data-display">
                        <div className="data-label">Paypal</div>
                        <div className="text">harvey_ariel@yahoo.com </div>
                    </div>
                </div>
            </section>
            {/* <section className="box-wrapper">
                <div className="box">
                    <div className="page-title">
                        <h3>Personal Info</h3>
                        <span className="edit">
                            <i className="fas fa-pen"></i>
                        </span>
                    </div>
                    <div className="data-display">
                        <div className="data-label">Position</div>
                        <div className="text">Home Remedies for blisters</div>
                    </div>
                    <div className="data-display">
                        <div className="data-label">University</div>
                        <div className="text">Cellulite Treatment Option </div>
                    </div>
                    <div className="data-display">
                        <div className="data-label">License number</div>
                        <div className="text">718-147-2718</div>
                    </div>
                </div>
            </section> */}
            {/* <section className="box-wrapper">
                <div className="box">
                    <div className="page-title">
                        <h3>Pay Info</h3>
                        <span className="edit">
                            <i className="fas fa-pen"></i>
                        </span>
                    </div>
                    <div className="data-display">
                        <div className="data-label">Credit Card</div>
                        <div className="text">**** **** **** **** 2747</div>
                    </div>
                    <div className="data-display">
                        <div className="data-label">Paypal</div>
                        <div className="text">harvey_ariel@yahoo.com </div>
                    </div>
                </div>
            </section> */}
            </div>
        </div>
      </div>
    );
  }
}


export default withRouter(AccountDetailsPage);
