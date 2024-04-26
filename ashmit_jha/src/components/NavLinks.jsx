import { NavLink } from "react-router-dom"
    

const NavLinks = () => {
    return (
    <>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog </NavLink>
        <NavLink to="/projects">Projects</NavLink>
    </>
    );
}

const Nav = () => {
    return (
        <nav className="w-1/3">
            <div className="flex justify-between">
            <NavLinks />
        </div>
    </nav>
    );
};

export default Nav;