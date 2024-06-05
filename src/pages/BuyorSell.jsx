import React, { useState } from 'react'
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'

import Swal from 'sweetalert2';
import Addpro from '../components/Addpro';

function BuyorSell() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [addstatus,Setaddstatus] = useState({})

  const handleClick=()=>{
    Swal.fire({
      title: "Are you Sure?",
     
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, Add!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Added!",
          text: "Your have Successfully Added.",
          icon: "success"
        });
      }
    });
  }
  
  return (
    <div>   
<div className='container'>
<Row className="container mt-5  "  >
<Col > </Col>
    <Col  data-aos="zoom-in-right"   data-aos-duration="1000"  md={3}> <Card className='me-5 card shadow ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://assets-v2.lottiefiles.com/a/5f52011c-1167-11ee-bb7a-87ae82e79a64/WoZMYyosBw.gif" />
      <Card.Body>
      
        <Card.Text>
        Explore our wide range of items.We will guide you through the complete buying Expericence.
        </Card.Text>
        <Link to={'/home'} className='text-decoration-none' > <Button className='d-block mx-auto' variant="primary">Buy Now</Button></Link>
        
      </Card.Body>
    </Card> </Col>
    <Col data-aos="zoom-in-left" data-aos-duration="1000"  md={3}> <Card className='ms-5 card shadow ' style={{ width: '20rem' }}>
      <Card.Img variant="top" src="https://i.pinimg.com/originals/0f/e6/62/0fe66229dd01d34b5d89f681d97ded29.gif" />
      <Card.Body>
      
        <Card.Text>
         We can give you an option to sell your items.Also we will find prospective buyers for you.
        </Card.Text>
        <div>
        <Addpro Setaddstatus={Setaddstatus}/>
      </div>
       
      </Card.Body>
    </Card> </Col>
    <Col  md={3}>  </Col>




</Row>
<br /><br />
</div>




</div>
  )
}

export default BuyorSell