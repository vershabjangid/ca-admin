import React, { useState } from 'react'
import Header from '../common/Header'
import Sidebar from '../common/Sidebar'
import { Col, Row } from 'react-bootstrap'

export default function AddEmployee() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }
  

      let AddEmployee = (event)=>{
        
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
            <h3>Add Employee</h3>
          </div>
          <form onSubmit={AddEmployee}>
            <div>
              <h4 className='text-center text-capitalize '>personal information</h4>
              <Row className='pt-lg-3 ps-lg-5'>
                <Col className='col-lg-6 my-2 col-12'>
                  <input type="text" name='name' className='p-3 input_common' placeholder='First Name' />
                </Col>
                <Col className='col-lg-6 my-2 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='Last Name' />
                </Col>
              </Row>
              <Row className='pt-lg-5  ps-lg-5'>
                <Col className='col-lg-6 my-2 col-12'>
                  <input type="Email" className='p-3 input_common' placeholder='Employee Email' />
                </Col>
                <Col className='col-lg-6 my-2 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='Phone Number' />
                </Col>
              </Row>
              <Row className='pt-lg-5  ps-lg-5'>
                <Col className='col-lg-6 my-2 col-12'>
                  <input type="email" className='p-3 input_common' placeholder='organization Email' />
                </Col>
                <Col className='col-lg-6 my-2 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='CTC/Hrs.' />
                </Col>
              </Row>
              <Row className='py-lg-5  ps-lg-5'>
                <Col className='col-lg-6 my-2 col-12'>
                  <select className='input_common p-3'>
                    <option>Choose Gender</option>
                    <option>Male</option>
                    <option>FeMale</option>
                    <option>Other</option>
                  </select>
                </Col>
                <Col className='col-lg-6 my-2 col-12'>
                  <div className="p-3 input_common">
                    <label className='me-3'>
                      Photo
                    </label>
                    <input type="file" />
                  </div>
                </Col>
              </Row>
            </div>
            <div>
              <h4 className='text-center text-capitalize '>joining  Details</h4>
              <Row className='pt-lg-3 ps-lg-5'>
                <Col className='col-lg-6 my-2 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='Date Of Joining' />
                </Col>
                <Col className='col-lg-6 my-2 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='Date Of Leaving' />
                </Col>
              </Row>
              <Row className='py-lg-5  ps-lg-5'>
                <Col className='col-lg-6 my-2 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='Referred By' />
                </Col>
                <Col className='col-lg-6 my-2 col-12'>
                  <div className="p-3 input_common">
                    <label className='me-3'>
                      Address Proof
                    </label>
                    <input type="file" />
                  </div>
                </Col>
              </Row>
              <h4 className='text-center text-capitalize '>Designation & Reporing</h4>
              <Row className='pt-lg-5  ps-lg-5'>
                <Col className='col-lg-6 my-2 col-12'>
                  <input type="txet" className='p-3 input_common' placeholder='Designation' />
                </Col>
                <Col className='col-lg-6 my-2 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='Working Under' />
                </Col>
              </Row>
              <Row className='pt-lg-5  ps-lg-5'>
                <Col className='col-lg-6 my-2 col-12'>
                  <input type="text" className='p-3 input_common' placeholder='Reporting To' />
                </Col>
              </Row>
              <h4 className='text-center text-capitalize my-5'>Login & Permissions</h4>
              <Row className='  ps-lg-5'>
                <Col className='col-lg-6 my-2 col-12'>
                  <label className='px-3 text_color'>
                    Enable Login Access
                  </label>
                  <input type='checkbox' />
                </Col>
                <Col className='col-lg-6 my-2 col-12'>
                  <label className='px-3 text_color'>
                    Active User
                  </label>
                  <input type="checkbox" />
                </Col>
              </Row>
              <Row className='ps-lg-5'>
                <Col className='col-lg-6 my-2 col-12'>
                  <label className='px-3 text_color'>
                    Lead Handler
                  </label>
                  <input type="checkbox" />
                </Col>
                <Col className='col-lg-6 my-2 col-12'>
                  <label className='px-3 text_color'>
                    Show Only assigned customer list
                  </label>
                  <input type="checkbox" />
                </Col>
                <Col className='col-lg-6 my-2 col-12'>
                  <label className='px-3 text_color'>
                    Show Billing register of assigned costomers only
                  </label>
                  <input type="checkbox" />
                </Col>
                <Col className='col-lg-6 my-2 col-12'>
                  <select className='input_common p-3'>
                    <option>Choose Gender</option>
                    <option>Male</option>
                    <option>FeMale</option>
                    <option>Other</option>
                  </select>
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
