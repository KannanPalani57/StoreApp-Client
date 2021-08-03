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
            <h3>Create new account</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
           
  {['radio'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
      <Form.Check
        inline
        label="customer"
        name="accountType"
        type='radio'
        id='customer'
      />
      <Form.Check
        inline
        label="seller"
        name="accountType"
        type='radio'
        id='seller'
      />
     
    </div>
  ))}

           
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="I agree" />
            </Form.Group>
            <Button variant="primary" type="submit">
                Submit
            </Button>
        </Form>
            </div>
            </section>
            
        </div>
    )
}

export default Register
