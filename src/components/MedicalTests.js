import React, { useState } from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table'
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { Container, Dropdown, ButtonGroup, Button} from 'react-bootstrap'

function MedicalTests() {
  const [listdata, listdatachange] = useState(null);
  useEffect(() => {
    fetch("http://localhost:1000/medicalList").then((res) => {
      return res.json();
    }).then((resp) => {
      listdatachange(resp);
    }).catch((err) => {
      console.log(err.message);
    })
  }, [])

  const navigate = useNavigate();
  const handle = () => {
    navigate('/MedicalTests/create/');
  }
  const LoadEdit = (id) => {
    navigate('/MedicalTests/edit/' + id);
  }

  const RemoveList = (id) => {
    if (window.confirm('Do you want to remove?')) {
      fetch("http://localhost:1000/medicalList/" + id, {
        method: "DELETE"
      }).then((res) => {
        alert('Removed successfully.')
        window.location.reload();
      }).catch((err) => {
        console.log(err.message)
      })
    }
  }
  // if (listdata) {
  //   listdata.map( item => {
  //     if (item.trackable == "on"){
  //       item.trackable = 'NO' ;
  //     }
  //     else if (item.trackable == "off") {
  //       item.trackable = 'YES';
  //     }
  //     console.log(item.trackable) ;
  //    })
  // }

  // console.log(listdata)
  return (
    <div>
      <div className='container d-flex mt-3 justify-content-end'>
        <button type="button" onClick={() => handle()} className="btn img-fluid btn-primary shadow text-white rounded-0">Add New </button></div>
      <div className='container mt-5 shadow'>
        <table className="table ">
          <thead className="">
            <tr className=''>
              <td><h6>S.No </h6> </td>
              <td><h6>Medical Test Name </h6></td>
              <td className='me-auto'>
              <span className=''>
              <select className="form-select w-50 " aria-label="Default select example">
                <option selected> <h1> Choose Group</h1></option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
              </select>
              </span>
             
              </td>
              <td><h6>Unit</h6></td>
              <td><h6>Normal Range</h6></td>
              <td><h6>Trackable</h6>
              </td>
            </tr>
          </thead>

          <tbody>
            {
              listdata &&
              listdata.map(item => (
                <tr key={item.id} >
                  <td>{item.id}</td>
                  <td>{item.testGroup}</td>
                  <td>{item.testName}</td>
                  <td>{item.units}</td>
                  <td>{item.normalRange}</td>
                  <td>
                      {item.trackable}
                  </td>
                  
                  <td>
                    <div className='g-0 mb-1'>
                      <a onClick={() => { LoadEdit(item.id) }} className="btn"><FiEdit2 /></a>
                      <a onClick={() => { RemoveList(item.id) }} className="btn"><AiOutlineDelete /></a>
                    </div>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default MedicalTests 