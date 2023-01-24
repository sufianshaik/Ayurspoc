import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai'

function EditMedicalTestGroups() {
    const  { meid }  = useParams();
    const [groupName, groupNamechange] = useState("");
    const [numberOfTests, numberOfTestschange] = useState("");

    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:6001/group-list/editlist/${meid}`).then((res) => {
            return res.json();
        }).then((resp) => {
            groupNamechange(resp.groupName);
            numberOfTestschange(resp.numberOfTests);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [])

    const handlesubmit = (e) => {
        e.preventDefault();
        const meddata = { groupName, numberOfTests}; 
        fetch(`http://localhost:6001/group-list/editlist/${meid}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(meddata)
        }).then((req) => {
            alert('Saved Succesfully');
            navigate('/Lists/MedicalTestsGroups');
        }).catch((err) => {
            console.log(err.message)
        })
    }
  return (
    <div className='d-flex justify-content-center mt-4'>
    <Card className='w-50 img-fluid'>
        <Card.Body>
            <Card.Title className='text-center'>
                <div className='d-flex justify-content-between mt-2 mb-2'>
                    <p>Edit Medical Test</p>
                    <Link to="/Lists/MedicalTestsGroups" className="text-dark"><AiOutlineClose /></Link>
                </div>
            </Card.Title>
            <hr />
            {/*  form */}
            <form className="container" onSubmit={handlesubmit}>
                <div className="card" style={{ "textAlign": "left" }}>
                    {/* <div className="card-title">
<h2>Add new Medical Test </h2>
</div> */}
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                     {/* <label>ID</label> 
                                    <input value={id} disabled="disabled" className="form-control"></input> */}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group mb-2">
                                    {/* <label>Medical Test Group</label> */}
                                    <input placeholder='Group Name' value={groupName} onChange={e => groupNamechange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            {/* onMouseDown={e => testGroupchange(true)} */}
                            <div className="col-lg-12">
                                <div className="form-group mb-2">
                                    {/* <label >Medical Test Name</label> */}
                                    <input placeholder='Number of tests' value={numberOfTests} onChange={e => numberOfTestschange(e.target.value)} className="form-control"></input>
                                </div>
                            </div>
                            <div className="col-lg-12 mt-2 text-center">
                                <div className="form-group mb-2">
                                    <button className="btn btn-primary rounded-0" type="submit">Save </button>
                                    {/* <Link to="/Lists" className="btn btn-danger">Back</Link> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </Card.Body>
    </Card>
</div>
   
  )
}

export default EditMedicalTestGroups