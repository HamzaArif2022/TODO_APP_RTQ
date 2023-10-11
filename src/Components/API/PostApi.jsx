import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const PostApi = createApi({
    reducerPath: "postApi",// name of reducer
    baseQuery: fetchBaseQuery(// the fetched query for each endpoints
        {
            baseUrl: "http://localhost:8000/posts",

        },


    ),
    keepUnusedDataFor: 60,// keep the cache value for one second 
    tagTypes: ["Posts"]  // this tage is used to invalidate the data for every calling mutation 
    // refetchOnFocus ...



    , endpoints: (builder) => ({
        //Endpoints are just a set of operations that you want to perform against your server
        //You define them as an object using the builder syntax
        // There are two basic endpoint types: query and mutation.
        //CRUD
        getAllPost: builder.query({// query end point used for get data from the server only
            query: () => '/',
            // transform data return 
            transformResponse:(baseQueryReturnvalue)=>{
                return baseQueryReturnvalue.map((post)=> ({...post,title:"Learn "+ post.title}))
            },
            providesTags: (result) =>
                result
                    ? [
                        ...result.map(({ id }) => ({ type: 'Posts', id })),
                        { type: 'Posts', id: 'LIST' },
                    ]
                    : [{ type: 'Posts', id: 'LIST' }],
        }),


        getOnePost: builder.query({//// query end point used for get data from the server only


            query: (id) => `/${id}`,


        }),
        addPost: builder.mutation({// Mutation for make operations on the serveur 
            // Add New Post
            query: (body) => ({
                url: '/',
                method: 'POST',
                body: body,// content
            }),
            invalidatesTags: [{// when we add new post to the posts we invalidate the cahe (tags=querykey)  to render the new data 
                type: "Posts",
            }]

        }),
        deletePost: builder.mutation({
            query: (id) => ({
                url: `/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: (result, error, id) => {
                return [

                    {
                        type: "Posts",
                        id: id
                    }
                ]

            }
        })
    })




})

// dynamique hook
// useGetAllPostQuery = getAllPostquery (endpoints)
export const { useGetAllPostQuery, useGetOnePostQuery, useAddPostMutation, useDeletePostMutation } = PostApi