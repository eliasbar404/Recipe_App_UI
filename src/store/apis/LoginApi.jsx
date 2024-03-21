import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const loginApi = createApi({
  reducerPath: 'login',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stoic-book-production.up.railway.app/api/auth/',
  }),

  endpoints (builder) {
    return {
      loginUsers: builder.mutation({
        query: (data) => {
          return {
            url: 'https://stoic-book-production.up.railway.app/api/auth/login',
            method:"POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              ...data
            })
          };
        },
      }),
    };
  },

});

export const { useLoginUsersMutation } = loginApi;
export {loginApi};