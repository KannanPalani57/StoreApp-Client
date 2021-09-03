import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import './Register.css';

function Register() {
  return (

    <div>
      <section className="section-main">
        <div className="registerform">

          <Form>
            <h3 className="icon-svg">Register</h3>
            <Form.Group className="mb-3" controlId="formBasicUsername">
              <Form.Control type="username" placeholder="Username" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">

              <Form.Control type="email" placeholder="Email" />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>

            <Button className="submit-btn" type="submit">
              SIGNUP
            </Button>
          </Form>
        </div>
      </section >


    </div >


  )
}

export default Register
