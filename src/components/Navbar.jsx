import { Link } from 'react-router-dom';
import '../App.css';

const Navbar = () => {
    return (
        <nav className="navbar">
            <span className="logo">Happy Cake</span>
            <div className="nav-links">
                <Link className="Link" to="/">Home</Link>
                <Link className="Link" to="/contacto">Contacto</Link>
            </div>
        </nav>
    );
}

export default Navbar;
