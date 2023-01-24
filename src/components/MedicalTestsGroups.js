import React, { useEffect, useState } from 'react'
import {Col,Row,Container,Form,Button,Card,Table ,Modal} from 'react-bootstrap'
import { FiEdit2 } from 'react-icons/fi'
import { AiOutlineDelete } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import {add } from '../store/groupSlice' ;
import axios from 'axios';

function MedicalTestsGroups() {
    const [grouplist,grouplistchange] = useState("") ;
    
 
    useEffect(() => {
      const getdata = async () => {
        let res = await axios.get("http://localhost:6001/group-list/getlists") ;
        grouplistchange(res.data.payload);
      }
      getdata() ;
    },[])

    const navigate = useNavigate();

    const LoadEdit = (id) => {
        navigate('/MedicalTestsGroups/edit-testgroup/' + id);
      }

    const handle =()=>{
        navigate('/MedicalTestsGroups/add-testgroup/') ;
    }

    const RemoveList = (testGroup) => {
        if (window.confirm('Do you want to remove?')) {
          fetch(`http://localhost:6001/group-list/remove/${testGroup}`, {
            method: "DELETE"
          }).then((res) => {
            alert('Removed successfully.')
            window.location.reload();
          }).catch((err) => {
            console.log(err.message)
          })
        }
      }


  return (
    <div>
        <div className='card col-sm-6 col-md-8 w-5 mt-4 w-100 img-responsive img-fluid'>
        <div>
        <p className='m-2'>Medical Tests Group </p> 
          <Form className="d-flex  mb-5 m-3 ">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-primary bg-primary text-white" onClick={()=>handle()}>Add</Button>
          </Form>
        </div>
        
        <div className='img-fluid shadow-lg container '>
                <Table striped className='mt-2'>
            {/* <thead>
                <tr>
                <th>ID</th>
                <th>Group number</th>
                <th>No of tests </th>
                </tr>
            </thead> */}
            <tbody>
            {
                grouplist && 
                grouplist.map(item=>(
                    <tr key={item.id}> 
                        <td>{item.groupName}</td>
                        <td>{item.numberOfTests}</td>
                        <td>
                            <div className='g-0 mb-1'>
                            <a onClick={()=>{ LoadEdit(item.groupName)}} className="btn"><FiEdit2 /></a> 
                            <a onClick={() => { RemoveList(item.groupName)}} className="btn"><AiOutlineDelete /></a>
                            </div>
                        </td>
                    </tr>
                ))
            }
                
            </tbody>
            </Table>
            </div>
        </div>
    </div>
  )
}

export default MedicalTestsGroups