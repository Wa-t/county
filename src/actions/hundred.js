import axios from "axios";
import { getCompleteApi } from '../utils'



export const updateState = (data) => ({
  type: "UPDATE_STATE",
  payload: {
    ...data,
  },
});


export const fetchData = () => (dispatch) => {
  axios.get(getCompleteApi('/bang?json=1'))
    .then(res => {
      if (res.status === 200) {
        dispatch({
          type: "UPDATE_STATE",
          payload: {
            data: res.data || {},
            loading: false
          },
        })
      }
    })
    .catch(function (error) {
      console.log(error);
    });
}

