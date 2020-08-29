import * as types from "../constant/ActionTypes";
import callApi from "../utils/apiCaller";

export const getAll = (products) => {
  return {
    type: types.GET_ALL_PRODUCTS,
    products: products,
  };
};

export const getAllRequest = () => {
  return (dispatch) => {
    callApi("products", "get", null).then((res) => {
      dispatch(getAll(res.data));
    });
  };
};

export const deleteProduct = (id) => {
  return {
    type: types.DELETE_PRODUCTS,
    id,
  };
};

// Gọi Api thực hiện trên server rồi mới quay về chỉnh sửa ở store redux
export const deleteProductRequest = (id) => {
  return (dispatch) => {
    callApi(`products/${id}`, "delete", null).then((res) => {
      dispatch(deleteProduct(id));
    });
  };
};

export const addProducts = (product) => {
  return {
    type: types.ADD_PRODUCTS,
    product,
  };
};

export const addProductsRequest = (product) => {
  return (dispatch) => {
    callApi("products", "post", {
      name: product.txtName,
      price: product.txtPrice,
      status: product.chkbStatus,
    }).then((res) => {
      dispatch(addProducts(product));
    });
  };
};

export const getProduct = (product) => {
  return {
    type: types.EDIT_PRODUCT,
    product,
  };
};

export const getProductRequest = (id) => {
  return (dispatch) => {
    callApi(`products/${id}`, "get", null).then((res) => {
      dispatch(getProduct(res.data));
    });
  };
};

export const updateProduct = (product) => {
  return {
    type: types.UPDATE_PRODUCT,
    product,
  };
};

export const updateProductRequest = (product) => {
  return (dispatch) => {
    callApi(`products/${product.id}`, "PUT", {
      name: product.txtName,
      price: product.txtPrice,
      status: product.chkbStatus,
    }).then(() => dispatch(updateProduct(product)));
  };
};

export const searchProduct = (keyword) => {
  return {
    type: types.SEARCH_PRODUCT,
    keyword,
  };
};
