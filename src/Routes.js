import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./Screens/Home";
import Profile from "./Screens/Profile";
import Ads from "./Screens/Ads";
import Category from "./Screens/Category";
import Chats from "./Screens/Chats";
import NoMatch from "./Screens/NoMatch";
import Login from "./Screens/Login";
import Signup from "./Screens/Signup";
import PublicHome from "./Screens/PublicHome";
import { connect } from "react-redux";
import ACTIONS from "./Store/action";

// Main App Router
function Routes(props) {
  let isLoggedIn = props.user;
  console.log("isLoggedIn: ", isLoggedIn);

  return (
    <Router>
      <div className="container mt-3">
        <h3 className={isLoggedIn ? "text-success" : "text-danger"}>
          You are {isLoggedIn ? "online" : "offline"}
        </h3>
        {!isLoggedIn && <PublicRoutes isLoggedIn={isLoggedIn} />}
        {isLoggedIn && <ProtectedRoutes isLoggedIn={isLoggedIn} />}
        <button
          className={isLoggedIn ? "btn btn-primary" : "btn btn-danger"}
          onClick={() => {
            isLoggedIn ? props.onLogout(false) : props.onLogin(true);
          }}>
          Go {isLoggedIn ? "Offline" : "Online"}
        </button>
      </div>
    </Router>
  );
}
// className={isLoggedIn ? "text-success" : "text-danger"}
function PublicRoutes(props) {
  return (
    <Switch>
      <Route path="/" exact component={PublicHome} />
      <Route path="/login/" component={Login} />
      <Route path="/ads/" component={Ads} />
      <Route path="/category/" component={Category} />
      <Route path="/signup/" component={Signup} />
      <Route component={NoMatch} />
    </Switch>
  );
}

function ProtectedRoutes(props) {
  return (
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/profile/" component={Profile} />
      <Route path="/ads/" component={Ads} />
      <Route path="/category/" component={Category} />
      <Route path="/chats/" component={Chats} />
      <Route component={NoMatch} />
    </Switch>
  );
}

const mapStateToProps = state => ({
  user: state.user
});

const mapDispatchToProps = dispatch => ({
  onLogin: user => dispatch(ACTIONS.onLogin(user)),
  onLogout: () => dispatch(ACTIONS.onLogout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Routes);
