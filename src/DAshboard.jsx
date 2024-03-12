import React from 'react'
import Header from './components/Header'
import { Col, Row } from 'react-bootstrap'
import Profile from "./components/Profile"
import MyProjects from "./components/MyProjects"

function DAshboard() {
  return (
    <>
  <Header insdieDashboard/>
  <div style={{overflowX:"hidden"}} >
  <Row className='d-flex justify-content-center'>
    <Col sm={12} md={7}>
    <h2>Welcome <span className='text-warning'>User</span></h2>

    {/* Myproject-section */}
    <MyProjects/>
    </Col>

    <Col sm={12} md={4}>

      {/* Profile-section */}

      <Profile/>
    </Col>
  </Row>
  </div>
    </>
  )
}

export default DAshboard