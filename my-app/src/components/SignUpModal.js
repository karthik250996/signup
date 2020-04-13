import React from 'react';
import { Modal, Form } from 'react-bootstrap';

class Signup extends React.Component{
  state = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    displayErrMsg: false,
  }

  updateFormData(field, value) {
    console.log('fn')
    this.setState({ [field]: value });
  }

  validateForm = (state) => (state.firstName.length &&
    state.lastName.length && state.email.length && state.password.length)

  handleSubmit() {
    if (this.validateForm(this.state)) {
      this.props.setModalState(false)
    } else {
      this.setState({ displayErrMsg: true })
    }
  }

  render() {
    const props = this.props;
    const state = this.state;
    const Error  = this.state.displayErrMsg;
    return (
      <Modal className="sign-modal" show={props.modalState} onHide={() => props.setModalState(false)}>
        <Modal.Header closeButton>
          <Modal.Title className="form">Sign Up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
          <Form.Group className="form" controlId="formBasicFirstName">
              <Form.Label>First Name</Form.Label>
              <Form.Control type="text" placeholder="Enter FirstName"
               onChange={(e) => this.updateFormData('firstName', e.target.value)} />
               {(Error && !state.firstName.length) ? 
                <Form.Text className="err-text">
                  Please Enter First Name
                </Form.Text> : null}
          </Form.Group>

          <Form.Group className="form" controlId="formBasicLastName">
            <Form.Label>Last Name</Form.Label>
            <Form.Control type="text" placeholder="Enter LastName"
             onChange={(e) => this.updateFormData('lastName', e.target.value)} />
             {(Error && !state.lastName.length) ? 
                <Form.Text className="err-text">
                  Please Enter Last Name
                </Form.Text> : null}
          </Form.Group>

          <Form.Group className="form" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email"
             onChange={(e) => this.updateFormData('email', e.target.value)} />
             {(Error && !state.email.length) ? 
                <Form.Text className="err-text">
                  Please Enter Email
                </Form.Text> : null}
          </Form.Group>

          <Form.Group className="form" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password"
             onChange={(e) => this.updateFormData('password', e.target.value)} />
             {(Error && !state.password.length) ? 
                <Form.Text className="err-text">
                  Please Enter Password
                </Form.Text> : null}
          </Form.Group>
        </Form>
        </Modal.Body>
        <Modal.Footer>
          <button className="submit-btn" onClick={() => this.handleSubmit()}>
            Submit
          </button>
        </Modal.Footer>
      </Modal>
    )
  }
}

export default Signup;