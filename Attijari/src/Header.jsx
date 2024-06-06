import React, { useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBNavbarBrand,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBCollapse
} from 'mdb-react-ui-kit';
import Logo from './Assets/Image/logo-no-background.png'
export default function Header() {
  const [openNavText, setOpenNavText] = useState(false);

  return (
    <MDBNavbar expand='lg' light className='setHeader'>
      <MDBContainer fluid>
        <MDBNavbarBrand href='/'>
          <div><img src={Logo} height='50' alt='...'/></div>
           </MDBNavbarBrand>
        <MDBNavbarToggler
          type='button'
          data-target='#navbarText'
          aria-controls='navbarText'
          aria-expanded='false'
          aria-label='Toggle navigation'
          onClick={() => setOpenNavText(!openNavText)}
        >
          <MDBIcon icon='bars' fas />
        </MDBNavbarToggler>
        <MDBCollapse navbar open={openNavText} >
          <MDBNavbarNav className='mr-auto mb-2 mb-lg-0'>
       
       
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>Apropos</MDBNavbarLink>
            </MDBNavbarItem>
            <MDBNavbarItem>
              <MDBNavbarLink href='#'>  </MDBNavbarLink>
            </MDBNavbarItem>
          </MDBNavbarNav>
          
        </MDBCollapse>
      </MDBContainer>
    </MDBNavbar>
  );
}