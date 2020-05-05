const initialState = {
  loading: false,
  videos: []
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_VIDEOS":
      return {
        ...state,
        videos: action.payload || [],
      };
    case "UPDATE_STATE": {
      return {
        ...state,
        ...action.payload,
      };
    }
    default: {
      return { ...state };
    }
  }
};

export default channelReducer;
