import React, { useEffect, useState } from 'react';
import { getfromcart, deleteitems } from '../services/allAPI';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Swal from 'sweetalert2';


function Carts() {
  const [addedItems, setAddedItems] = useState([]);
  console.log(addedItems);

const [total,setTotal] = useState(0)
  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const response = await getfromcart();
        console.log(response);

        
        setAddedItems(response.data || []);
      } catch (error) {
        console.error('Error fetching cart items:', error);
      }
    };

    fetchCartItems();
  }, []);

  const removeItem = async (id, index) => {
    try {
      await deleteitems(id);
      const updatedItems = [...addedItems];
      updatedItems.splice(index, 1);
      setAddedItems(updatedItems);
    } catch (error) {
      console.error('Error removing item:', error);
    }
  };

  const calculateTotalPrice = () => {
    return addedItems.map(item=>item.price).reduce((p1,p2)=>Number(p1)+Number(p2));
  };
  const redirectToHome = async () => {
    try {
      // Clear the items in the cart before redirecting
      await Promise.all(addedItems.map(item => deleteitems(item.id)));
      setAddedItems([]);
  
      Swal.fire({
        icon: 'success',
        title: 'Deal Done Successfully!',
        text: 'Redirecting to Home...',
      }).then(() => {
        window.location.href = '/home';
      });
    } catch (error) {
      console.error('Error during buy now:', error);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'An error occurred. Please try again later.',
      });
    }
  };
  

  return (
    <div className="container mt-5">
      <div className='mt-5 '><center><h2  data-aos="zoom-in  " data-aos-duration="2000"  style={{color:'#66CDAA'}}>Your treasures await checkout!</h2></center></div>
      {addedItems.length > 0 ? (
        <div className="row mt-5">
          <div className="col-md-8">
           
            <table data-aos="zoom-out-up" data-aos-duration="1000"  className='table'>
              <thead>
                <tr>
                  <th>Image</th>
                  <th>Product</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Description</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {addedItems.map((item, index) => (
                  <tr key={index}>
                    <td>
                      <img style={{ height: '100px', width: '100px' }} src={item.url} alt='no image' />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.category}</td>
                    <td>{item.description}</td>
                    <td>
                      <Button onClick={() => removeItem(item.id, index)} variant='outline-danger btn rounded'>
                        <i className='fa-solid fa-trash fs-4'></i>
                      </Button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>


            
          </div>

          <div className="col-md-4 ">
       <div style={{marginLeft:"70px"}}>
       <Card data-aos="flip-up" data-aos-duration="1000" style={{ width: '18rem' }}>
      <Card.Img  variant="top" src="https://i.pinimg.com/originals/66/22/ab/6622ab37c6db6ac166dfec760a2f2939.gif" />
      <Card.Body>
        <Card.Title ><center>Cart Summary</center></Card.Title>
        <Card.Text>
         <p> Total count of products :{addedItems.length} </p>
         <p>Total Price              :₹{calculateTotalPrice()}</p>
        </Card.Text>
        <Button  onClick={redirectToHome}  className='d-block mx-auto'  variant="primary">Buy Now</Button>
        
         
        
      </Card.Body>
    </Card>
       </div>

    </div>
        </div>
      ) : (
        <div style={{ height: '100vh' }} className='d-flex flex-column justify-content-center align-items-center'>
          <img style={{ height: '300px' }} src='https://limasy.com/img/empty-animation1.gif' alt='no image' />
          <h4>Your Cart is Empty</h4>
          <button className='btn btn-success rounded mt-3'>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/home'>
              Back to Home
            </Link>
          </button>
        </div>
      )}
    </div>
  );
}

export default Carts;
