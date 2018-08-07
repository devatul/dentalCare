import {orderBy} from 'lodash';
import * as actions from '../../redux/actions';
import * as api from '../../redux/api';
import fetchAPI from '../../services';
import {invoice} from '../../constants';


export const getInvoiceData = (params) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // fetchAPI(api.invoice)
      // .then((res)=>{
      //   console.log('response', res);
      // })
      // .catch((err)=>{
      //   console.log('Error', err);
      // })
      dispatch(actions.getInvoiceRequest());
      setTimeout(()=>{
        dispatch(actions.getInvoiceSuccess(invoice))
      }, 2000);
      
    });
  };
};

export const loadMoreInvoiceData = (params) => {
  return (dispatch, getState) => {
    return new Promise((resolve, reject) => {
      // fetchAPI(api.loadMoreInvoice)
      // .then((res)=>{
      //   console.log('response', res);
      // })
      // .catch((err)=>{
      //   console.log('Error', err);
      // })
      dispatch(actions.getInvoiceRequest());
      setTimeout(()=>{
        dispatch(actions.loadMoreInvoiceDataSuccess(invoice))
      },1000);
      
    });
  };
};

export const sortInvoiceData = (params) => {
  return (dispatch, getState) => {
    console.log('params', params);
    
    return new Promise((resolve, reject) => {
      // fetchAPI(api.sortInvoice)
      // .then((res)=>{
      //   console.log('response', res);
      // })
      // .catch((err)=>{
      //   console.log('Error', err);
      // })
      // dispatch(actions.getAccountsRequest());
      let data = orderBy(params.data, [params.orderon], [params.orderby]);
      console.log('data', data);
      
      setTimeout(()=>{
        dispatch(actions.sortInvoiceSuccess(data))
      }, 1000);
      
    });
  };
};