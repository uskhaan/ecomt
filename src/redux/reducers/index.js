import {combineReducers} from 'redux';
import authReducer from './auth-reducers/authSlice';

const root_reducer = combineReducers({
  /* your app’s top-level reducers */

  auth: authReducer,
});

const rootReducer = (state, action) => {
  if (action?.type == 'auth/logout/fulfilled') {
    state = undefined;
  }
  return root_reducer(state, action);
};

export default rootReducer;
