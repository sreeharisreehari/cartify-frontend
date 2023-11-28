import { useEffect, useState } from 'react';
import { getfavorites } from '../services/allAPI';
import Favorcard from './Favorcard';
import { Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';


function Favor() {
    const[getpro,Setgetpro] = useState([])
    const[deletefavors,Setdeletefavors] = useState(false)
    const getfavproducts = async()=>{
        const response = await getfavorites()
        //console.log(response);
        const {data} = response
       // console.log(data);
       Setgetpro(data)
    }
    console.log(getpro);

    useEffect(()=>{
        getfavproducts()
        Setdeletefavors(false)

    },[deletefavors])
  

    return (
        <>
            <Row>
      {getpro.length > 0 ? (
        getpro.map((itempro) => (
          <Col sm={12} md={6} lg={4} xl={3} key={itempro.id}>
            <Favorcard showpro={itempro} Setdeletefavors={Setdeletefavors} />
          </Col>
        ))
      ) : (
        <div style={{ height: '100vh' }} className='d-flex flex-column justify-content-center align-items-center'>
          <img style={{ height: '400px' }} src="https://cdnl.iconscout.com/lottie/premium/thumb/shopping-bag-6866084-5624247.gif" alt='no image' />
          <h4>No more Favorites </h4>
          <button className='btn btn-success rounded mt-3'>
            <Link style={{ textDecoration: 'none', color: 'white' }} to='/home'>
              Back to Home
            </Link>
          </button>
        </div>
      )}
    </Row>
        </>
    );
}

export default Favor;
