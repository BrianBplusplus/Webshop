const initialState = { data: [] };

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case "cart/FETCHED": {
      // => Ask yourself: what is action.payload?
      return {
        ...state,
        data: [...state.data, action.payload]
      };
    }
    default: {
      return state;
    }
  }
}
