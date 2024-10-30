const Navbar = () => {

    return (
        <>
        <ul className="nav nav-pills">
        <li className="nav-item">
            <a className="nav-link" aria-current="page" href="#">Homepage</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link" aria-current="page" href="#">Case Studies</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#">About Us</a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="#" tabIndex="-1" aria-disabled="true">Contact Us</a>
        </li>
        </ul>
        </>
    );
}

export default Navbar;