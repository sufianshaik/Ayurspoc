import React from 'react'
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';
import Form from 'react-bootstrap/Form'
import { useNavigate } from 'react-router-dom';
import DropdownButton from 'react-bootstrap/DropdownButton';
import { Button } from 'react-bootstrap';
import DoctorDetails from './DoctorDetails';
function General() {
  let DoctorsList = [
    {
      id: "1",
      name: "Dr.Ramesh",
      phone: "9393190182",
      state: "Telangana",
      City: "Hyd",
      Website: "View",
      Patients: "32",
      Status: "Active"
    },
    {
      id: "2",
      name: "Dr.Suresh",
      phone: "9393190182",
      state: "Telangana",
      City: "Hyd",
      Website: "View",
      Patients: "32",
      Status: "Active"
    },
    {
      id: "3",
      name: "Dr.Rakesh",
      phone: "9393190182",
      state: "Telangana",
      City: "Hyd",
      Website: "View",
      Patients: "32",
      Status: "Active"
    },
    {
      id: "4",
      name: "Dr.Sharma",
      phone: "9393190182",
      state: "Telangana",
      City: "Hyd",
      Website: "View",
      Patients: "32",
      Status: "Active"
    }
  ]

  // const navigate = useNavigate();

  // const goto =  () => {
  //   <DoctorDetails username = {DoctorsList[0]}/>
  //   navigate('Doctor1');

  // }
  return (
    <div className='container p-5 mt-5 m-5  '>
      {
        DoctorsList &&
        DoctorsList.length ?
          <>
            <div className='container-fluid shadow rounded'>
              <Table striped hover   >
                <thead className=' justify-content-around'>
                  <tr className=''>
                    <th className=''> <strong>DoctorName</strong></th>
                    <th className=''>  <strong>Phone</strong></th>
                    <th className=''> <strong>State</strong></th>
                    <th className=''> <strong>City</strong></th>
                    <th className=''> <strong>Website</strong></th>
                    <th className=''> <strong>Patients</strong></th>
                    <th className=''> <strong>Payments</strong></th>
                    <th className=''> <strong>Status</strong></th>
                  </tr>
                </thead>
                <tbody className='justify-content-around'>
                  {
                    DoctorsList.map((e) => {
                      return (
                        <>
                          <tr key={e.id}>
                            <td className=''>
                              {/* <p key={key}>{e.name}</p> */}
                              {/* <button type="button" class="btn btn-light" onClick={()=>goto()}>{e.name}</button>  */}
                              <NavLink className="nav-link" aria-current="page" to={e.name} element={<DoctorDetails user={DoctorsList[0]} />}> {e.name} </NavLink>
                            </td>
                            <td>
                              {/* <img src={e.productImage1} style={{ width: "10rem", height: "9rem" }} className="img-fluid rounded border-top border-bottom border-warning shadow" alt="COuld not load image" /> */}
                              <p>{e.phone}</p>
                            </td>
                            <td>
                              <p>{e.state}</p>
                            </td>
                            <td>
                              {/* <p className=''><BiPlus onClick={()=>{ handle(e)}}/> <div className='border rounded img-thumbnail p-1 d-inline m-2 text-center border-warning'>{e.qty}   </div>  <BiMinus onClick={()=>{del(e.id)}}/></p> */}
                              <p>{e.City}</p>
                            </td>
                            <td className='text-center'>
                              <NavLink className="nav-link border border-secondary shadow border-radius rounded w-50 mt-1" aria-current="page" to="Doctors/General">{e.Website}</NavLink>
                              {/* <a className='border border-secondary shadow-lg  sm-w-25 w-50 text-center '> {e.Website} </a> */}
                            </td>
                            <td className='mx-auto'>
                              <p> {e.Patients}</p>
                              {/* <i><AiFillDelete style={{ color: 'red', cursor: 'pointer' }} /></i> */}
                            </td>
                            <td>
                              {/* checkbox for status of payments */}
                              <>
                                <Form.Select className='w-75'>
                                  <option className='text-success'>Paid</option>
                                  <option className='text-danger'>Unpaid</option>
                                </Form.Select>
                              </>
                              <p> {e.Payment} </p>
                            </td>
                            <td>
                              <p> {e.Status} </p>
                            </td>
                          </tr>
                        </>
                      )
                    })
                  }
                </tbody>
              </Table>
              {/* <div className='float-end border-bottom border-warning  mt-2 mb-3' ><p> SubTotal ({state.length} items ) : <strong>  ${price} </strong></p></div> */}
              {/* <div className='float-end border-bottom border-warning  mt-2 mb-3' ><p> <a className='text-warning text-decoration-none' href="" onClick={()=>goto1()}>Click her to download Invoice</a>  </p></div> */}
            </div>
          </> :
          <></>
      }
    </div>
  )
}

export default General