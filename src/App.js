import './styles/index.scss';

import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Loadable from 'react-loadable';
import store from './redux/store';


class App extends Component {
  constructor(){
    super()
    const Loading = () => <div>Loading...</div>;
    this.Home = Loadable({
      loader: () => import('./containers/Home'),
      loading: Loading,
    });
  }

  render() {

    return (
      <Provider store={store} key="provider">
        <Router>
          <Switch>
            <Route exact path="/" render={(props)=><this.Home {...props}  />} />
          </Switch>
        </Router>
      </Provider>
    );
  }
}

export default App;
