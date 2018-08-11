import * as actions from '../../redux/actions';
import * as api from '../../redux/api';
import fetchAPI from '../../services';


export const getInvoiceData = (params) => {
  return (dispatch, getState) => {
    dispatch(actions.getInvoiceRequest());
    return new Promise((resolve, reject) => {
      fetchAPI(api.getInvoices(params))
      .then((res)=>{
        res.tableStatus = params;
        console.log('response', res);
        dispatch(actions.getInvoiceSuccess(res));
      })
      .catch((err)=>{
        console.log('Error', err);
        dispatch(actions.getInvoiceError(err));
      })      
    });
  };
};

// export const getInvoiceData = (params) => {
//   return (dispatch, getState) => {
//     dispatch(actions.getInvoiceRequest());
//     return new Promise((resolve, reject) => {
//       fetchAPI(api.getInvoice)
//       .then((res)=>{
//         console.log('response', res);
//         dispatch(actions.getInvoiceSuccess(res));
//       })
//       .catch((err)=>{
//         console.log('Error', err);
//         dispatch(actions.getInvoiceError(err));
//       })      
//     });
//   };
// };

export const loadMoreInvoiceData = (params) => {
  return (dispatch, getState) => {
    dispatch(actions.getInvoiceRequest());
    return new Promise((resolve, reject) => {
      fetchAPI(api.loadMoreInvoice(params.page,params.range))
      .then((res)=>{
        res.tableStatus = params;
        console.log('response', res);
        dispatch(actions.loadMoreInvoiceDataSuccess(res))
      })
      .catch((err)=>{
        console.log('Error', err);
        dispatch(actions.getInvoiceError(err));
      })
      
    });
  };
};

// export const sortInvoiceData = (params) => {
//   return (dispatch, getState) => {
//     dispatch(actions.getInvoiceRequest());
//     return new Promise((resolve, reject) => {
//       fetchAPI(api.sortInvoice(params.page,params.range, params.orderon,params.orderby))
//       .then((res)=>{
//         console.log('response', res);
//         dispatch(actions.sortInvoiceSuccess(res))
//       })
//       .catch((err)=>{
//         console.log('Error', err);
//         dispatch(actions.getInvoiceError(err));
//       })
//     });
//   };
// };