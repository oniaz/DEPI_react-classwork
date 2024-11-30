import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <Navbar bg="dark" data-bs-theme="dark">
            <Container>
                <Navbar.Brand as={Link} to="/">E-commerce</Navbar.Brand>
                <Nav className="ms-auto">
                    <Nav.Link as={Link} to="/cart">Cart</Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}

export default NavBar;
