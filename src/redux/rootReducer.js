import { combineReducers } from 'redux';
import myList from './modules/myList';
import recommendations from './modules/recommendations';

export default combineReducers({
  myList,
  recommendations,
});
