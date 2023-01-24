import React, { useEffect } from 'react'
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import { Card } from 'react-bootstrap';
import { AiOutlineClose } from 'react-icons/ai'


function MedEdit() {
    const [testGroup, testGroupchange] = useState("");
    const [testName, testNamechange] = useState("");
    const [units, unitschange] = useState("");
    const [normalRange, normalRangechange] = useState("");
    const [trackable, trackablechange] = useState("NO");

    const navigate = useNavigate();
    const { medid } = useParams();

    useEffect(() => {
        fetch(`http://localhost:6001/list-api/editlist/${medid}`).then((res) => {
            return res.json();
        }).then((resp) => {
            testGroupchange(resp.testGroup);
            testGroupchange(resp.testGroup);
            testNamechange(resp.testName);
            unitschange(resp.units);
            normalRange(resp.normalRange);
            trackablechange(resp.trackable);
        }).catch((err) => {
            console.log(err.message);
        })
    }, [] )


   

    console.log(medid);
    const handlesubmit = (e) => {
        e.preventDefault();
        const meddata = {testGroup, testName, units, normalRange, trackable };

        fetch(`http://localhost:6001/list-api/editlist/${medid}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(meddata)
        }).then((req) => {
            alert('Saved Succesfully');
            navigate('/Lists/MedicalTests');
        }).catch((err) => {
            console.log(err.message);
        })
    }


    return (
        <div className='d-flex justify-content-center mt-4'>
            <Card className='w-50 img-fluid'>
                <Card.Body>
                    <Card.Title className='text-center'>
                        <div className='d-flex justify-content-between mt-2 mb-2'>
                            <p>Edit Medical Test</p>
                            <Link to="/Lists/MedicalTests" className="text-dark"><AiOutlineClose /></Link>
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
                                            {/* <label>ID</label> */}
                                            {/* <input value={id} disabled="disabled" className="form-control"></input> */}
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group mb-2">
                                            {/* <label>Medical Test Group</label> */}
                                
                                            <input placeholder="Medical Test Group" value={testGroup} onChange={e => testGroupchange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    {/* onMouseDown={e => testGroupchange(true)} */}
                                    <div className="col-lg-12">
                                        <div className="form-group mb-2">
                                            {/* <label >Medical Test Name</label> */}
                                            <input placeholder='Medical Test Name' value={testName} onChange={e => testNamechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group mb-2">
                                            {/* <label>Units</label> */}
                                            <input  placeholder='Units' value={units} onChange={e => unitschange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    
                                    <div className="col-lg-12">
                                        <div className="form-group mb-2">
                                            {/* <label>Normal Range</label> */}
                                            <input  placeholder='Normal Range' value={normalRange}  onChange={e => normalRangechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div>
                                    {/* <div className="col-lg-12">
                                        <div className="form-group mb-2">
                                           
                                            <input value={trackable} placeholder='Is Trackable ?' onChange={e => trackablechange(e.target.value)} className="form-control"></input>
                                        </div>
                                    </div> */}
                                    <div className="col-lg-12">
                                        <div className="form-group mb-2 form-check ">
                                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" onChange={(e) =>{
                                             
                                             if (trackable == "NO"){
                                                trackablechange("YES") 
                                             }
                                             else {
                                                trackablechange("NO") 
                                             }
                                        }                    
                                        }/>
                                            <label className="form-check-label" htmlFor="flexCheckDefault">
                                                Trackable 
                                            </label>
                                            {/* <label>Trackable</label> */}
                                        
                                            {/* <input className="form-check-input" type="checkbox" id="flexSwitchCheckDefault" onChange={e => trackablechange(e.target.value)}/>
                                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" placeholder='Is Trackabale ?'>D</label> */}
                                            
                                            {/* <input value={trackable} placeholder='Is Trackabale ?'  className="form-control mb-3"></input> */}
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

export default MedEdit