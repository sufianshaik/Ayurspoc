import React from 'react'
import { Container } from 'react-bootstrap'
import {Row,Col,Button} from 'react-bootstrap'
import {MdArrowForwardIos} from 'react-icons/md' 
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import MedicalTestsGroups from './MedicalTestsGroups'
import MedicalTests from './MedicalTests'

function Lists() {

  const navigate = useNavigate() ;

  const handle = () => {
    navigate('MedicalTests');
  }

  return (
    <div>
      <Container>
        <Row className='img-fluid'>
          <Col xs = {6} md={4}>
            <Container className=''> 
             
              <div className='shadow border mt-4 p-3 d-flex justify-content-between '>
               <p className='m-2'>Medical Tests Groups  </p> 
               <NavLink className="nav-link m-2 btn-light" aria-current="page" to="MedicalTestsGroups"><MdArrowForwardIos/> </NavLink>
               {/* <p className='m-2' ><MdArrowForwardIos/> </p> */}
              </div>
               
              <div className='shadow border mt-2 p-3 mb-2 d-flex justify-content-between'>
              <p className='m-2 '>Medical Tests</p> 
              {/* <NavLink className="nav-link m-2" aria-current="page" to =""><MdArrowForwardIos/> </NavLink>   */}
              <Button className="btn-light" onClick={()=>{handle()}}><MdArrowForwardIos/></Button>
              </div>

            </Container>
            
          </Col>
          <Col md={2}>

          </Col>
          <Col xs = {12} md = {6}>
            <Container className='mt-1  '>
                <Outlet/> 
            </Container>
          </Col>
        </Row>
      </Container>
     
       
    </div>
  )
}

export default Lists