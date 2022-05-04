import axios from 'axios';

export const FETCH_DATA = 'Hello-React-Front-End/src/redux/greetings/FETCH_DATA';
const URL = 'http://127.0.0.1:3000/v1/greetings';
const initialState = {
  greetings: [],
};

export const fetchData = () => (dispatch) => {
  axios.get(URL).then((response) => {
    const greetings = (response.data);

    dispatch({
      type: FETCH_DATA,
      payload: greetings,
    });
  });
};

const greetings = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      return {
        ...state,
        greetings: action.payload,
      };

    default:
      return state;
  }
};

export default greetings;
