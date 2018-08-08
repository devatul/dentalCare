import {orderBy} from 'lodash';
import * as actions from '../../redux/actions';
import * as api from '../../redux/api';
import fetchAPI from '../../services';
import {accounts} from '../../constants';


export const getAccountsData = (params) => {
  return (dispatch, getState) => {
    dispatch(actions.getAccountsRequest());
    return new Promise((resolve, reject) => {
      fetchAPI(api.getAccounts)
      .then((res)=>{
        console.log('response', res);
        dispatch(actions.getAccountsSuccess(res))
      })
      .catch((err)=>{
        console.log('Error', err);
      })
      // setTimeout(()=>{
      //   dispatch(actions.getAccountsSuccess(accounts))
      // }, 2000);
      
    });
  };
};

export const loadMoreAccountsData = (params) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      dispatch(actions.getAccountsRequest());
      fetchAPI(api.loadMoreAccounts(params.page,params.range))
      .then((res)=>{
        console.log('response', res);
        dispatch(actions.loadMoreAccountsDataSuccess(res))
      })
      .catch((err)=>{
        console.log('Error', err);
      })
      // setTimeout(()=>{
      //   dispatch(actions.loadMoreAccountsDataSuccess(accounts))
      // },1000);
      
    });
  };
};

export const sortAccountsData = (params) => {
  return (dispatch, getState) => {
    console.log('params', params);
    
    return new Promise((resolve, reject) => {
      fetchAPI(api.sortAccounts(params.page,params.range,params.orderon, params.orderby))
      .then((res)=>{
        console.log('response', res);
        dispatch(actions.sortAccountsSuccess(res));
      })
      .catch((err)=>{
        console.log('Error', err);
      })
      // let data = orderBy(params.data, [params.orderon], [params.orderby]);
      //   dispatch(actions.sortAccountsSuccess(data));
      
    });
  };
};

export const getAccountDetails = (params) => {
  return (dispatch, getState) => {
    dispatch(actions.getAccountsRequest());
    return new Promise((resolve, reject) => {
      fetchAPI(api.accountDetails(params.id))
      .then((res)=>{
        console.log('response', res);
        dispatch(actions.getAccountDetailsRequest(res))
      })
      .catch((err)=>{
        console.log('Error', err);
      })
      // setTimeout(()=>{
      //   dispatch(actions.getAccountsSuccess(accounts))
      // }, 2000);
      
    });
  };
};