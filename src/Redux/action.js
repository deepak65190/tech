import { PRODCUT_SUCCESS, PRODUCT_RQUEST, PRODUCT_ERROR } from "./actionTypes";
import axios from "axios";
const get_product_request = () => {
  return { type: PRODUCT_RQUEST };
};
const get_product_success = (payload) => {
  return {
    type: PRODCUT_SUCCESS,
    payload: payload,
  };
};
const get_product_error = () => {
  return {
    type: PRODUCT_ERROR,
  };
};

const getProducts = (params) => (dispatch) => {
  let url = `http://localhost:3000/heliverse?_page=${params.page}&_limit=20`;
  if(params.q){
url = `http://localhost:3000/heliverse?q=${params.q}&_page=${params.page}&_limit=20`;
  }
  else if (params.domain && params.gender && params.page) {
    url = `http://localhost:3000/heliverse?gender=${params.gender}&available=${params.present}&domain=${params.domain}&_page=${params.page}&_limit=20`;
  } else if(params.domain){
if(params.gender){
  url = `http://localhost:3000/heliverse?_page=${params.page}&_limit=20`;
}
  }
  else if (params.domain) {
    url = `http://localhost:3000/heliverse?domain=${params.domain}&_page=${params.page}&_limit=20`;
  } else if (params.gender) {
    url = `http://localhost:3000/heliverse?gender=${params.gender}&_page=${params.page}&_limit=20`;
  } else if (params.present) {
    url = `http://localhost:3000/heliverse?available=${params.present}&_page=${params.page}&_limit=20`;
  }else if(params.domain && params.gender){
    url = `http://localhost:3000/heliverse?gender=${params.gender}&domain=${params.domain}&_page=${params.page}&_limit=20`;
  }

  dispatch(get_product_request());
  return axios
    .get(url)
    .then((re) => {
      dispatch(get_product_success(re.data));
    })
    .catch((err) => {
      dispatch(get_product_error());
    });
};
export { getProducts };
