import React, { useState } from 'react';
import { Link, navigate, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai'


function AddMedicalTestGroups() {
    const [groupName, groupNamechange] = useState("");
    const [numberOfTests, numberOfTestschange] = useState("");

    const navigate = useNavigate()

    const handlesubmit = (e) => {
        e.preventDefault();
        const meddata = { groupName, numberOfTests}
        // console.log({id,testGroup,testName,units,normalRange,trackable});
        fetch("http://localhost:6001/group-list/create-list", {
            method: "POST",
            headers: { "content-type": "application/json" },
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
            <Card.Title className='text-center '>
                <div className='d-flex justify-content-between mt-2 mb-2'>
                    <p>Add new Medical Test</p>
                    <Link to="/Lists/MedicalTestsGroups" className="text-dark"><AiOutlineClose /></Link>
                </div>
            </Card.Title>
            <hr />
            {/*  form */}
            <form className="container" onSubmit={handlesubmit}>
                <div className="card border-0" style={{ "textAlign": "left" }}>
                    <div className="card-body">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="form-group">
                                    {/* <label>ID</label>
                                    <input value={id} disabled="disabled" className="form-control"></input> */}
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    {/* <label>Medical Test Group</label> */}
                                    <input placeholder='Group Name' value={groupName} onChange={e => groupNamechange(e.target.value)} className="form-control mb-3"></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    {/* <label >Medical Test Name</label> */}
                                    <input placeholder='Number of Tests' value={numberOfTests} onChange={e => numberOfTestschange(e.target.value)} className="form-control mb-3 "></input>
                                </div>
                            </div>
                          
                            <div className="col-lg-12 text-center mt-2">
                                <div className="form-group">
                                    <button className="btn btn-primary rounded-0" type="submit">Add to Group Lists</button>
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

export default AddMedicalTestGroups