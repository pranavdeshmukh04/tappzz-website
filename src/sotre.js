import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./features/productSlice";
import userReducer from "./features/userSlice";
import cartReducer from "./features/cartSlice";
import shippingReducer from "./features/shippingSlice";
import { appApi } from "./services/appApi";
const store = configureStore({
  reducer: {
    products: productReducer,
    users: userReducer,
    cart: cartReducer,
    shipping: shippingReducer,
    [appApi.reducerPath]: appApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(appApi.middleware),
});

export default store;
// import {
//   legacy_createStore as createStore,
//   combineReducers,
//   applyMiddleware,
// } from "redux";
// import thunk from "redux-thunk";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { userReducer } from "./reducers/userReducer";

// const reducer = combineReducers({
//   user: userReducer,
// });
// const middleware = [thunk];

// const store = createStore(
//   reducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// export default store;
