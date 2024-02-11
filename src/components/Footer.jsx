import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <div className='container mt-5'>
      <hr />
        <div className="row">
          <div className="col-lg-3 d-flex flex-column ">
            <h4 ><i class="fa-brands fa-opencart me-2"></i> Cartify</h4>
            <p style={{textAlign:'justify'}}> Cartify offers a wide range of <br /> products at great prices. Shop now  <br /> and
          experience convenience at your <br /> fingertips.</p>

          </div>
          <div className="col-lg-3 d-flex flex-column">
            <h4>Pages</h4>
            <Link style={{textDecoration:'none'}} to={'./'}>  Landing Page</Link>
            <Link style={{textDecoration:'none'}} to={'./buyorsell'}>Buy or Sell</Link>
            <Link style={{textDecoration:'none'}} to={'./home'}>Home</Link>
           

          </div>
          <div className="col-lg-3 d-flex flex-column">
          <h3>Services</h3>
        <Link style={{textDecoration:'none'}}>Buying</Link>
        <Link style={{textDecoration:'none'}}>Selling</Link>
        <Link  style={{textDecoration:'none'}}>Cart</Link>

          </div>
          <div className="col-lg-3 d-flex flex-column">
          <h3>Contact Us</h3>
         <div>
         <Link style={{textDecoration:'none'}} to={''}> <i class="fa-solid fa-phone me-3"></i>123-456-7890
 </Link>
         <br />
         <Link style={{textDecoration:'none'}} to={''}> <i class="fa-solid fa-envelope me-3"></i>info@cartify.com</Link>

         </div>
         <div className='col-lg-3 col-sm-12 icons d-flex justify-content-evenly ms-5 mt-3'>
            <Link to={'https://www.instagram.com/'} style={{ textDecoration:'none'}}><i class="fa-brands fa-instagram fa-2x me-4"></i></Link>
          <Link to={'https://www.facebook.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-facebook fa-2x me-4 "></i></Link>
          <Link to={'https://www.linkedin.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-linkedin-in fa-2x me-4"></i></Link>
          <Link to={'https://twitter.com/'} style={{textDecoration:'none'}}><i class="fa-brands fa-twitter fa-2x "></i></Link>
  
         </div>
        
          </div>
          <div><center><p>Copyright © 2023 Cartify.Build With React</p></center></div>
        </div>
    </div>
  )
}

export default Footer