import { Link } from "react-router-dom";

const Navbar = () => {

    return (
        <>
        <ul className="nav nav-pills">
        <li className="nav-item">
            <Link className="nav-link" aria-current="page" to="/">Homepage</Link>
        </li>
        <li className="nav-item dropdown">
            <Link className="nav-link" aria-current="page" to="/casestudies">Case Studies</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/about">About Us</Link>
        </li>
        <li className="nav-item">
            <Link className="nav-link" to="/contact" tabIndex="-1" aria-disabled="true">Contact Us</Link>
        </li>
        </ul>
        </>
    );
}

export default Navbar;