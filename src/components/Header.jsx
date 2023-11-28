import React from 'react';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Header() {

 
  
 
  return (
    <div>
  <Navbar className="bg-body-tertiary">
     
     <Navbar.Brand href="./">
     <h4 className='ms-5'  ><i class="fa-brands fa-opencart me-2"></i> Cartify</h4>
     </Navbar.Brand>
          <Nav className="ms-auto">
          
            <Nav.Link  className='btn border   rounded border- me-5'>
              <Link to='/Favorites' style={{ textDecoration: "none", color: "" }}>
              <i class="fa-solid  fa-star me-3"></i><span className='fw-bolder me-2'>Favorites</span>
                <Badge bg="secondary" className='rounded'></Badge>
              </Link>
            </Nav.Link>
            <Nav.Link className='btn border rounded border-  me-5'>
              <Link to='/Carts' style={{ textDecoration: "none", color: "dark" }}>
                <i className="fa-solid fa-cart-shopping me-3"></i><span className='fw-bolder me-2'>Cart</span>
                <Badge bg="secondary" className='rounded'></Badge>
              </Link>
            </Nav.Link>
          </Nav>
        
      </Navbar>
      <div>
          
    </div>
    </div>
  )
}

export default Header;
