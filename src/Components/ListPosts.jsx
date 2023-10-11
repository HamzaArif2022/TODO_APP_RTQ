
import { useGetAllPostQuery } from './API/PostApi'
import {   Link, useNavigate } from 'react-router-dom'
import Loader from './Loader/loader'
import DetailsPost from './detailsPost'
import Add from './Add'

export default function ListPosts() {
    const navigate =useNavigate()
    const {data:posts,isError,isLoading,error}=useGetAllPostQuery({
        pollingInterval:3000
    })
    if (isLoading) {
        return <Loader/>
    }
    if (isError) {
        return <alert className="container alert alert-danger ">{error.status}</alert>
    }
   
  return (
    <div className='d-flex container my-5 '>

    <div >
        <Link to={"/posts/add"} className='btn btn-primary my-3'>Add Post</Link>
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
  <DetailsPost/>
    
    </div>
  )
}
