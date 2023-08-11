import React from "react";
import { Button, } from "reactstrap";
import './index.css'
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
function Example() {
  
  return (
    <div style={{ padding: "12px 92px " }}>
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Full Name</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Email</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Mobile Number</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Address</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridCity">
            <Form.Label>City</Form.Label>
            <Form.Control />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridState">
            <Form.Label>State</Form.Label>
            <Form.Select defaultValue="Choose...">
              <option>Choose...</option>
              <option>...</option>
            </Form.Select>
          </Form.Group>

          <Form.Group as={Col} controlId="formGridZip">
            <Form.Label>Zip</Form.Label>
            <Form.Control />
          </Form.Group>
        </Row>

        <Row className="mb-3">
          <Form.Group as={Col} controlId="formGridEmail">
            <Form.Label>Upload Adhaar</Form.Label>
            <Form.Control type="file" placeholder="Enter email" />
          </Form.Group>

          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Uplaod Pan</Form.Label>
            <Form.Control type="file" placeholder="Password" />
          </Form.Group>
          <Form.Group as={Col} controlId="formGridPassword">
            <Form.Label>Uplaod Photo</Form.Label>
            <Form.Control type="file" placeholder="Password" />
          </Form.Group>
        </Row>
        <Form.Group className="mb-3" id="formGridCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>

        <Button style={{background:'orangered',color:'white',border:'0px solid'}} type="submit">
          Submit
        </Button>
      </Form>
    </div>
    // <>
    //   <div className="container">
    //     <div className="box box1">
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //     </div>
    //     <div className="box box1">
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //     </div>
    //     <div className="box box1">
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //     </div>
    //     <div className="box box1">
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //     </div>
    //     <div className="box box1">
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //     </div>
    //     <div className="box box1">
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //       <div className="child"></div>
    //     </div>
    //   </div>
    // </>
  );

}


export default Example;
