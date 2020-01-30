const initialState = { data: null };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "items/FETCHED": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        data: action.payload
      };
    }
    default: {
      return state;
    }
  }
}
