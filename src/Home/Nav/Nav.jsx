import {NavLink} from "react-router-dom";
import './Nav.css'

const Nav = () => {
    return (
        <div className="Navbar">
            <nav>
                <NavLink to={'/'}>Home</NavLink>
                <NavLink to={'/contact'}>Contact</NavLink>
                <NavLink to={'/users'}>Users</NavLink>
                <NavLink to={'/posts'}>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Nav;