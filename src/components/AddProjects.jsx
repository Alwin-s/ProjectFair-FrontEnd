import React, { useState } from 'react'
import { Button, Modal } from 'react-bootstrap';


function AddProjects() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
       <Button variant="primary" onClick={handleShow}>
       Add Projects  <i class="fa-solid fa-circle-plus"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        size='lg'
      >
        <Modal.Header closeButton>
          <Modal.Title>Projects Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row d-flex justify-content-cente align-items-center">
            <div className="col-lg-6">
            <label>
          <input type="file" style={{display:"none"}} />
          <img style={{cursor:"pointer"}} src="https://pic.onlinewebfonts.com/thumbnails/icons_148071.svg" alt="" width={300} className=''/>
        </label>

            </div>
            <div className="col-lg-6">
              <div className='mb-3'>
                <input type="text" className='form-control'  placeholder='Project Titile'/>
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control'  placeholder='Languages Used'/>
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control'  placeholder='GitHub Link'/>
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control'  placeholder='Website Link '/>
              </div>
              <div className='mb-3'>
                <input type="text" className='form-control'  placeholder='Project Overview'/>
              </div>
            </div>
          </div>
        </Modal.Body>
        <Modal.Footer >
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddProjects