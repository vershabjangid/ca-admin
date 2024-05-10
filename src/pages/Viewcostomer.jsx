import React, { useState } from 'react'
import Header from '../common/Header'
import Sidebar from '../common/Sidebar'
import { Col, Row } from 'react-bootstrap'

export default function ViewCustomer() {

  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <>
      <div className='grid-container'>
        <Header OpenSidebar={OpenSidebar} />
        <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar} />
        <main class="main-container">
          <div class="main-title">
            <h3>View Employee</h3>
          </div>
          <Row className='py-3  d-flex justify-content-between'>
            <Col className='col-12 col-lg-6 '>
              <select className='py-2  input_common  px-3 my-3 my-lg-0 '>
                <option value="50" className='rounded-0'>50</option>
                <option value="50" className='rounded-0'>100</option>
                <option value="50" className='rounded-0'>175</option>
                <option value="50" className='rounded-0'>250</option>
              </select>
            </Col>
            <Col className='col-12 col-lg-6 '>
              <div className='d-flex'>
                <input type="search" className='input_common px-3' />
                <button className='btn bg-info  text-light fw-bold  px-3 rounded-0 py-2'>
                  search
                </button>
              </div>
            </Col>
          </Row>
          <div className='main_detail_row'>
            <div className='pt-4'>
              <div className='border-bottom border-1 main_hading_row  pt-3'>
                <div className='email_box'>
                  <h6>S.No.</h6>
                </div>
                <div className='email_box'>
                  <h6>Code</h6>
                </div>
                <div className='email_box'>
                  <h6>Name</h6>
                </div>
                <div className='email_box'>
                  <h6>GSTIN</h6>
                </div>
                <div className='email_box'>
                  <h6>Ref.Date</h6>
                </div>
                <div className='email_box'>
                  <h6>Address</h6>
                </div>
                <div className='email_box'>
                  <h6> Phone No.</h6>
                </div>
                <div className='email_box'>
                  <h6>Email</h6>
                </div>
                <div className='email_box'>
                  <h6>Status</h6>
                </div>
                <div className='email_box'>
                  <h6>User ID</h6>
                </div>
                <div className='email_box'>
                  <h6>Password</h6>
                </div>
                <div className='email_box'>
                  <h6>Action</h6>
                </div>
              </div>
              <Row className='main_hading_row profile_view py-2 px-2 my-2'>
                <Col>
                  <h6>1</h6>
                </Col>
                <Col>
                  <h6 className='ms-5 ps-2'>0002</h6>
                </Col>
                <Col>
                  <h6 className='ms-5 ps-3'>mohit   hjvwgfuyrfcn</h6>
                </Col>
                <Col>
                  <h6>259665/bvduh</h6>
                </Col>
                <Col>
                  <h6>12/12/2022</h6>
                </Col>
                <Col>
                  <h6>soorsagar jodhpur</h6>
                </Col>
                <Col>
                  <h6>9588990084</h6>
                </Col>
                <Col>
                  <h6> mohitgehlot9656@gmail.com</h6>
                </Col>
                <Col>
                  <h6>Active</h6>
                </Col>
                <Col>
                  <h6>mohit22</h6>
                </Col>
                <Col>
                  <h6>123456788</h6>
                </Col>
                <Col>
                  <div class="ps-3 dropdown">
                    <button class="btn p-0 sidebar-list-item text-light px-3 dropdown-toggle bg-info 
                      " type="button" data-bs-toggle="dropdown" aria-expanded="false">
                      Action
                    </button>
                    <ul class="dropdown-menu rounded-0  w-100 ">
                      <li>
                        <a class="dropdown-item" href="#">
                          Assign Customer
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          <button type="button" className="btn p-0 border-0 " data-bs-toggle="modal" data-bs-target="#exampleModal">
                            View Profile
                          </button>
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Edit
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Delete
                        </a>
                      </li>
                      <li>
                        <a class="dropdown-item" href="#">
                          Transfer Data
                        </a>
                      </li>
                    </ul>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
          
        </main>
      </div>

      {/* modal */}
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h1 class="modal-title fs-5" id="exampleModalLabel">
                Full Details
              </h1>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body">
              <ul class="nav nav-tabs" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button class="nav-link active" id="home-tab" data-bs-toggle="tab" data-bs-target="#home-tab-pane" type="button" role="tab" aria-controls="home-tab-pane" aria-selected="true">Profile</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="profile-tab" data-bs-toggle="tab" data-bs-target="#profile-tab-pane" type="button" role="tab" aria-controls="profile-tab-pane" aria-selected="false">Joining Details</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Designation & Reporting</button>
                </li>
                <li class="nav-item" role="presentation">
                  <button class="nav-link" id="contact-tab" data-bs-toggle="tab" data-bs-target="#contact-tab-pane" type="button" role="tab" aria-controls="contact-tab-pane" aria-selected="false">Login & Permissions</button>
                </li>
              </ul>
              <div class="tab-content py-3" id="myTabContent">
                <div class="tab-pane fade border-1  border-dark show active" id="home-tab-pane" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                  <table className='w-100'>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'>User Full  Name </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'>Mohit Gehlot</td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'> Employee Email </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> mohitgehlot9656@gmail.com </td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'>  Phone Number </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> 9588899223232 </td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'>   organization Email </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> Email@.com </td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'>   CTC/Hrs.</th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> 9588899223232 </td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'> Gender </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> Male</td>
                    </tr>
                  </table>
                </div>
                <div class="tab-pane fade" id="profile-tab-pane" role="tabpanel" aria-labelledby="profile-tab" tabindex="0">
                  <table className='w-100'>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'> Date Of Joining </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'>Mohit Gehlot</td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'> Date Of Leaving </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> mohitgehlot9656@gmail.com </td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'>  Referrend By </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> 9588899223232 </td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'>  Address Proof </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> Email@.com </td>
                    </tr>
                  </table>
                </div>
                <div class="tab-pane fade" id="contact-tab-pane" role="tabpanel" aria-labelledby="contact-tab" tabindex="0">
                  <table className='w-100'>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'> Designation </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'>Mohit Gehlot</td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'> Working Under </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> mohitgehlot9656@gmail.com </td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'>  Reporting </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> 9588899223232 </td>
                    </tr>
                  </table>
                </div>
                <div class="tab-pane fade" id="disabled-tab-pane" role="tabpanel" aria-labelledby="disabled-tab" tabindex="0">
                  <table className='w-100'>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'> Enable Login Access</th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'>Mohit Gehlot</td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'> Lead Handler </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> mohitgehlot9656@gmail.com </td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'>
                        Show Billing register of assigned costumers only
                      </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> 9588899223232 </td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-dark'>  Active User </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> Email@.com </td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-daShow Only assigned customer listk'>  </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> Email@.com </td>
                    </tr>
                    <tr >
                      <th className='border-1 border-dark py-2 px-2 w-25 text-daShow Only assigned customer listk'>  </th>
                      <td className='border-1 border-dark py-1 px-3 w-75 text-dark'> Email@.com </td>
                    </tr>
                  </table>
                </div>
              </div>
            </div>
            <div class="modal-footer">
              <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Ok</button>
            </div>
          </div>
        </div>
      </div>
      {/* modal */}
    </>
  )
}
