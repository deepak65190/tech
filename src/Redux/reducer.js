import { PRODCUT_SUCCESS, PRODUCT_ERROR, PRODUCT_RQUEST } from "./actionTypes";
const initialState = {
  isError:false,
  data:[],
  isloading:false,
};
const reducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case PRODUCT_RQUEST: {
      return { ...state , isloading:true };
    }
    case PRODCUT_SUCCESS: {
      return { ...state, isloading: false, data: payload };
    }
    case PRODUCT_ERROR: {
      return { isError:true, isloading:false, ...state };
    }
    default:
      return state;
  }
};
export default reducer;
