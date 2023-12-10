import { combineReducers } from "@reduxjs/toolkit";
import { userSlice } from "./slice/userSlice";

export default combineReducers({
   cart: userSlice
})