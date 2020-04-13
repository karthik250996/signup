import React from 'react';
import { Modal, Form, Button } from 'react-bootstrap';

export default (props) => (
    <Modal show={props.modalState} onHide={() => props.setModalState(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder=" Enter FirstName" />
          </Form.Group>

          <Form.Group controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter LastName" />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
                  
        </Form>
        </Modal.Body>
        <Modal.Footer>
        <Button variant="primary" type="submit" onClick={() => props.setModalState(false)}>
            Submit
          </Button>
        </Modal.Footer>
      </Modal>
)