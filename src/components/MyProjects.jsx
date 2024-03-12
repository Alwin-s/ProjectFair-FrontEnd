import React from 'react'
import AddProjects from './AddProjects'

function MyProjects() {
  return (
    <div className='card shadow p-4 mt-3 ms-3'>
      <div className="d-flex">
        <h3>My Projects</h3>
        <div className="ms-auto">
          <AddProjects/>
        </div>
      </div>

      <div className="mt-4">
      {/* collection of projects */}
      <div className="border d-flex align-items-center rounded p-2 pt-3">
        <h5>Project Title</h5>
        <div className="icons ms-auto">
          <button className='btn'><i class="fa-solid fa-pen-to-square"></i></button>
          <button className='btn'><i class="fa-brands fa-github"></i></button>
          <button className='btn'><i class="fa-solid fa-trash"></i></button>
        </div>
      </div>
      <br />
      
      <p className='fw-bolder text-danger fs-5'>No projects Uploaded Yet !!!</p>
      </div>

    </div>
  )
}

export default MyProjects