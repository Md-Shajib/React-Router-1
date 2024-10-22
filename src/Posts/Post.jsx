import './css/post.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {userId, title, body, id} = post;
    return (
        <div className="postCard">
            <h2>{userId}</h2>
            <h3>{title}</h3>
            <p><small>{body}</small></p>
            <p>Post id: {id}</p>
            <br />
            <Link className='button m-3' to={`/posts/${id}`}>See Details</Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object.isRequired,
}
export default Post;