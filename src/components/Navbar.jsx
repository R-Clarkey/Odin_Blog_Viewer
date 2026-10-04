import { NavLink } from "react-router-dom";
export default function Navbar() {
    return (
        <nav>      
            <NavLink to="/">Home</NavLink>{" | "}
            <NavLink to="/posts">Posts</NavLink>{" | "}
            <NavLink to="/users">Users</NavLink>{" | "}
            <NavLink to="/about">About</NavLink>{" | "}
            <NavLink to="/login">Login</NavLink>{" | "}
            <NavLink to="/register">Register</NavLink>
        </nav>
    )
}
    