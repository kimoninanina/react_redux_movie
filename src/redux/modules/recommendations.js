import { ADD_ITEM_TO_MY_LIST, REMOVE_ITEM_FROM_MY_LIST } from './myList';

const GET_RECOMMENDATIONS_REQUEST = 'myList/GET_RECOMMENDATIONS_REQUEST';
const GET_RECOMMENDATIONS_SUCCESS = 'myList/GET_RECOMMENDATIONS_SUCCESS';
const GET_RECOMMENDATIONS_FAILURE = 'myList/GET_RECOMMENDATIONS_FAILURE';

export const getRecommendations = () => async (dispatch) => {
  dispatch({ type: GET_RECOMMENDATIONS_REQUEST });
  try {
    const data = await fetch('http://localhost:8888/recommendations').then(
      (res) => res.json()
    );
    dispatch({ type: GET_RECOMMENDATIONS_SUCCESS, data });
  } catch (err) {
    dispatch({ type: GET_RECOMMENDATIONS_FAILURE });
  }
};

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_RECOMMENDATIONS_SUCCESS:
      return {
        data: action.data,
      };
    case ADD_ITEM_TO_MY_LIST:
      return {
        data: state.data.filter((item) => item.id !== action.item.id),
      };
    case REMOVE_ITEM_FROM_MY_LIST:
      return {
        data: [...state.data, action.item],
      };
    default:
      return state;
  }
}
