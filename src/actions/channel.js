import axios from "axios";

export const getVideos = (data) => (dispatch) => {
  dispatch(showLoading());
  axios({
    method: "get",
    url:
      "https://easy-mock.com/mock/5d4bee8bf2af1a3fa3b31cb7/wa-t/BookLendingMiniapp/getAllComments",
    data: {
      data,
    },
  })
    .then((res) => {
      dispatch(hideLoading());
      console.log(res);
      const {
        data: { comments = [] },
      } = res.data;
      console.log(comments);
      dispatch({
        type: "GET_VIDEOS",
        payload: [],
      });
    })
    .catch((err) => {
      console.log(err);
    });
};

export const updateState = (data) => ({
  type: "UPDATE_STATE",
  payload: {
    ...data,
  },
});

export const showLoading = () => ({
  type: "UPDATE_STATE",
  payload: {
    loading: true,
  },
});

export const hideLoading = () => ({
  type: "UPDATE_STATE",
  payload: {
    loading: false,
  },
});
