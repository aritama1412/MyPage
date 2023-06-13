import React, {useState, useEffect} from 'react'
import { Container, Navbar, Nav } from 'react-bootstrap'

const NavbarComp = () => {
    const [changeColor, setChangeColor] = useState(false);

    const changeBGColor = () => {
        if(window.scrollY > 720){
            setChangeColor(true);
        }else{
            setChangeColor(false);
        }
    };

    useEffect(() => {
        changeBGColor();

        window.addEventListener('scroll', changeBGColor);
    })

  return (
    <div className='sticky-top'>
        {/* <Navbar bg="dark" variant="dark" expand='md'> */}
        <Navbar variant="dark" expand='md' className={changeColor ? "color-active" : ""}>
            <Container>
                <Navbar.Brand href="#home" className='fw-bold'>CodeWin-</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ms-auto">
                    <Nav.Link href="#home" className='mx-2'>Home</Nav.Link>
                    <Nav.Link href="#gallery" className='mx-2'>Gallery</Nav.Link>
                    <Nav.Link href="#services" className='mx-2'>Services</Nav.Link>
                    <Nav.Link href="#faq" className='mx-2'>FAQ</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default NavbarComp