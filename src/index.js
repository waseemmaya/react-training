import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import Routes from "./Routes";
import configureStore from "./Store/store";

const reduxStore = configureStore(window.REDUX_INITIAL_DATA);

function App() {
  return (
    <Provider store={reduxStore}>
      <Routes />
    </Provider>
  );
}

ReactDOM.render(<App />, document.getElementById("root"));
