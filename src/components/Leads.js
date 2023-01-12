import React from 'react'
import Button from 'react-bootstrap/Button';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import Dropdown from 'react-bootstrap/Dropdown';

function Leads() {
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


    </div>
  )
}

export default Leads