import React from 'react'
import Navbar from './Navbar'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import {
   CNavbar, CContainer, CNavbarNav,  CDropdown, CDropdownToggle, CDropdownMenu, CDropdownItem,
  CButton, CFormInput, CForm,  CNavbarToggler, COffcanvas, COffcanvasHeader, COffcanvasTitle, CCloseButton, COffcanvasBody
} from "@coreui/react"

function Main() {
  const [visible, setVisible] = useState(false)

  return (
    <>
      {/* <Navbar /> */}
      <CNavbar colorScheme="light" className="bg-light">
        <CContainer fluid>
          <CNavbarToggler
            aria-controls="offcanvasNavbar"
            aria-label="Toggle navigation"
            onClick={() => setVisible(!visible)}
          />
          <COffcanvas id="offcanvasNavbar" placement="start" portal={false} visible={visible} >
            <COffcanvasHeader>
              <COffcanvasTitle>Options</COffcanvasTitle>
              <CCloseButton className="text-reset" onClick={() => setVisible(false)} />
            </COffcanvasHeader>
            <COffcanvasBody>
              <CNavbarNav>

                <CForm className="d-flex">
                  <CFormInput style={{ width: "290px", marginBottom: '8px' }} type="search" placeholder="Search" />
                </CForm>

                <CButton style={{ width: "90px" }} type="submit" color="primary" variant="outline">
                  Search
                </CButton>

                <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle color="secondary">Member Transaction</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Pay to member</CDropdownItem>
                    <CDropdownItem href="#">Recive from member</CDropdownItem>
                    <CDropdownItem href="#">Member Branch Change</CDropdownItem>
                    <Link to='/addmember'><CDropdownItem href="">New Member </CDropdownItem></Link>
                    <CDropdownItem href="#">Deposits List</CDropdownItem>
                    <CDropdownItem href="#">New Loan Request</CDropdownItem>
                    <CDropdownItem href="#">Credolab Loan Request</CDropdownItem>
                    <CDropdownItem href="#">Loans List</CDropdownItem>
                    <CDropdownItem href="#">Loan Foreclose</CDropdownItem>
                    <CDropdownItem href="#">Member Account </CDropdownItem>

                  </CDropdownMenu>
                </CDropdown>
                <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle color="secondary">Online Transaction</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>

                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle color="secondary">Creditor Transactions</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>

                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle color="secondary">Branch Activity</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>

                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle color="secondary">Accounts</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>

                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>

                <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle color="secondary">Analytics</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>

                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
                <CDropdown variant="nav-item" popper={false}>
                  <CDropdownToggle color="secondary">Settings</CDropdownToggle>
                  <CDropdownMenu>
                    <CDropdownItem href="#">Action</CDropdownItem>
                    <CDropdownItem href="#">Another action</CDropdownItem>

                    <CDropdownItem href="#">Something else here</CDropdownItem>
                  </CDropdownMenu>
                </CDropdown>
              </CNavbarNav>

            </COffcanvasBody>
          </COffcanvas>
        </CContainer>
      </CNavbar>
    </>
  )
}

export default Main