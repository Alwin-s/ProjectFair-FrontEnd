import React from 'react'
import Header from '../components/Header'

function Projects() {
  return (
    <>
      <Header/>
      <div className="projects" style={{marginTop:"50px"}}>
        <h2 className='text-center mb-4'>All Projects</h2>
        <div className="justify-content-center d-flex align-items-center">
          <div className="border d-flex w-50 rounded mb-3">
            <input type="text" className='form-control' placeholder='Search project by technologies..' />

            <i class="fa-solid fa-magnifying-glass mt-2" style={{marginLeft:"-33px"}}></i>
          </div>
        </div>
       </div>
    </>
  )
}

export default Projects