import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';

import profile from '../images/avatar-profile.png'

function NavbarR() {
  return (
    <Navbar bg="transparent" expand="lg">
        <Container>
            <Navbar.Brand href="/" className="fw-bold fs-2"><span style={{color: '#5fd068'}}>Bag</span> Point</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                    <Nav.Link href="/">หน้าหลัก</Nav.Link>
                    <Nav.Link href="/point">สะสมคะแนน</Nav.Link>
                </Nav>

                <Nav className="ms-auto">
                    <Nav.Link href="/loginuser"><img src={profile} width={50} height={50} alt=""></img></Nav.Link>
                    <Nav.Link href="/loginmar"><button className="btn btn-outline-dark mt-2">สำหรับร้านค้า</button></Nav.Link>
                    <Nav.Link href="/privacy-policy" className='mt-3'>นโยบายความเป็นส่วนตัว</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Container>
    </Navbar>
  )
}

export default NavbarR
