import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const loginApi = createApi({
  reducerPath: 'login',

  baseQuery: fetchBaseQuery({
    baseUrl: '',
  }),

  endpoints (builder) {
    return {
      loginUsers: builder.mutation({
        query: (data) => {
          return {
            url: '/login',
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