import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDeletePostMutation, useGetOnePostQuery } from './API/PostApi'
import Loader from './Loader/loader'

function DetailsPost() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [deletePost, data] = useDeletePostMutation()
  const handlerDelete = (e, id) => {
    e.preventDefault();
    deletePost(id)
    navigate("/")

  }
  const { data: post, isError, error, isFetching, isLoading, refetch } = useGetOnePostQuery(id)
  console.log(post);
  if (isLoading) {
    return (<Loader />)
  }
  return (
    <div className='container mx-4 p-2 my-5'>
      {post ?
        <>
          <h1> detail of Post {id}</h1>


          <div>
            <h2 className='text-info'>{post?.title} </h2>
            <p className='text-muted'>{post?.content} </p>
            <button className='btn btn-danger' onClick={(e) => { handlerDelete(e, post.id) }}>Delete</button>
          </div>

        </> : <h1>please choose your lang</h1>
      }

    </div>
  )
}

export default DetailsPost