import {createAction} from 'redux-actions';
import * as constants from './constants';

export const getUserRequest = createAction(constants.GET_USER_REQUEST);
export const getUserSuccess = createAction(constants.GET_USER_SUCCESS);
export const getUserError = createAction(constants.GET_USER_ERROR);

export const getAccountsRequest = createAction(constants.GET_ACCOUNTS_REQUEST);
export const getAccountsSuccess = createAction(constants.GET_ACCOUNTS_SUCCESS);
export const getAccountsError = createAction(constants.GET_ACCOUNTS_ERROR);
export const loadMoreAccountsDataSuccess = createAction(constants.LOAD_MORE_ACCOUNTS_SUCCESS);