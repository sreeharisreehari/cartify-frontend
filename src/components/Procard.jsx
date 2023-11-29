import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import { addtocart, addtofavorites } from '../services/allAPI'; 
import { Button, Col, Row } from 'react-bootstrap';

function Procard({ displaypro }) {
  const [isAddedToFavorites, setIsAddedToFavorites] = useState(false);

  const addToCart = async () => {
    try {
      const {id, url, name, category, price, description } = displaypro;

      const response = await addtocart({id, url, name, price, category, description });
      console.log('Item added to cart:', response);
    } catch (error) {
      console.error('Error adding item to cart:', error);
    }
  };

  const addToFavorite = async () => {
    try {
      const { url, name, category, price, description } = displaypro;

      await addtofavorites({ url, name, price, category, description });
      setIsAddedToFavorites(true);
      console.log('Item added to favorites');
    } catch (error) {
      console.error('Error adding item to favorites:', error);
    }
  };

  return (
    <div className='mt-5 container'>
      




    <Row className="container   "  >
    <Col  md={3}> 
    <Card data-aos="fade-down" data-aos-duration="1000" className='mt-5 card shadow ' style={{ width: '18rem'}}>
      <Card.Img variant="top" style={{height:'250px'}} className='p-5' src={displaypro.url} />
      <Card.Body>
        <Card.Title>{displaypro.name}</Card.Title>
        <Card.Text>
        <p><span>Price-₹</span>{displaypro.price}</p>
         <p><span>Category-</span>{displaypro.category}</p>
       
         <p><span>Description-</span>{displaypro.description}</p>
        </Card.Text>
        <div className='d-flex align-items-center justify-content-between'>    <Button onClick={addToFavorite}  variant="outline-danger btn rounded"><i class="fa-solid fa-heart"></i></Button>
        <Button onClick={addToCart} variant="primary">Add to Cart</Button>
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
// <Card style={{ width: '100%', height: '500px' }}>
//<Card.Img height={'280px'} variant='top' src={displaypro.url} />
//<Card.Body>
 // <div>
    //<h4>{displaypro.name}</h4>
   // <h4>{displaypro.category}</h4>
    //<h4>{displaypro.price}</h4>
    //<h4>{displaypro.description}</h4>
  //</div>
  //<div className='d-flex justify-content-between align-items-center'>
   // <button onClick={addToFavorite} className='btn btn-danger'>
      //<i className='fas fa-star'></i> {isAddedToFavorites}
    //</button>
    //<button className='btn btn-success' onClick={ addToCart}>
      //<i className='fas fa-shopping-cart'></i> Add to Cart
   // </button>
  //</div>
////</Card.Body>
//</Card>