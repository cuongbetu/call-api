import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

const MenuLink = ({ label, to, activeOnlyWhenExact, activeClass }) => {
  return (
    <Route
      path={to}
      exact={activeOnlyWhenExact}
      children={({ match }) => {
        var active = match ? `${activeClass}` : "";
        return (
          <li className={active}>
            <Link to={to} className="my-link">
              {label}
            </Link>
          </li>
        );
      }}
    />
  );
};

const menus = [
  {
    to: "/",
    name: "Trang chủ",
    exact: true,
  },
  {
    to: "/products",
    name: "Product List",
    exact: true,
  },
];

class Menu extends Component {
  render() {
    return (
      <div className="navbar navbar-default">
        <div className="navbar-brand">Call Api</div>
        <ul className="nav navbar-nav">{this.showMenu(menus)}</ul>
      </div>
    );
  }

  showMenu = (menus) => {
    let result = null;
    if (menus.length > 0) {
      result = menus.map((menu, index) => {
        return (
          <MenuLink
            label={menu.name}
            activeOnlyWhenExact={menu.exact}
            to={menu.to}
            key={index}
            activeClass="active"
          />
        );
      });
    }

    return result;
  };
}

export default Menu;
