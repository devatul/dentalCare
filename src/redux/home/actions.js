import * as actions from '../../redux/actions';
import * as api from '../../redux/api';
import {sidebarData, userData, projectData, tabsData} from '../../constants';


export const getUserData = () => {
    return (dispatch, getState) => {
      return new Promise((resolve, reject) => {
        dispatch(actions.getUserSuccess(userData));
      });
    };
};