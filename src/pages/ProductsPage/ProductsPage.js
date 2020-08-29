import React, { Component } from "react";
import ProductList from "../../components/ProductList/ProductList";
import ProductItems from "../../components/ProductItems/ProductItems";
import { connect } from "react-redux";
import apiCaller from "../../utils/apiCaller";
import "../../actions/index";
import * as actions from "../../actions/index";
class ProductControl extends Component {
  componentDidMount() {
    apiCaller("products", "GET", null).then((res) => {
      this.props.getAllProducts(res.data);
    });
  }

  render() {
    let { products } = this.props;

    return <ProductList>{this.showProduct(products)}</ProductList>;
  }

  showProduct = (products) => {
    let result = null;

    if (products.length > 0) {
      let { keyword } = this.props;
      if (keyword) {
        products = products.filter((product) => {
          return product.name.toLowerCase().indexOf(keyword) !== -1;
        });
      }
      result = products.map((product, index) => {
        return <ProductItems product={product} key={index} index={index} />;
      });
    }
    return result;
  };
}

const mapStateToProps = (state) => {
  return {
    products: state.products,
    keyword: state.search,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    getAllProducts: () => {
      dispatch(actions.getAllRequest());
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductControl);
