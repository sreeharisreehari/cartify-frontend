import React from 'react'
import { sellproduct } from '../services/allAPI';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Swal from 'sweetalert2';



function Addpro({Setaddstatus}) {
    
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [pro,Setpro] = useState({
    id:'',
    url:'',
    name:'',
    category:'',
    price:'',
    description:''
  })
  console.log(pro);

  const handleUpload = async () => {
  const { id, url, name, category, price, description } = pro;

  if (!id || !url || !name || !category || !price || !description) {
    Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Please fill in all the details!',
    });
  } else {
    const response = await sellproduct(pro);

    if (response.status >= 200 && response.status < 300) {
      Setaddstatus(response.data);
      Swal.fire({
        icon: 'success',
        title: 'Success!',
        text: 'Uploaded successfully',
      }).then(() => {
        //close
        handleClose();
      });
    } else {
      console.log(response);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong. Try Again Later!',
      });
    }
  }
};
  return (
    <div className='d-flex align-items-center'>
   
   <div  className='d-block mx-auto'>
  
  <Button onClick={handleShow} className='d-block mx-auto' variant="primary">Sell Now</Button>
</div>

    <div>
    <Modal 
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      ></Modal>
         <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
        <Modal.Title><i class="fa-brands fa-opencart me-2"></i>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <form className="border border-primary p-3 rounded">
         <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="text" placeholder="Enter product ID"onChange={(e)=>Setpro({...pro,id:e.target.value})} />
      
     </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="text" placeholder="Enter product Image URL"onChange={(e)=>Setpro({...pro,url:e.target.value})} />
      
     </Form.Group>
         <Form.Group className="mb-3" controlId="formBasicEmail">
       
        <Form.Control type="text" placeholder="Enter product Name"onChange={(e)=>Setpro({...pro,name:e.target.value})} />
       
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="text" placeholder="Enter product Category  "onChange={(e)=>Setpro({...pro,category:e.target.value})} />
      
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="text" placeholder="Price"onChange={(e)=>Setpro({...pro,price:e.target.value})} />
      
     </Form.Group>
     <Form.Group className="mb-3" controlId="formBasicEmail">
       
       <Form.Control type="text" placeholder="Description"onChange={(e)=>Setpro({...pro,description:e.target.value})} />
      
     </Form.Group>

         </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className='w-25' variant="danger" onClick={handleClose}>
            CANCEL
          </Button>
          <Button onClick={handleUpload}  className='w-25' variant="success">ADD</Button>
        </Modal.Footer>
      </Modal>
    </div>
  </div>
  )
}

export default Addpro