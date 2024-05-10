import React from 'react';
import { CgProfile } from "react-icons/cg";
import { Link } from 'react-router-dom';

import {
  BsCart3, BsGrid1X2Fill, BsFillGrid3X3GapFill, BsPeopleFill,
  BsListCheck, BsMenuButtonWideFill, BsFillGearFill
}
  from 'react-icons/bs'

function Sidebar({ openSidebarToggle, OpenSidebar }) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive" : ""}>
      <div className='sidebar-title'>
        <div className='sidebar-brand fs-6'>
          Manege Your Account
        </div>
        <span className='icon close_icon' onClick={OpenSidebar}>X</span>
      </div>

      <ul className='sidebar-list'>
        <Link to={'/dashboard'} className='text_color'>
          <li className='sidebar-list-item'>
            <a href="">
              <BsGrid1X2Fill className='icon' />
              Dashboard
            </a>
          </li>
        </Link>
        <li className='sidebar-list-item'>
          <div class="dropdown">
            <button class="btn p-0 sidebar-list-item border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <a href="">
                <CgProfile className='icon fs-4' />  Add / View Employee
              </a>
            </button>
            <ul class="dropdown-menu rounded-0  w-100 ">
              <Link to={'/AddEmployee'}>
                <li>
                  <a class="dropdown-item" href="#">

                    Add Employee

                  </a>
                </li>
              </Link>
              <Link to={'/viewemployee'}>
                <li>
                  <a class="dropdown-item" href="#">
                    View Employee
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </li>
        <li className='sidebar-list-item'>
        <div class="dropdown">
            <button class="btn p-0 sidebar-list-item border-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
              <a href="">
                <CgProfile className='icon fs-4'/>  Add / View Customer
              </a>
            </button>
            <ul class="dropdown-menu rounded-0 w-100 ">
              <Link to={'/Addcustomer'}>
                <li>
                  <a class="dropdown-item" href="#">
                    Add Customer
                  </a>
                </li>
              </Link>
              <Link to={'/ViewCustomer'}>
                <li>
                  <a class="dropdown-item" href="#">
                      View   Customer
                  </a>
                </li>
              </Link>
            </ul>
          </div>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsPeopleFill className='icon' /> Customers
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsListCheck className='icon' /> Inventory
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsMenuButtonWideFill className='icon' /> Reports
          </a>
        </li>
        <li className='sidebar-list-item'>
          <a href="">
            <BsFillGearFill className='icon' /> Setting
          </a>
        </li>
      </ul>
    </aside>
  )
}

export default Sidebar
