import { configureStore } from "@reduxjs/toolkit";

import flightReducer from "./Slice/flightSlice";
import detailSlice from './Slice/detailSlice';


const store = configureStore({
    reducer: { flight: flightReducer, detail: detailSlice },
})

export default store