import { combineReducers } from 'redux';

import navReducer  from "./reducers/nav_reducer";

const appReducer = combineReducers({
  nav: navReducer
});

export default appReducer;