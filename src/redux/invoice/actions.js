import {orderBy} from 'lodash';
import * as actions from '../../redux/actions';
import * as api from '../../redux/api';
import fetchAPI from '../../services';
import {invoice} from '../../constants';


export const getInvoiceData = (params) => {
  return (dispatch, getState) => {
    dispatch(actions.getInvoiceRequest());
    return new Promise((resolve, reject) => {
      fetchAPI(api.getInvoice)
      .then((res)=>{
        console.log('response', res);
        dispatch(actions.getInvoiceSuccess(res));
      })
      .catch((err)=>{
        console.log('Error', err);
      })
      // setTimeout(()=>{
      //   dispatch(actions.getInvoiceSuccess(invoice))
      // }, 2000);
      
    });
  };
};

export const loadMoreInvoiceData = (params) => {
  return (dispatch, getState) => {
    dispatch(actions.getInvoiceRequest());
    return new Promise((resolve, reject) => {
      fetchAPI(api.loadMoreInvoice(params.page,params.range))
      .then((res)=>{
        console.log('response', res);
        dispatch(actions.loadMoreInvoiceDataSuccess(res))
      })
      .catch((err)=>{
        console.log('Error', err);
      })
      // setTimeout(()=>{
      //   dispatch(actions.loadMoreInvoiceDataSuccess(invoice))
      // },1000);
      
    });
  };
};

export const sortInvoiceData = (params) => {
  return (dispatch, getState) => {
    console.log('params', params);
    dispatch(actions.getInvoiceRequest());
    return new Promise((resolve, reject) => {
      fetchAPI(api.sortInvoice(params.page,params.range, params.orderon,params.orderby))
      .then((res)=>{
        console.log('response', res);
        dispatch(actions.sortInvoiceSuccess(res))
      })
      .catch((err)=>{
        console.log('Error', err);
      })
      // let data = orderBy(params.data, [params.orderon], [params.orderby]);
      // console.log('data', data);
      
      // setTimeout(()=>{
      //   dispatch(actions.sortInvoiceSuccess(data))
      // }, 1000);
      
    });
  };
};