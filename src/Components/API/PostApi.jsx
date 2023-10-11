import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const PostApi = createApi({
    reducerPath: "postApi",// name of reducer
    baseQuery: fetchBaseQuery(
        {
            baseUrl: "http://localhost:8000/posts"
        }
    ), endpoints: (builder) => ({
        //CRUD
        getAllPost: builder.query({
            query: () => '/',
        })
    })




})

// dynamique hook
// useGetAllPostQuery = getAllPostquery (endpoints)
export const { useGetAllPostQuery } = PostApi