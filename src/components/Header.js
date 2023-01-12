import React from 'react'
import { Routes, Route, Link, Router, NavLink, Navigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Home from './Home'
import Doctors from './Doctors'
import Lists from './Lists'
import Leads from './Leads'
// import Support from './Support'
import MedicalTestsGroups from './MedicalTestsGroups'
import MedicalTests from './MedicalTests';
import Support from './Support';
import Activity from './Activity';
import General from './General'
import DoctorDetails from './DoctorDetails';
import MedCreate from './MedCreate';
import MedEdit from './MedEdit';
import AddMedicalTestGroups from './AddMedicalTestGroups';
import EditMedicalTestGroups from './EditMedicalTestGroups';


function Header() {
  return (
    <div>
      {/* Navbar starts */}
      <>
        <Navbar className='bg-blue' variant="light">
          <Container className='text-white'>
            <Navbar.Brand href="/" className='text-white'>  Ayur Spoc Redefined</Navbar.Brand>
            <Nav className="ms-auto g-1">
              <NavLink className="nav-link text-white" aria-current="page" to="Home">Home</NavLink>
              <NavLink className="nav-link text-white" aria-current="page" to="Doctors">Doctors</NavLink>
              <NavLink className="nav-link text-white" aria-current="page" to="Lists">Lists</NavLink>
              <NavLink className="nav-link text-white" aria-current="page" to="Support">Support</NavLink>
              {/* <NavLink className="nav-link text-white" aria-current="page" to="Leads">Leads</NavLink>               */}
              
            </Nav>
          </Container>
        </Navbar>
      </>
      {/* Navbar ends */}

      {/* Routing  */}
      <Routes>
        <Route path="Home" element={<Home />} />
        <Route path="Doctors" element={<Doctors />} >
              <Route path="General" element={<General />} />
              {/* exact="false" */}
              <Route path="" element={<Navigate replace to="General" />} />
              <Route path="Activity" element={<Activity />} />
        </Route>
        <Route path="/Doctors/General/:username" element={<DoctorDetails />} />
        <Route path="/Doctors/Activity/:username" element={<DoctorDetails />} />
        <Route path="Leads" element={<Leads />} />


       
        <Route path="Lists" element={<Lists />} > 
              <Route path="MedicalTestsGroups" element={<MedicalTestsGroups />} />
              <Route path="" element={<Navigate replace to="MedicalTestsGroups" />} />
              <Route path="MedicalLists" element={<MedicalTests />} />
        </Route>
        <Route path="MedicalTestsGroups/add-testgroup" element={<AddMedicalTestGroups/>}/> 
        <Route path="MedicalTestsGroups/edit-testgroup/:meid" element={<EditMedicalTestGroups/>}/> 


        {/* <Route path="Lists" element={<Lists />} /> */}
        <Route path="MedicalTests/create" element={<MedCreate />} />
        <Route path="MedicalTests/edit/:medid" element={<MedEdit />} />
        <Route path = "Lists/MedicalTests" element ={<MedicalTests/>}></Route>
        <Route path="Support" element={<Support />} />
        <Route path="" element={<Navigate replace to="Home" />} />
      </Routes>
    </div>
  )
}

export default Header