import React, { useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';

function ProjectCard() {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div>
       <Card style={{ width: '18rem' }}>
      <Card.Img style={{cursor:"pointer"}} onClick={handleShow} variant="top" src="https://cdn.twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png" />
      <Card.Body>
        <Card.Title>Project Title</Card.Title>
        
      </Card.Body>
    </Card>


    <Modal size='lg'  show={show} onHide={handleClose} >
        <Modal.Header closeButton>
          <Modal.Title>Project heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col md={6}>
            <img sty src="https://cdn.twproject.com/blog/wp-content/uploads/2022/06/Project-management-plan.png" alt="" width={330} />
            </Col>
            <Col md={6}>
              <h3>Project Title</h3>
              <p><span>Project Overview :</span> &nbsp; 
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt praesentium eum temporibus amet exercitationem voluptate culpa rem officia, animi tempore consequuntur eos, hic nihil, saepe optio quibusdam ea fuga laudantium?
              </p>
              <p>Languages Used :
                <span className='fw-bold'> HTML,CSS,JAVASCRIPT</span>
              </p>
              <hr />
            </Col>
          </Row>
          <div>
            <a href="" className=' btn text-primary'><i class="fa-brands fa-github fa-xl"></i></a>
            <a href="" className=' btn text-primary '><i class="fa-solid fa-link fa-xl"></i></a>
          </div>


        </Modal.Body>
      </Modal>
    </div>
  )
}

export default ProjectCard