import { combineReducers } from 'redux';
import home from './home/reducer';
import accounts from './accounts/reducer';

export default combineReducers({
  home,
  accounts
});
