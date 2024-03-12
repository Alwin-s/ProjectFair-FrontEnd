import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import ProjectCard from '../components/ProjectCard'

function Home() {
  return (
    <>
    <div className="container-fluid bg-secondary " style={{height:"100vh",width:"100%"}}>
        <Row className='align-items-center p-5'>
            <Col sm={12} md={6} className='ms-4'>
                <h1 className='fw-bolder text-ligt'> <i class="fa-solid  fa-list-check fa-2xs me-2" style={{color:"white"}}></i> Project-Fair</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi, neque libero rerum deleniti, beatae quod aliquam numquam quisquam harum ea nihil natus, mollitia esse! Iste totam veniam mollitia at esse.</p>
               <Link to={"/register"} className='btn btn-primary'>Start to Explore <i class="fa-solid fa-right-long ms-2"></i></Link>
            </Col>
            <Col>
            <img src="https://mir-s3-cdn-cf.behance.net/project_modules/hd/ea5d0476339699.5c6694d453222.gif" alt="" width={430} style={{borderRadius:"25px"}} className='ms-5'/>
            </Col>
        </Row>
    </div>


    {/* All peojects */}

    <div className="all-projects mt-5">
        <h2 className='text-center'>Explore Your Projects</h2>
        <br />
    
        <marquee scrollAmount={15}>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <ProjectCard/>
                </Col>
               
                
            </Row>
        </marquee>
        <div className="text-center mt-5"><Link to={"/projects"}>View More Projects</Link></div>
    </div>

    </>
  )
}

export default Home