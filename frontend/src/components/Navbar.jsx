import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
        <ul className="nav nav-pills navbar-list">
        <li className="nav-item">
            <Link className="nav-link navbar-link" aria-current="page" to="/">Homepage</Link>
        </li>
        <li className="nav-item dropdown ">
            <Link className="nav-link navbar-link" aria-current="page" to="/casestudies">Case Studies</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link navbar-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link navbar-link" to="/contact" tabIndex="-1" aria-disabled="true">Contact Us</Link>
        </li>
        </ul>
        </>
    );
}

export default Navbar;