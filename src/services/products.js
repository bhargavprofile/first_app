// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

// Define a service using a base URL and expected endpoints
export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:4005/products' }),
  endpoints: (builder) => ({
    getProductsByName: builder.query({
      query: (name) => `/`,
    }),
    deleteProduct: builder.mutation({
      query:(id) => {
        return{
          url: `/${id}`,
          method: 'DELETE',
        }
      },
    }),
    addProduct: builder.mutation({
      query:(newObj) => {
        return{
          url: `/`,
          method: 'POST',
          body: newObj
        }
      },
    })
  }),
})

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useLazyGetProductsByNameQuery, useGetProductsByNameQuery, useDeleteProductMutation, useAddProductMutation} = productsApi // nextstep configure this to store