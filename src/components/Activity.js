import React from 'react';
import Table from 'react-bootstrap/Table';
import Badge from 'react-bootstrap/Badge';
import { NavLink } from 'react-router-dom';
function Activity() {
  let DoctorsList = [
    {
      name: "Doctor1",
      Patients: "32",
      Login: "2 days",
      Testimonals: "10",
      userStories: "32",
      UrlVisits: "145",
      Live: "View"
    },
    {
      name: "Doctor2",
      Patients: "32",
      Login: "2 days",
      Testimonals: "10",
      userStories: "32",
      UrlVisits: "145",
      Live: "View"
    }
  ]
  return (
    <div className='container p-5 mt-5 m-5  '>
      {
        DoctorsList.length ?
          <>
            <div className='container-fluid shadow rounded '>
              <Table striped hover   >
                <thead className=' justify-content-around'>
                  <tr className=''>
                    <th className=''> <strong>DoctorName</strong></th>
                    <th className=''>  <strong>Patients</strong></th>
                    <th className=''> <strong>Login</strong></th>
                    <th className=''> <strong>Testimonals</strong></th>
                    <th className=''> <strong>User Stories</strong></th>
                    <th className=''> <strong>Url Visits</strong></th>
                    <th className=''> <strong>Live</strong></th>
                  </tr>
                </thead>
                <tbody className='justify-content-around'>
                  {
                    DoctorsList.map((e, key) => {
                      return (
                        <>

                          <tr key={e.id}>
                            <td className=''>
                              {/* <p key={key}>{e.name}</p> */}
                              <NavLink className="nav-link" aria-current="page" to={e.name}>{e.name}</NavLink>
                            </td>
                            <td>
                              <p>{e.Patients}</p>
                            </td>
                            <td>
                              {/* <p className=''><BiPlus onClick={()=>{ handle(e)}}/> <div className='border rounded img-thumbnail p-1 d-inline m-2 text-center border-warning'>{e.qty}   </div>  <BiMinus onClick={()=>{del(e.id)}}/></p> */}
                              <p>{e.Login}</p>
                            </td>
                            <td>
                              <p> {e.Testimonals}</p>
                              {/* <i><AiFillDelete style={{ color: 'red', cursor: 'pointer' }} /></i> */}
                            </td>
                            <td>
                              <p> {e.userStories} </p>
                            </td>
                            <td>
                              <p> {e.UrlVisits} </p>
                            </td>
                            <td className='text-center'>
                              <NavLink className="nav-link border border-secondary shadow border-radius rounded w-75 " aria-current="page" to="Doctors/General">{e.Live}</NavLink>
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

export default Activity