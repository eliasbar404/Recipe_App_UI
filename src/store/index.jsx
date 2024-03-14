import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from '@reduxjs/toolkit/query';
import { registerApi } from "./apis/RegisterApi";
import { loginApi } from "./apis/LoginApi";

export const store = configureStore({
  reducer: {
    [registerApi.reducerPath]: registerApi.reducer,
    [loginApi.reducerPath]: loginApi.reducer
  },

  middleware: (getdefaultMiddleware) => {
    return getdefaultMiddleware ()
    .concat(registerApi.middleware).concat(loginApi.middleware);
  }
});

setupListeners(store.dispatch);

export { useRegisterUsersMutation } from './apis/RegisterApi';
export { useLoginUsersMutation } from './apis/LoginApi';