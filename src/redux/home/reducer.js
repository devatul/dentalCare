import {handleActions} from 'redux-actions';
import update from 'immutability-helper';
import {findIndex, cloneDeep, find, extend, remove} from 'lodash';
import * as constants from '../../redux/constants';


const initialState = {
    user: {
      data:      {},
      isLoading: false,
      isError:   false,
      isSuccess: false,
      message:   ''
    }
}

// user data update
const getUserRequest = (state, action) => update(state, {
  user: {
    isLoading: {$set: true},
    isError:   {$set: false},
    isSuccess: {$set: false},
    message:   {$set: ''}
  }
});
const getUserSuccess = (state, action) => update(state, {
  user: {
    data:      {$set: action.payload},
    isLoading: {$set: false},
    isError:   {$set: false},
    isSuccess: {$set: true},
    message:   {$set: ''}
  }
});

const getUserError = (state, action) => update(state, {
  user: {
    isLoading: {$set: false},
    isSuccess: {$set: false},
    isError:   {$set: true},
    message:   {$set: action.payload}
  }
});


  export default handleActions({
    [constants.GET_USER_REQUEST]:                getUserRequest,
    [constants.GET_USER_SUCCESS]:                getUserSuccess,
    [constants.GET_USER_ERROR]:                  getUserError,
  }, initialState);
  