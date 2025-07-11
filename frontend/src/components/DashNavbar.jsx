import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const DashNavbar = () => {
  return (
    <div>
        <Navbar>
            <Container className='flex justify-between p-10'>
                <Navbar.Brand className='text-lg md:text-2xl text-white font-bold'>FlashGen</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="hidden md:flex align-middle gap-3 justify-center ml-7">
                    <Nav.Link href="#about" className='px-5 py-2 border-1 rounded-3xl text-white hover:text-black hover:bg-white transition'>About</Nav.Link>
                    <Nav.Link href="#contact" className='px-5 py-2 border-1 rounded-3xl text-white hover:text-black hover:bg-white'>Contact Us</Nav.Link>
                </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    </div>
  )
}

export default DashNavbar;