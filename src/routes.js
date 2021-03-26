import React from "react";
import { Redirect } from "react-router-dom";

// Layout Types
import { DefaultLayout } from "./layouts";

// Route Views
import CapitaMarvel from "../src/views/capitaMarvel";
import Show from "../src/views/show";
import Details from "../src/views/details";


export default [
  {
    path: "/",
    exact: true,
    layout: DefaultLayout,
    PrivateRoute: false,
    component: () => <Redirect to="/Show" />
  },
  {
    path: "/CapitaMarvel",
    layout: DefaultLayout,
    component: CapitaMarvel,
    PrivateRoute: false
  },
  {
    path: "/Show",
    layout: DefaultLayout, 
    PrivateRoute: false,
    component: Show
  },
  {
    path: "/details:id",
    layout: DefaultLayout, 
    PrivateRoute: false,
    component: Details
  }
];


