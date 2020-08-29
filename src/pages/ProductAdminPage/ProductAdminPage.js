import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../../actions/index";
class ProductAdminPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      txtName: "",
      txtPrice: 0,
      chkbStatus: false,
    };
  }

  onChange = (e) => {
    let target = e.target;
    let name = target.name;
    let value = target.type === "checkbox" ? target.checked : target.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    let { history } = this.props;
    let { match } = this.props;
    if (!match) {
      this.props.onAdd(this.state);
      history.go("/products");
    }
    this.props.updateProduct(this.state);
    history.goBack();
  };

  componentDidMount() {
    let { match } = this.props;
    if (match) {
      let id = match.params.id;
      this.props.getProductEditing(id);
    }
  }

  // static getDerivedStateFromProps(nextProps, prevState) {
  //   return null;
  // }

  componentWillReceiveProps(nextProps) {
    console.log("Nextprops", nextProps);
    if (nextProps && nextProps.productEditing) {
      this.setState({
        id: nextProps.productEditing.id,
        txtName: nextProps.productEditing.name,
        txtPrice: nextProps.productEditing.price,
        chkbStatus: nextProps.productEditing.status,
      });
    }
  }

  render() {
    return (
      <div className="col-xs-6col-sm-6 col-md-6 col-lg-6">
        <div className="panel panel-primary">
          <div className="panel-heading">
            <h3 className="panel-title">Thêm sản phẩm</h3>
          </div>
          <div className="panel-body">
            <form onSubmit={this.onSubmit}>
              <div className="form-group">
                <label>Tên sản phẩm :</label>
                <input
                  type="text"
                  className="form-control"
                  name="txtName"
                  value={this.state.txtName}
                  placeholder="Input field"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Giá :</label>
                <input
                  type="text"
                  className="form-control"
                  name="txtPrice"
                  value={this.state.txtPrice}
                  placeholder="Input field"
                  onChange={this.onChange}
                />
              </div>
              <div className="form-group">
                <label>Tình trạng :</label>
              </div>
              <div className="checkbox">
                <label>
                  <input
                    type="checkbox"
                    value={this.state.chkbStatus}
                    name="chkbStatus"
                    onChange={this.onChange}
                    checked={this.state.chkbStatus}
                  />
                  Còn hàng
                </label>
              </div>
              <button type="submit" className="btn btn-primary">
                {this.state.id ? "Edit" : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    productEditing: state.productEditing,
  };
};

const mapDispatchToProps = (dispatch, props) => {
  return {
    onAdd: (product) => {
      dispatch(actions.addProductsRequest(product));
    },
    getProductEditing: (id) => {
      dispatch(actions.getProductRequest(id));
    },
    updateProduct: (product) => {
      dispatch(actions.updateProductRequest(product));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductAdminPage);
