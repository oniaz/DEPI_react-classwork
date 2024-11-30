import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import ProductCard from '../components/ProductCard';

import { useEffect, useState } from 'react';
import generateProducts from "../utils/generate-products";

function HomePage() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        const list = generateProducts(36);
        setProducts(list);
    }, []); // initial render

    return (
        <Container className="p-4">
            <Row xs={1} md={2} lg={3} className="g-4">
                {products.map((item, idx) => (
                    <Col key={idx}>
                        <ProductCard
                            key={idx}
                            buttonColor="primary"
                            buttonText="Add to cart"
                            product={item}
                        />
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default HomePage;