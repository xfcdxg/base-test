import React from "react";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import App from "./pages";
import Root from "./root";


import AdminLayout from "./admin/layout";
import Admin from "./admin";

// 路由配置
const Routes = () => (
  <Router history={browserHistory}>
    <Route path="/" component={Root}>
      <IndexRoute component={App} />
    </Route>
    <Route path="/admin" component={AdminLayout}>
      <IndexRoute component={Admin} />
    </Route>
  </Router>
);
export default Routes;
