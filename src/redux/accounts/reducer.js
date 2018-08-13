import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import {findIndex, cloneDeep, find, extend, remove} from 'lodash';
import * as constants from '../../redux/constants';
import {initialTableStatus} from '../../constants';

const initialState = {
    accounts: {
      data:      {
        rows:[],
        tableStatus:initialTableStatus,
      },
      isLoading: false,
      isError:   false,
      isSuccess: false,
      message:   ''
    },
    accountDetails: {
      data:      {},
      isLoading: false,
      isError:   false,
      isSuccess: false,
      message:   ''
    }
}

// user data update
const getAccountsRequest = (state, action) => update(state, {
  accounts: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const getAccountsSuccess = (state, action) => update(state, {
  accounts: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isError:   {$set: false},
    isSuccess: {$set: true},
    message:   {$set: ''}
  }
});

const getAccountsError = (state, action) => update(state, {
  accounts: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});


const loadMoreAccountsDataSuccess = (state, action) => {
  let data = cloneDeep(state.accounts.data);
  let newData = cloneDeep(action.payload);
  // let ln = data.rows.length;
  // rows.map((r, i)=>{
  //   r.id = ln + i + 1;
  //   r.name = 'ABC-'+ r.id;
  // })
  data.rows = [...data.rows, ...newData.rows];  
  data.tableStatus = newData.tableStatus;
  return update(state, {
    accounts: {
      data:      {$set: data},
      isLoading: {$set: false},
      isError:   {$set: false},
      isSuccess: {$set: true},
      message:   {$set: ''}
    }
  });
}

// const sortAccountsSuccess = (state, action) => {
//   // let data = cloneDeep(state.accounts.data);
//   // data.rows = action.payload;  
//   return update(state, {
//     accounts: {
//       // data:      {$set: data},
//       data:      {$set: action.payload},
//       isLoading: {$set: false},
//       isError:   {$set: false},
//       isSuccess: {$set: true},
//       message:   {$set: ''}
//     }
//   });
// }
const getAccountDetailsSuccess = (state, action) => update(state, {
  accountDetails: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isError:   {$set: false},
    isSuccess: {$set: true},
    message:   {$set: ''}
  }
});

  export default handleActions({
    [constants.GET_ACCOUNTS_REQUEST]: getAccountsRequest,
    [constants.GET_ACCOUNTS_SUCCESS]: getAccountsSuccess,
    [constants.GET_ACCOUNTS_ERROR]:   getAccountsError,
    [constants.LOAD_MORE_ACCOUNTS_SUCCESS]: loadMoreAccountsDataSuccess,
    // [constants.SORT_ACCOUNT_SUCCESS]: sortAccountsSuccess,
    [constants.GET_ACCOUNT_DETAILS_SUCCESS]: getAccountDetailsSuccess,
  }, initialState);
  