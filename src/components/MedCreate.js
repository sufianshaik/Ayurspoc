import React, { useState } from 'react';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai'

function MedCreate() {
    const [id, idchange] = useState("");
    const [testGroup, testGroupchange] = useState("");
    const [testName, testNamechange] = useState("");
    const [normalRange, normalRangechange] = useState("");
    const [units, unitschange] = useState("");
    const [trackable, trackablechange] = useState("NO");

    const navigate = useNavigate();


    const handlesubmit = (e) => {
        e.preventDefault();
        const meddata = { testGroup, testName, units, normalRange, trackable }
        // console.log({id,testGroup,testName,units,normalRange,trackable});
        fetch("http://localhost:1000/medicalList", {
            method: "POST",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(meddata)
        }).then((req) => {
            alert('Saved Succesfully');
            navigate('/Lists/MedicalTests');
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
                            <Link to="/Lists/MedicalTests" className="text-dark"><AiOutlineClose /></Link>
                        </div>
                    </Card.Title>
                    <hr />
                    {/*  form */}
                    <form className="container" onSubmit={handlesubmit}>
                        <div className="card border-0" style={{ "textAlign": "left" }}>
                            {/* <div className="card-title">
<h2>Add new Medical Test </h2>
</div> */}
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            {/* <label>ID</label> */}
                                            {/* <input value={id} disabled="disabled" className="form-control"></input> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            {/* <label>Medical Test Group</label> */}
                                            <input placeholder='Medical Test Group' value={testGroup} onChange={e => testGroupchange(e.target.value)} className="form-control mb-3"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            {/* <label >Medical Test Name</label> */}
                                            <input placeholder='Medical Test Name' value={testName} onChange={e => testNamechange(e.target.value)} className="form-control mb-3 "></input>
                                        </div>
                                    </div>
                                    {/* onMouseDown={e => testNamechange(true)} */}
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            {/* <label>Units</label> */}
                                            <input value={units} placeholder='Units' onChange={e => unitschange(e.target.value)} className="form-control mb-3"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            {/* <label>Normal Range</label> */}
                                            <input  placeholder='Normal Range' value={normalRange}  onChange={e => normalRangechange(e.target.value)} className="form-control mb-3"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group form-check ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={e => trackablechange("YES")}/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Trackabale 
                                            </label>
                
                                        </div>
                                    </div>
                                    <div className="col-lg-12 text-center mt-2">
                                        <div className="form-group">
                                            <button className="btn btn-primary rounded-0" type="submit">Add to List</button>
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

export default MedCreate