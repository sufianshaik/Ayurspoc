import React from 'react'
import { useParams, NavLink } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
import Container from 'react-bootstrap/Container';
import Accordion from 'react-bootstrap/Accordion';
import Form from 'react-bootstrap/Form'
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
// import Form from 'react-bootstrap/Form'


function DoctorDetails(user) {
  let stats = [
    {
      name: "Number of patients",
      number: "32"
    },
    {
      name: "Website live ",
      number: "Yes,No"
    },
    {
      name: "URL Visits",
      number: "45"
    },
    {
      name: "Last Login",
      number: "Date"
    },
    {
      name: "No. of diet trackers sent",
      number: "40"
    },
    {
      name: "No. of testimonals ",
      number: "15"
    },
    {
      name: "No of User stories",
      number: "25"
    },
  ]

  var path = window.location.toString()
  //  console.log(path)
  var name = path.slice(38, path.length)
  if (name[0] == '/') {
    name = name.slice(1, name.length)
  }
  //  console.log(name)
  return (
    <div className='container mt-3'>
      {/* header part*/}
      <div className='d-flex justify-content-between'>
        <div>
          <h4>{name}</h4>
        </div>
        <div className=' '>
          <Button variant="secondary">View Website</Button>{' '}
          {/* <NavLink className="nav-link mt-1 " aria-current="page" to="">View</NavLink> */}
        </div>
      </div>
      
      <hr/>
      {/* header part ends */}
      <div className='mt-3'>
        <Container className=''>
          <h4 className=''>General</h4>
          <Row className='mt-2 mb-4 '>
            {/* d-flex justify-content-center */}
            <div className=''>
              <Card style={{ width: '24rem' }} className='shadow-lg border-0 rounded img-fluid img-responsive '>
                {/* <Card.Img variant="top" src="holder.js/100px180" /> */}
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                  <hr />
                  <div className=''>
                    <div className='d-flex justify-content-between w-50'>
                      <h6> Phone   :</h6>
                      <p>233112121</p>
                    </div>
                    <div className='d-flex justify-content-between w-75'>
                      <h6> Email   :</h6>
                      <p> {name}@gmail.com</p>
                    </div>
                  </div>
                  <h6>Address :</h6>
                  <div className='text-end'>
                    <Card style={{ width: '18rem' }} className="rounded-9 img-fluid">
                      <Card.Body>
                        <Card.Title>47th Avenue</Card.Title>
                        <hr />
                        <div className='lh-1'>
                          <Card.Text>
                            <p>Street No. 7</p>
                          </Card.Text>
                          <Card.Text>
                            <p>H.No : 45/91 </p>
                          </Card.Text>
                          <Card.Text>
                            <p>Hyderabad</p>
                          </Card.Text>
                          <Card.Text>
                            <p>Telangana </p>
                          </Card.Text>
                        </div>
                        <div className="d-flex justify-content-center">
                          <Button variant="primary">On Map</Button>
                        </div>
                      </Card.Body>
                    </Card>
                    <div className='d-flex -justify-content-around'>
                      <h6 className='mt-2'>Status :</h6>
                      <Col className="">
                        <div className='d-flex mx-auto'>
                          <p className='m-2 text-success'>Active</p>
                          <Form.Check className='mt-2'
                            type="switch"
                            id="custom-switch"
                          />
                          <p className='m-2 text-danger'>Archive</p>
                        </div>
                      </Col>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </div>
          </Row>


          <Row className='mt-2 mb-4'>
            <div className='text-start text-center'>
              <h4 className='text-start'>Activity</h4>
              <Card style={{ width: '22rem' }} className="border-0 shadow-lg">
                <Card.Body>
                  <Card.Title className="text-center"> Stats </Card.Title>
                  <hr />
                  {/* <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle> */}
                  {/* <Card.Text>
Some quick example text to build on the card title and make up the
bulk of the card's content.
</Card.Text> */}
                  <ListGroup>
                    {stats.map((element) => <p> {element.name} : {element.number} </p>)}
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
          </Row>
          <br/>
          <Row className='mt-2 mb-4'>
            <h4 className='text-start'>Payments</h4>
            <Card className='img-fluid w-50 border-0 shadow-lg rounded-3'>
              <div className='img-fluid'>
                <table className="table img-fluid ">
                  <thead>
                    <tr>
                      <th scope="col">Month</th>
                      <th scope="col">Payment</th>
                      <th scope="col">Date</th>
                      <th scope="col">Amount</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">September</th>
                      <td>
                        <>
                          <Form.Select className='w-50'>
                            <option className='text-success'>Paid</option>
                            <option className='text-danger'>Unpaid</option>
                          </Form.Select>
                        </>
                      </td>
                      <td>---</td>
                      <td>---</td>
                    </tr>
                    <tr>
                      <th scope="row">August</th>
                      <td>
                        <>
                          <Form.Select className='w-50'>
                            <option className='text-success'>Paid</option>
                            <option className='text-danger'>Unpaid</option>
                          </Form.Select>
                        </>
                      </td>
                      <td>02- 08 - 22</td>
                      <td>1000/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </Row>
        <br/>

          <div className='img-fluid mb-3 '>
            <h4 className='text-start'>Activity</h4>
            <Card className='w-50 img-fluid shadow-lg border-0'>
              <Row className='mt-2 p-1 m-1'>
                <div className='d-flex justify-content-between img-fluid'>
                  <p className=''> Send Password reset link </p>
                  <a className='' href="www.google.com">Link</a>
                </div>
              </Row>
            </Card>
          </div>

          <br/>
          <div>
            <h4 className='text-start'>Website URL Management</h4>
            <div className='shadow-lg border-0 img-fluid w-50 mb-3'>
              <Row className='mt-2 p-1 m-1'>
                <Col>
                  Website Live URL
                </Col>
                <Col>
                  <Button>View Website</Button>
                </Col>
              </Row >

              <br/>
              <div>
                <Row className='mt-2 p-1 m-1'>
                  <Col className="mt-2">
                    Control Live Status
                  </Col>
                  <Col className="">
                    <div className='d-flex mx-auto'>
                      <p className='m-2'>On</p>
                      <Form.Check className='mt-2'
                        type="switch"
                        id="custom-switch"
                      // label="Active/Inactive"
                      />
                      <p className='m-2'>Off</p>
                    </div>
                  </Col>
                </Row>
              </div>
            </div>
          </div>
          <div className='w-50'>
            <h4 className='text-start'>Activity</h4>
            <div className='img-fluid shadow-lg'>
              <Row className='mt-2 p-1 m-1'>
                <Col className="mt-2">
                  Control Access Status
                </Col>
                <Col className="">
                  <div className='d-flex mx-auto'>
                    <p className='m-2'>On</p>
                    <Form.Check className='mt-2'
                      type="switch"
                      id="custom-switch"
                    // label="Active/Inactive"
                    />
                    <p className='m-2'>Off</p>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Container>
      </div>
    </div>
  )
}

export default DoctorDetails