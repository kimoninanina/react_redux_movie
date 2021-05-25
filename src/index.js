import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import App from './App';
import store from './redux/store';
import { getMyList } from './redux/modules/myList';
import { getRecommendations } from './redux/modules/recommendations';

store.dispatch(getMyList());
store.dispatch(getRecommendations());

ReactDom.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
