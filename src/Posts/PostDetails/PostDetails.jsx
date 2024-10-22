import '../css/post.css'
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const navigate = useNavigate();
    const handleGoBack = ()=> {
        navigate(-1);
    }
    const post = useLoaderData();
    const {title, body, id, userId} = post;
    return (
        <div className='postCard'>
            <h2>Post Id: {id}</h2>
            <h2>User Id: {userId}</h2>
            <h3>Title: {title}</h3>
            <p>Post Body: <small>{body}</small></p>
            <button className='border-2 py-2 px-4 mt-3 rounded-2xl hover:bg-gray-400' onClick={handleGoBack}>Go Back</button>
        </div>
    );
};

export default PostDetails;