import '../Posts/css/post.css'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {name, email, phone, website, id} = user;
    return (
        <div className='postCard'>
            <h2 className=''>{name}</h2>
            <p>{email}</p>
            <p>{phone}</p>
            <p>{website}</p>
            <Link to={`/users/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes = {
    user: PropTypes.object.isRequired,
}
export default User;