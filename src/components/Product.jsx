import React, { useEffect, useState } from 'react'
import Procard from './Procard'
import {Row,Col} from 'react-bootstrap'
import { getproducts } from '../services/allAPI'

function Product({addstatus}) {
  const[allpro,Setallpro] = useState([])

  const getallproducts = async()=>{
    const response = await getproducts()
   // console.log(response);
   const {data}=  response
   //console.log(data);
   Setallpro(data)
  }
  console.log(allpro);

  useEffect(()=>{
    getallproducts()

  },[addstatus])
  return (
    <>
    <Row>
     { allpro.length>0?
     allpro.map((product)=>( <Col sm={12} md={6} lg={4} xl={3}>
      <Procard displaypro = {product}/>

    </Col>))

     :
      <p>Nothing to display</p>
      }
    </Row>

    </>
  )  
}

export default Product