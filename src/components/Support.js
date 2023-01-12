import React from 'react'
import { Container } from 'react-bootstrap'
import {Row,Col,Button,Dropdown,ButtonGroup} from 'react-bootstrap'
import {MdArrowForwardIos} from 'react-icons/md' 
import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import MedicalTestsGroups from './MedicalTestsGroups'
import MedicalTests from './MedicalTests'

function Support() {

  const navigate = useNavigate() ;

  const handle = () => {
    navigate('/Lists');
  }

  return (
    <div className='container mt-5'>
    <div className='row row-cols-1 me-auto row-cols-sm-2'>
      <div className='col-sm-10 col-md-8 d-flex justify-content-between'>
        <p>Support</p>

        <Dropdown as={ButtonGroup}>
          <Button className='btn-sm' variant="light">Date Sort</Button>
          <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown as={ButtonGroup}>
          <Button className='btn-sm' variant="light">Sort By Status </Button>
          <Dropdown.Toggle split variant="warning" id="dropdown-split-basic" />
          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
      <div className='col-sm-2 col-md-4'> </div>
    </div>

    Tjis 

    <div className='container mt-5 container shadow-lg '>
        <table className="table ">
          <thead className="">
            <tr className=''>
              <td>S.No</td>
              <td>Doctor Name</td>
              <td>Contact Number</td>
              <td> Date </td>
              <td>    <Button variant="outline-primary bg-primary text-white" onClick={()=>handle()}>Add</Button></td>
            </tr>
          </thead>
          <br />
          {/* <tbody>
            {
              listdata &&
              listdata.map(item => (
                <tr key={item.id} >
                  <td>{item.id}</td>
                  <td>{item.testGroup}</td>
                  <td>{item.testName}</td>
                  <td>{item.units}</td>
                  <td>{item.normalRange}</td>
                  <td>{item.trackable}</td>
                  <td>
                    <div className='g-0 mb-1'>
                      <a onClick={() => { LoadEdit(item.id) }} className="btn"><FiEdit2 /></a>
                      <a onClick={() => { RemoveList(item.id) }} className="btn"><AiOutlineDelete /></a>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody> */}
        </table>
      </div>


  </div>
  )
}

export default Support 