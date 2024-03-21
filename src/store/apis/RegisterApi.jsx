import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const registerApi = createApi({
  reducerPath: 'register',

  baseQuery: fetchBaseQuery({
    baseUrl: 'https://stoic-book-production.up.railway.app/api/auth/',
  }),

  endpoints (builder) {
    return {
      registerUsers: builder.mutation({
        query: (data) => {
          return {
            url: '/register',
            method: 'POST',
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

export const { useRegisterUsersMutation } = registerApi;
export {registerApi};