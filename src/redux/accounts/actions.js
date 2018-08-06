import * as actions from '../../redux/actions';
import * as api from '../../redux/api';
import fetchAPI from '../../services';
import {accounts} from '../../constants';


export const getAccountsData = (params) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // fetchAPI(api.accounts,params)
      // .then((res)=>{
      //   console.log('response', res);
      // })
      // .catch((err)=>{
      //   console.log('Error', err);
      // })
      dispatch(actions.getAccountsRequest());
      setTimeout(()=>{
        dispatch(actions.getAccountsSuccess(accounts))
      }, 2000);
      
    });
  };
};

export const loadMoreAccountsData = (params) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // fetchAPI(api.accounts,params)
      // .then((res)=>{
      //   console.log('response', res);
      // })
      // .catch((err)=>{
      //   console.log('Error', err);
      // })
      dispatch(actions.getAccountsRequest());
      setTimeout(()=>{
        dispatch(actions.loadMoreAccountsDataSuccess(accounts))
      },1000);
      
    });
  };
};

// export const sortAccountsData = (params) => {
//   return (dispatch, getState) => {
//     return new Promise((resolve, reject) => {
//       // fetchAPI(api.accounts,params)
//       // .then((res)=>{
//       //   console.log('response', res);
//       // })
//       // .catch((err)=>{
//       //   console.log('Error', err);
//       // })
//       dispatch(actions.getAccountsRequest());
//       setTimeout(()=>{
//         dispatch(actions.getAccountsSuccess(accounts))
//       }, 2000);
      
//     });
//   };
// };