const initialState = {
    loading: false,
    data: {}
  };
  
  const index = (state = initialState, action) => {
    switch (action.type) {
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
  
  export default index;
  