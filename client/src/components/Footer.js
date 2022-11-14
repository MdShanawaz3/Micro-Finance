import React from 'react'
import { CFooter, CLink } from '@coreui/react'
function Footer({ content }) {

  let date = new Date().getFullYear();
  return (
    <>
    <center>
      <CFooter style={{ backgroundColor: '#2364aa', color: 'white' }} >
        <div style={{alignItems:'center',justifyContent:'center'}}>

          <span>  &copy;  All Right Reserved {date} </span>
          <CLink style={{ textDecoration: 'none', color: '#fec601' }} href="https://sahulat.org">Sahulat micro-finance</CLink>

        </div>

      </CFooter>
      </center>

    </>
  )
}

export default Footer