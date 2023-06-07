import { configureStore } from "@reduxjs/toolkit";
import { reducerroot } from "./reducer";
import thunk from "redux-thunk";

const store = configureStore({
  reducer: reducerroot,
  middleware: [thunk],
});

export default store;