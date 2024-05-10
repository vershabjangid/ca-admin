import React, { useState } from 'react'
import Header from '../common/Header'
import Sidebar from '../common/Sidebar'
import { Col, Row } from 'react-bootstrap'

export default function Addcustomer() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  

      let Addcustomer = (event)=>{
        
        event.preventDefault()

        console.log(event.target.name.value);

      }


  return (
    <>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <main class="main-container">
          <div class="main-title">
            <h3>Add Customer</h3>
          </div>
          <form onSubmit={Addcustomer}>
            <div>
              <Row className='pt-lg-3 ps-lg-5'>
                <Col className='col-lg-6 my-4 col-12'>
                  <input type="number" name='Code' className='p-3 input_common' placeholder='Code' />
                </Col>
                <Col className='col-lg-6 my-4 col-12'>
                  <input type="name" name='name' className='p-3 input_common' placeholder='Name' />
                </Col>
                <Col className='col-lg-6 my-4 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='GSTIN' />
                </Col>
                <Col className='col-lg-6 my-4 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='Reg.Date' />
                </Col>
                <Col className='col-lg-6 my-4 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='Address' />
                </Col>
                <Col className='col-lg-6 my-4 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='Phone Number' />
                </Col>
                <Col className='col-lg-6 my-4 col-12'>
                  <input type="email" className='p-3 input_common' placeholder='Email' />
                </Col>
                <Col className='col-lg-6 my-4 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='Status' />
                </Col>  
                <Col className='col-lg-6 my-4 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='User ID' />
                </Col>  
                <Col className='col-lg-6 my-4 col-12'>
                  <input type="password" className='p-3 input_common' placeholder='Password' />
                </Col>  
              </Row>
            </div>
            <div className='d-flex justify-content-center pt-5'>
              <button className='btn bg-info py-2 px-4 text-light fs-5 fw-bold'>
                submit
              </button>
              <button className='btn bg-danger py-2 px-4 mx-2 text-light fs-5 fw-bold'>
                Cancel
              </button>
            </div>
          </form>
        </main>
      </div>
    </>
  )
}
