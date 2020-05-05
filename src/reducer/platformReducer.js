const initialState = {
  loading: false,
  articals: []
};

const channelReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_ARTICALS":
      return {
        ...state,
        articals: action.payload || [],
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
