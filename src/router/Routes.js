import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "../components/home";
import About from "../components/about";
import Contact from "../components/contact";
import Products from "../components/products/index";
import Reviews from "../components/reviews/index";
import Careers from "../components/careers/index";
import AppointmentPage from "../components/appointment/appointmentPage";

/*export default () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/products" component={Products} />
      <Route path="/reviews" component={Reviews} />
      <Route path="/careers" component={Careers} />
      <Route path="/appointment" component={AppointmentPage} />
    </Switch>
  );
};*/
export default [
  { component: Home, path: "/", exact: true },
  {
    component: About,
    path: "/about"
  },
  {
    component: Contact,
    path: "/contact"
  },
  {
    component: Products,
    path: "/products"
  },
  {
    component: Reviews,
    path: "/reviews"
  },
  {
    component: Careers,
    path: "/careers"
  },
  {
    component: AppointmentPage,
    path: "/appointment"
  }
];
