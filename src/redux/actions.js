import {createAction} from 'redux-actions';
import * as constants from './constants';

export const getUserRequest = createAction(constants.GET_USER_REQUEST);
export const getUserSuccess = createAction(constants.GET_USER_SUCCESS);
export const getUserError = createAction(constants.GET_USER_ERROR);

export const getAccountsRequest = createAction(constants.GET_ACCOUNTS_REQUEST);
export const getAccountsSuccess = createAction(constants.GET_ACCOUNTS_SUCCESS);
export const getAccountsError = createAction(constants.GET_ACCOUNTS_ERROR);
export const loadMoreAccountsDataSuccess = createAction(constants.LOAD_MORE_ACCOUNTS_SUCCESS);
export const sortAccountsSuccess = createAction(constants.SORT_ACCOUNT_SUCCESS);
export const getAccountDetailsRequest= createAction(constants.GET_ACCOUNT_DETAILS_SUCCESS);

export const getInvoiceRequest = createAction(constants.GET_INVOICE_REQUEST);
export const getInvoiceSuccess = createAction(constants.GET_INVOICE_SUCCESS);
export const getInvoiceError = createAction(constants.GET_INVOICE_ERROR);
export const loadMoreInvoiceDataSuccess = createAction(constants.LOAD_MORE_INVOICE_SUCCESS);
export const sortInvoiceSuccess = createAction(constants.SORT_INVOICE_SUCCESS);