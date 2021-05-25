const GET_MY_LIST_REQUEST = 'myList/GET_MY_LIST_REQUEST';
const GET_MY_LIST_SUCCESS = 'myList/GET_MY_LIST_SUCCESS';
const GET_MY_LIST_FAILURE = 'myList/GET_MY_LIST_FAILURE';

export const ADD_ITEM_TO_MY_LIST = 'myList/ADD_ITEM_TO_MY_LIST';
export const REMOVE_ITEM_FROM_MY_LIST = 'myList/REMOVE_ITEM_FROM_MY_LIST';

export const getMyList = () => async (dispatch) => {
  dispatch({ type: GET_MY_LIST_REQUEST });
  try {
    const data = await fetch('http://localhost:8888/mylist').then((res) =>
      res.json()
    );
    dispatch({ type: GET_MY_LIST_SUCCESS, data });
  } catch (err) {
    dispatch({ type: GET_MY_LIST_FAILURE });
  }
};

export const addItemToMyList = (item) => ({
  type: ADD_ITEM_TO_MY_LIST,
  item,
});

export const removeItemFromMyList = (item) => ({
  type: REMOVE_ITEM_FROM_MY_LIST,
  item,
});

const initialState = {
  data: [],
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_MY_LIST_SUCCESS:
      return {
        data: action.data,
      };
    case REMOVE_ITEM_FROM_MY_LIST:
      return {
        data: state.data.filter((item) => item.id !== action.item.id),
      };
    case ADD_ITEM_TO_MY_LIST:
      return {
        data: [...state.data, action.item],
      };
    default:
      return state;
  }
}
