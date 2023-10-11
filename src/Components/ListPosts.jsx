import React from 'react'
import { useGetAllPostQuery } from './API/PostApi'
import { useNavigate } from 'react-router-dom'
import Loader from './Loader/loader'

export default function ListPosts() {
    const navigate =useNavigate()
    const {data:posts,isError,isLoading,error}=useGetAllPostQuery()
    if (isLoading) {
        return <Loader/>
    }
    if (isError) {
        return <alert className="container alert alert-danger ">{error.status}</alert>
    }
   
  return (
    <div className=''>
        
        <h1>
            ListPosts
            </h1>
            <div className="list-group">
                {posts?.map(post =>
                    <a onClick={(e) => {
                        e.preventDefault()
                        navigate(`/posts/${post.id}`)
                    }} key={post.id} href="#" className="list-group-item list-group-item-action">
                        {post.title}</a>
                )}
            </div>

    </div>
  )
}
