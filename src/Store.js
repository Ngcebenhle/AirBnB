// import React from "react";

import {  combineReducers, applyMiddleware } from "redux";
import { legacy_createStore as createStore } from "redux";
import { thunk } from "redux-thunk";
// import { configureStore } from "@reduxjs/toolkit";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { create } from "@mui/material/styles/createTransitions";
import { listingListReducer } from "./Reducers/ListingReducer";
import { modalReducer } from "./Reducers/ModalReducer";
import userLoginReducer from "./Reducers/UserRedecer";

const reducer = combineReducers({
  listingList: listingListReducer,
  modal: modalReducer,
  userLogin: userLoginReducer
}); 

// const userInfofromLS = localStorage.getItem("userInfo")
//   ? JSON.parse(localStorage.getItem("userInfo"))
//   : null;

// const initialState = {
//   userLogin: { userInfo: userInfofromLS },
// };

const middleware = [thunk];

const Store = createStore(
  reducer,
//  initialState,
// composeWithDevTools(applyMiddleware(...middleware))
applyMiddleware(...middleware)

);

export default Store;
 