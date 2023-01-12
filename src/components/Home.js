import React from 'react'
import {Carousel, Form, Button,Container, Row, Col, ListGroup, Card } from 'react-bootstrap'
import welcome from '../images/welcome.svg'

function Home() {
  let stats = [
    {
      name: "Total Doctors",
      number: "1",
      id:1
    },
    {
      name: "Patients",
      number: "1",
      id:2
    },
    {
      name: "User Stories",
      number: "1" ,
      id:3
    },
    {
      name: "Testimonals",
      number: "1",
      id :4 
    },
    {
      name: "Payments",
      number: "This Month",
      id:5
    },
    {
      name: "Paid",
      number: "20",
      id:6
    },
    {
      name: "unpaid",
      number: "12",
      id:7
    },


  ]


  return (
    <div className='container m-5 w-75 img-fluid'>
      <p className='m-3'>Search for a Doctor </p>
      <Container>
        <Row>
          <Col>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <div className='mx-auto text-start m-5 '>
              <Card style={{ width: '18rem' }} className="shadow">
                <Card.Body>
                  <Card.Title className="text-center">Stats</Card.Title>
                  <hr />
                  <ListGroup>
                    {stats.map((element) => <p key={element.id}> {element.name} :- {element.number}</p>)}
                  </ListGroup>
                </Card.Body>
              </Card>
            </div>
          </Col>
          {/* 2nd col space for corousal  */}  
          <Col className='center img-fluid' style={{marginTop:"5.6rem" , position:"relative" , left:"16rem"}}> 
          <img src={welcome} className='img-fluid w-100 ' alt="" />
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home