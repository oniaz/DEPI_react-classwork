import './Navbar.css';

function Navbar({ isLoggedIn, onLogout }) {
    return (
        <nav className="navbar">
            <a href="/" className="navbar-logo">YourLogo</a>
            {isLoggedIn ? (
                <a href="/" className="navbar-login" onClick={onLogout}>Logout</a>
            ) : (
                <a href="/login" className="navbar-login">Login</a>
            )}
        </nav>
    );
}

export default Navbar;
