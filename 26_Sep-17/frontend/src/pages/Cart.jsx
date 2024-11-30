import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCard from '../components/ProductCard';

function Cart() {
    return (
        <Container className="p-4">
            <Row xs={1} md={2} lg={3} className="g-4">
                {Array.from({ length: 4 }).map((_, idx) => (
                    <Col key={idx}>
                        <ProductCard
                            key={idx}
                            buttonColor="danger"
                            buttonText="Remove from cart"
                            product={{
                                title: "anything-cart",
                                price: 20,
                                description: "cartcartcartcatr",
                            }}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Cart;