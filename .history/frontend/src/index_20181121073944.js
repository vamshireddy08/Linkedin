//import App from './App';

import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route } from "react-router-dom";
import store from "./store/index";

//Routes to be placed here
import Signin from "./components/Signin/Signin";
import Signup from "./components/Signup/Signup";
import Home from "./components/Home/Home";
import Connections from "./components/Connections/Connections";
import AllConnections from "./components/AllConnections/AllConnections";
import Profile from './components/Profile/Profile';
import Admin from "./components/Admin/admin";
import postJob from "./components/Post Jobs/index";

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div>
        <Route path="/signin" component={Signin} />
        <Route path="/signup" component={Signup} />
        <Route path="/home" component={Home} />
        <Route path="/postJob" component={postJob} />

        <Route path="/connections" component={Connections} />
        <Route path="/admin" component={Admin} />
        <Route path="/allConnections" component={AllConnections} />
        <Route path="/profile/:id" component={Profile}/>

        <Route path="/admin" component={Admin} />

      </div>
    </Router>
  </Provider>,
  document.getElementById("root")
);
