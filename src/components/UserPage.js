import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { FormControl, Button } from 'react-bootstrap';


class UserPage extends Component {
  render() {
    return (
      <div className="page-body-wrapper">
        <div className="user-account">
            <section className="page-title">
                <h1>{this.props.data.title}</h1>
            </section>
            <section className="form">
                <h1>General Info</h1>
                <div className="form-field">
                    <div className="field-label">Full Name</div>
                    <FormControl 
                    type="text" 
                    placeholder="Name"
                    />
                </div>
                <div className="form-field">
                    <div className="field-label">E-mail</div>
                    <FormControl 
                    type="text" 
                    placeholder="test@gamail.com"
                    />
                </div>
                <div className="form-field">
                    <div className="xfield-label">Role</div>
                    <FormControl 
                    type="text" 
                    placeholder="owner"
                    />
                </div>
                <hr/>
                <h1>Personal Info</h1>
                <div className="part-3">
                    <div className="form-field">
                            <div className="field-label">Home Phone</div>
                            <FormControl 
                            type="text" 
                            placeholder="Home Phone"
                            />
                        </div>
                        <div className="form-field">
                            <div className="field-label">Mobile Phone</div>
                            <FormControl 
                            type="text" 
                            placeholder="Mobile Phone"
                            />
                        </div>
                        <div className="form-field">
                            <div className="field-label">Work Phone</div>
                            <FormControl 
                            type="text" 
                            placeholder="Work Phone"
                            />
                        </div>
                        
                </div>
                <hr/>
                
                <h1>Address Info</h1>
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
                <div className="part-3">
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
                </div>
                <div className="submit-button">
                    <Button>Save</Button>
                </div>
            </section>
        </div>
      </div>
    );
  }
}


export default withRouter(UserPage);
