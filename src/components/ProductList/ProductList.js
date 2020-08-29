import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { searchProduct } from "../../actions/index";
import "../../App.css";
class ProductList extends Component {
  onChange = (event) => {
    this.props.onSearch(event.target.value);
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-f col-xs-12 col-sm-6 col-md-12 col-lg-12">
            <div className="input-group mb-3 mb-10">
              <Link to="/products/add" className="btn btn-info mb-10">
                Thêm sản phẩm
              </Link>
              <input
                onChange={this.onChange}
                type="text"
                className="form-control "
                placeholder="Tìm sản phẩm"
              />
            </div>
          </div>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div className="panel panel-success">
                <div className="panel-heading">
                  <h3 className="panel-title">Danh sách sản phẩm</h3>
                </div>
                <div className="panel-body">
                  <table className="table table-bordered table-hover">
                    <thead>
                      <tr>
                        <th>Stt</th>
                        <th>ID sản phẩm</th>
                        <th>Tên</th>
                        <th>Giá</th>
                        <th>Trạng thái</th>
                        <th>Hành động</th>
                      </tr>
                    </thead>
                    {this.props.children}
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onSearch: (keyword) => {
      dispatch(searchProduct(keyword));
    },
  };
};
export default connect(null, mapDispatchToProps)(ProductList);
