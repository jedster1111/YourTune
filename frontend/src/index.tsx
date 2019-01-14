import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension/logOnlyInProduction";
import createSagaMiddleware from "redux-saga";
import App from "./App";
import "./index.css";
import rootReducer from "./reducers/rootReducer";
import rootSaga from "./sagas/rootSaga";
import * as serviceWorker from "./serviceWorker";

const sagaMiddleware = createSagaMiddleware();

const composeEnhancers = composeWithDevTools(applyMiddleware(sagaMiddleware));

const store = createStore(rootReducer, composeEnhancers);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
