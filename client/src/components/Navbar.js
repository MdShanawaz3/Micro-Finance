import React from 'react'
import { CNavItem, CNavbarText, CNavbarBrand, CNavbar, CContainer } from "@coreui/react"

function Navbar({ content }) {

  // let date = new Date().getDate();
  let newDate = new Date()
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();
  let realdate = `${date}/${month}/${year}`
  return (
    <>


      <CNavbar className='nav'>
        <CContainer fluid>
          <CNavbarBrand className='logo' style={{ fontSize: '35px', fontWeight:'bolder',marginLeft: '150px' }} href="/">SAHULAT</CNavbarBrand>
          <CNavItem className='d-flex'>
            <CNavbarText className='nav-items'>
              Branch Manager
            </CNavbarText >

            <CNavbarText className='nav-items'>
              <span>{realdate}</span>
            </CNavbarText>
            
            <CNavbarText className='nav-items'>
              Logout
            </CNavbarText>

          </CNavItem>
        </CContainer>
      </CNavbar>


    </>
  )
}

export default Navbar