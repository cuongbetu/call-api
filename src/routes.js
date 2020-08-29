import React from "react";
import HomePage from "./pages/HomePage/HomePage";
import NotFoundPage from "./pages/NotFoundPage/Page404";
import ProductsPage from "./pages/ProductsPage/ProductsPage";
import ProductAdminPage from "./pages/ProductAdminPage/ProductAdminPage";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/products",
    exact: true,
    main: () => <ProductsPage />,
  },
  {
    path: "/products/add",
    exact: false,
    main: ({ history }) => <ProductAdminPage history={history} />,
  },
  {
    path: "/products/:id/edit",
    exact: false,
    main: ({ match, history }) => (
      <ProductAdminPage history={history} match={match} />
    ),
  },
  {
    path: "",
    exact: false,
    main: () => <NotFoundPage />,
  },
];

export default routes;
