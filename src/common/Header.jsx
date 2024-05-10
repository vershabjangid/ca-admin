import React from 'react'
import 
 {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify}
 from 'react-icons/bs'

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <BsSearch  className='icon'/>
        </div>
        <div className='header-right me-3'>
            <BsFillBellFill className='icon mx-2'/>
            <BsFillEnvelopeFill className='icon mx-2'/>
            <BsPersonCircle className='icon mx-2'/>
        </div>
    </header>
  )
}

export default Header
