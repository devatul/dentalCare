import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
// import {findIndex, cloneDeep, find, extend, remove} from 'lodash';
import * as constants from '../../redux/constants';


const initialState = {
    invoice: {
      data:      {
        rows:[],
        tableStatus:{page:1,  range:10, orderon:'', orderby:'', searchTerm:''},
      },
      isLoading: false,
      isError:   false,
      isSuccess: false,
      message:   ''
    }
}

// user data update
const getInvoiceRequest = (state, action) => update(state, {
  invoice: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});

const getInvoiceSuccess = (state, action) => update(state, {
  invoice: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isError:   {$set: false},
    isSuccess: {$set: true},
    message:   {$set: ''}
  }
});

const getInvoicesError = (state, action) => update(state, {
  invoice: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});


// const loadMoreInvoiceDataSuccess = (state, action) => {
//   let data = cloneDeep(state.invoice.data);
//   let rows = cloneDeep(action.payload.rows);
//   let ln = data.rows.length;
//   rows.map((r, i)=>{
//     r.id = ln + i + 1;
//     r.name = 'ABC-'+ r.id;
//   })
//   data.rows = [...data.rows, ...rows];  
//   return update(state, {
//     invoice: {
//       data:      {$set: data},
//       isLoading: {$set: false},
//       isError:   {$set: false},
//       isSuccess: {$set: true},
//       message:   {$set: ''}
//     }
//   });
// }

// const sortInvoiceSuccess = (state, action) => {
//   // let data = cloneDeep(state.invoice.data);
//   // data.rows = action.payload;  
//   return update(state, {
//     invoice: {
//       // data:      {$set: data},
//       data:      {$set: action.payload},
//       isLoading: {$set: false},
//       isError:   {$set: false},
//       isSuccess: {$set: true},
//       message:   {$set: ''}
//     }
//   });
// }
  export default handleActions({
    [constants.GET_INVOICE_REQUEST]: getInvoiceRequest,
    [constants.GET_INVOICE_SUCCESS]: getInvoiceSuccess,
    [constants.GET_INVOICE_ERROR]:   getInvoicesError,
    // [constants.LOAD_MORE_INVOICE_SUCCESS]: loadMoreInvoiceDataSuccess,
    // [constants.SORT_INVOICE_SUCCESS]: sortInvoiceSuccess,
  }, initialState);
  