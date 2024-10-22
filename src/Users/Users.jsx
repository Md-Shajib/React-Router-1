import { useLoaderData } from "react-router-dom";
import '../Posts/css/post.css'
import User from "./User";

const Users = () => {
    const users = useLoaderData();
    return (
        <div className="postContainer">
            {
                users.map(user => <User key={user.id} user={user}></User>)
            }
        </div>
    );
};

export default Users;