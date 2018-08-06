import '@fortawesome/fontawesome-free/css/all.css';
import 'jquery-ui-bundle/jquery-ui.css';
import 'jquery-ui-bundle';
import './styles/index.scss';
import 'whatwg-fetch';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import store from './redux/store';
import {accounts, dashboard, invoice, settings,reports, userData, accountsDetalsData} from './constants';

const Loading = () => <div>Loading...</div>;

const Dashboard = Loadable({
  loader: () => import('./containers/Dashboard'),
  loading: Loading,
});
const Invoice = Loadable({
  loader: () => import('./containers/Invoice'),
  loading: Loading,
});
const Accounts = Loadable({
  loader: () => import('./containers/Accounts'),
  loading: Loading,
});
const AccountsDetails = Loadable({
  loader: () => import('./containers/AccountDetails'),
  loading: Loading,
});
const Reports = Loadable({
  loader: () => import('./containers/Reports'),
  loading: Loading,
});
const Settings = Loadable({
  loader: () => import('./containers/Setting'),
  loading: Loading,
});
const User = Loadable({
  loader: () => import('./containers/User'),
  loading: Loading,
});

class App extends Component {
  constructor(){
    super();
  }

  render() {

    return (
      <Provider store={store} key="provider">
        <Router>
          <Switch>
            <Route exact path="/" render={(props)=><Dashboard {...props} data={dashboard} />} />
            <Route exact path="/dashboard" render={(props)=><Dashboard {...props} data={dashboard} />} />
            <Route exact path="/invoice" render={(props)=><Invoice {...props} data={invoice} />} />
            <Route exact path="/accounts" render={(props)=><Accounts {...props}/>} />
            <Route exact path="/accountsdetails" render={(props)=><AccountsDetails {...props} data={accountsDetalsData} />} />
            <Route exact path="/reports" render={(props)=><Reports {...props} data={reports} />} />
            <Route exact path="/settings" render={(props)=><Settings {...props} data={settings} />} />
            <Route exact path="/user" render={(props)=><User {...props} data={userData} />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
