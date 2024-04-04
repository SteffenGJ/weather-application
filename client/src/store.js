import { configureStore } from "@reduxjs/toolkit";
import locationReducer from "./reducers/locationSlice";

const store = configureStore({
  reducer: {
    locations: locationReducer,
  },
});

export default store;
