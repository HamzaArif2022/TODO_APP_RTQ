
import { useNavigate } from 'react-router-dom';
import { useAddPostMutation } from './API/PostApi';

function Add() {
    const navigate =useNavigate()
    const [addPost, { data, isLoading }] = useAddPostMutation()// addPost :function send the data to the add endspoints   
    const handleSubmit = (e) => {
        e.preventDefault();
        const formdata = new FormData(e.target)
        const title = formdata.get("title");
        const content = formdata.get("content");
        // call the method
        addPost({
            title: title,
            content: content
        })
        navigate("/")
    }
    return (
        <div className='container'>
            <h1>Add Poste</h1>
            <form onSubmit={handleSubmit} className='form-control'>
                <div className="form-group">
                    <label>title</label>
                    <input className='form-control' type='text' name="title" />
                </div>
                <div className="form-group">

                    <input className='form-control' type='text' name="content" />
                </div>
                <div className="form-group">

                    <input type="submit" className="btn btn-info" value={"add"} />
                </div>





            </form>






        </div>
    )
}

export default Add