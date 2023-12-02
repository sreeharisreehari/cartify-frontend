import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { addtocart, addtofavorites } from '../services/allAPI'; 
import { Button, Col, Row } from 'react-bootstrap';

function Procard({ displaypro }) {
  const [isAddedToCart, setIsAddedToCart] = useState(false);
  const [Addedtofavorite,SetAddedtofavorite]= useState(false);

  const addToCart = async () => {
    if (!isAddedToCart) {
      const { id, url, name, category, price, description } = displaypro;
      const response = await addtocart({ id, url, name, price, category, description });
      console.log('Item added to cart:', response);
      setIsAddedToCart(true);
    }
  };

  const addToFavorite = async () => {
    if(!Addedtofavorite){
      const { id, url, name, category, price, description } = displaypro;
    const response = await addtofavorites({ id, url, name, price, category, description });
    console.log(response);
    SetAddedtofavorite(true)
  }
  };

  return (
    <div className='mt-5 container'>
      <Row className="container">
        <Col md={3}> 
          <Card data-aos="fade-down" data-aos-duration="1000" className='mt-5 card shadow' style={{ width: '18rem'}}>
            <Card.Img variant="top" style={{ height: '250px' }} className='p-5' src={displaypro.url} />
            <Card.Body>
              <Card.Title>{displaypro.name}</Card.Title>
              <Card.Text>
                <p><span>Price-₹</span>{displaypro.price}</p>
                <p><span>Category-</span>{displaypro.category}</p>
                <p><span>Description-</span>{displaypro.description}</p>
              </Card.Text>
              <div className='d-flex align-items-center justify-content-between'>
                <Button onClick={addToFavorite} variant="outline-danger btn rounded">
                  {Addedtofavorite}
                  <i className="fa-solid fa-heart"></i>
                </Button>
                <Button onClick={addToCart} variant="primary">
                  {isAddedToCart ? 'Added to Cart' : 'Add to Cart'}
                </Button>
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col  md={3}> </Col>
    <Col  md={3}> </Col>
    <Col  md={3}> </Col>
      </Row>
    </div>
  );
}

export default Procard;
