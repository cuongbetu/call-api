import React, { Component } from "react";
import { formatMoney } from "../../constant/HelperMethod";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
class ProductItems extends Component {
  render() {
    var { product, index } = this.props;
    var statusName = product.status ? "Còn hàng" : "Đã hết hàng";
    var statusLabel = product.status
      ? "label label-primary"
      : "label label-default";
    return (
      <tbody>
        <tr>
          <td>{index + 1}</td>
          <td>{product.id}</td>
          <td>{product.name}</td>
          <td className="center">{formatMoney(product.price)}</td>
          <td className="center">
            <span className={statusLabel}>{statusName}</span>
          </td>
          <td className="center">
            <Link
              to={`products/${product.id}/edit`}
              type="button"
              className="btn btn-primary mr-5"
            >
              Sửa
            </Link>
            <button
              onClick={() => this.Delete(product.id)}
              type="button"
              className="btn btn-warning"
            >
              Xóa
            </button>
          </td>
        </tr>
      </tbody>
    );
  }

  Delete = (id) => {
    if (window.confirm("Are you sure delete this item"))
      this.props.onDelete(id);
  };
}

const mapDispatchToProps = (dispatch, props) => {
  return {
    onDelete: (id) => {
      dispatch(actions.deleteProductRequest(id));
    },
  };
};

export default connect(null, mapDispatchToProps)(ProductItems);
