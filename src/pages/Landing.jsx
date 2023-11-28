import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function LandingPage() {
  return (
    <div data-aos="fade-right" data-aos-duration="2000" className='mt-4 pt-5'>
      <div className="container mt-4">
        <Row className="container mt-5">
          <Col md={6}>
            <h1 className='mt-5' style={{ fontSize: 60 }}>Discover <br /> the most suitable items</h1>
            <p>Find the best, reliable, and cheap items here. We focus on product quality. Here you find products of almost all brands. So why are you waiting? Just order now!</p>
            <Link to={'/buyorsell'} className='btn btn-dark rounded'>Get Started <i className="fa-solid fa-arrow-right ms-3"></i></Link>
          </Col>
          <Col md={6}>
            <img style={{ width: '100%' }} src="https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif" alt="no img" />
          </Col>
        </Row>
      </div>
      <div data-aos="flip-down" data-aos-duration="1000"  className='container' >
  
   <Row className=' mt-5 ' >
 <Col   md={3}><div style={{width:'75%',border:'2px solid #66CDAA',padding:'20px',borderRadius:'10px' }}> <center style={{color:'#66CDAA'}}><i class="fa-solid fa-2x fa-truck"></i></center> 
 <center className='mt-3'><h5>Fast Delivery</h5>
 
 <p>Quick ship, petite size.</p></center>
  </div>  </Col>
 <Col  md={3}><div style={{width:'75%',border:'2px solid #66CDAA',padding:'20px',borderRadius:'10px'}}> <center style={{color:'#66CDAA'}}><i class="fa-solid fa-2x fa-headset"></i></center> 
 <center className='mt-3'><h5> Always Support</h5>
 
 <p>Contact Us for Assistance.</p></center>
  </div> </Col>
 <Col  md={3}> <div style={{width:'75%',border:'2px solid #66CDAA',padding:'20px',borderRadius:'10px'}}> <center style={{color:'#66CDAA'}}><i class="fa-solid fa-2x fa-shield-halved"></i></center> 
 <center className='mt-3'><h5> Secure Payment</h5>
 
 <p> Safe & Secure 💳</p></center>
  </div> </Col>
 <Col  md={3}><div style={{width:'75%',border:'2px solid #66CDAA',padding:'20px',borderRadius:'10px'}}> <center style={{color:'#66CDAA'}}><i class="fa-solid fa-2x fa-plus"></i></center> 
 <center className='mt-3'><h5> New Products</h5>
 
 <p>Discover What's Fresh!</p></center>
  </div> </Col>

 </Row>
 </div>
    </div>
  );
}

export default LandingPage;
