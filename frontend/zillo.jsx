import React from "react";
import ReactDOM from "react-dom";

import { login, logout, signup } from "./util/session_api_util";
import configureStore from "./store/store"

document.addEventListener("DOMContentLoaded", () => {
  const root = document.getElementById("root");
  ReactDOM.render(<h1>Welcome to Zillo</h1>, root);

  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      session: {
        currentUser: window.currentUser.id
      },
      entities: {
        users: { [window.currentUser.id]: window.currentUser }
      }
    };
    store = configureStore(preloadedState);
    delete window.currentUser;
  } else {
    store = configureStore();
  }

  window.login = login
  window.logout = logout
  window.signup = signup

  window.getState = store.getState
});