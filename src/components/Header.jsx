import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';

function OffcanvasExample({insdieDashboard}) {
  // Get the second element of the array
  const expand = 'sm';

  return (
    <>
      <Navbar key={expand} expand={expand} className="bg-primary mb-3 text-white">
        <Container fluid>
          <Navbar.Brand >
             
           <Link to={"/"} style={{textDecoration:"none"}} className='fw-bold text-white ms-4'> <i class="fa-solid  fa-list-check fa-lg me-2" style={{color:"white"}}></i>Project-Fair</Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
          <Navbar.Offcanvas 
           className='bg-primary text-white text-center'
            id={`offcanvasNavbar-expand-${expand}`}
            aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
            placement="end"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                Offcanvas
              </Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
              <Nav className="justify-content-center flex-grow-1 ms-5 " >
                <Nav.Link href="/" className='text-white'>Home</Nav.Link>
                <Nav.Link href="#action1" className='text-white ms-2'>About</Nav.Link>
                <Nav.Link href="/projects" className='text-white ms-2'>Projects</Nav.Link>
                <Nav.Link href="/dashboard" className='text-white ms-2'>DashBoard</Nav.Link>
                
                  <NavDropdown.Divider />
               
              </Nav>
             {
              insdieDashboard ? ''
              :
              <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
             }
              {
                insdieDashboard &&
               <Link to={'/'} className='btn btn-outline-danger me-5' style={{marginLeft:"16%"}}>LogOut</Link>
              }
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Container>
      </Navbar>
    </>
  );
}

export default OffcanvasExample;
