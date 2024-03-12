import React, { useState } from 'react'
import { Collapse } from 'react-bootstrap';

function Profile() {
  const [open, setOpen] = useState(false);



  return (
    <div className='card shadow p-4 mt-5 me-2' >
      <div className="d-flex justify-content-between">
        <h2>Profile</h2>
        <button   onClick={() => setOpen(!open)} className='btn btn-outline-info' style={{height:"50px"}}><i class="fa-solid fa-angle-down"></i></button>
      </div>
     
     <Collapse in={open}>
     <div className="row justify-content-center mt-3">
        {/* upload profile picture from pc */}

        <label>
          <input type="file" style={{display:"none"}} />
          <img style={{cursor:"pointer"}} src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="" width={120} className='rounded circle'/>
        </label>

        <div className="mt-3">
          <input type="text" className='form-control' placeholder='GitHub' />
          <input type="text" className='form-control mt-3' placeholder='LinkedIn' />
        </div>

        <div className="mt-3 text-align-center d-grid">
          <button className='btn btn-warning d-grid'>Update</button>
        </div>

      </div>
     </Collapse>

    </div>
  )
}

export default Profile