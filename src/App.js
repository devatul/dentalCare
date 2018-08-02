import './styles/index.scss';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import store from './redux/store';
import {accounts, dashboard, invoice, settings,reports, userData} from './constants';

const Loading = () => <div>Loading...</div>;

const Dashboard = Loadable({
  loader: () => import('./containers/Home'),
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
const Reports = Loadable({
  loader: () => import('./containers/Home'),
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
            <Route exact path="/accounts" render={(props)=><Accounts {...props} data={accounts} />} />
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
