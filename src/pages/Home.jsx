
import Product from '../components/Product'


function Home() {
  
  return (
    <div>
      <div>
      <div data-aos="zoom-in  " data-aos-duration="2000" className='container mt-5'>
        <center><h2><i class="fa-brands fa-opencart me-2"></i> Cartify</h2></center>
        <center> <h1>Expolre Our Products</h1> </center> </div>
        
      </div>
      <Product/>
    </div>
  )
}

export default Home