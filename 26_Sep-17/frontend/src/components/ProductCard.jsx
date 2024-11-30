import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function ProductCard({ buttonColor, buttonText, product }) {
    return (
        <Card style={{ width: '18rem' }}>
            {/* <Card.Img variant="top" src="https://placehold.co/600x400" /> */}
            {/* <Card.Img variant="top" src="https://picsum.photos/id/292/600/400" /> */}

            <Card.Img variant="top" src={product.image} />
            <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>
                    {product.description} - {product.price} EGP
                </Card.Text>
                <Button variant={buttonColor}>{buttonText}</Button>
            </Card.Body>
        </Card>
    );
}

export default ProductCard;