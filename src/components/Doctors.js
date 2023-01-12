import React from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import Nav from 'react-bootstrap/Nav';
import General from './General';
import Activity from './Activity';
import { Navigate, Outlet, NavLink } from 'react-router-dom';

// import Sonnet from '../../components/Sonnet';

function Doctors() {
  return (
    <div className='container mt-2'>
      Doctors
      <div className='d-flex justify-content-between'>
        <div className='mt-5 col-sm-4 col-md-5'>
          <Nav justify variant="tabs" className='bg-doctors shadow-lg rounded-2'  >
            <Nav.Item>
              <NavLink className="nav-link" aria-current="page" to="General">General</NavLink>
            </Nav.Item>
            <Nav.Item>
              <NavLink className="nav-link" aria-current="page" to="Activity" >Activity</NavLink>
            </Nav.Item>
          </Nav>
          {/* <div>
<h2 className='display-3'>doctors</h2>
<ul className="nav nav-pills ">
<li className="nav-item mx-auto">
<NavLink className="nav-link"  aria-current="page" to="General"> General </NavLink>
</li>
<li className="nav-item mx-auto text-">
<NavLink className="nav-link"   aria-current="page" to="Activity"> Activity </NavLink>
</li>
</ul>
</div> */}
        </div>
        <div className='col-sm-6 col-md-4 w-5'>
          <Form className="d-flex mt-5">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </div>
        {/* <div className='col-sm-2 col-md-3'></div>  */}
      </div>
      <Outlet />
    </div>
  )
}

export default Doctors