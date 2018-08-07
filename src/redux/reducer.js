import { combineReducers } from 'redux';
import home from './home/reducer';
import accounts from './accounts/reducer';
import invoice from './invoice/reducer';

export default combineReducers({
  home,
  accounts,
  invoice
});
