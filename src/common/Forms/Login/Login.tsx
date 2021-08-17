import React from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button'
import './Login.css'
import cuate from "./Images/cuate.png";
import Person from "@material-ui/icons/Person"
import Vpnkey from "@material-ui/icons/VpnKey"
import { Height } from '@material-ui/icons';

function Login() {
    return (
        <div style={{marginTop:"4vh" , height:"max-content"}}>
            <section className="section-main">
            <div className="loginform">
               
                <div className="cuate">
            <img src ={cuate} alt="cuate"></img>
           </div>
            <Form>
            <h3>Login</h3>
            <Form.Group className="mb-3" controlId="formBasicEmail">
               
                <Form.Label> <Person style ={{marginLeft:"15rem",marginBottom:"-5rem"}} /> </Form.Label>
 
                <Form.Control type="email" placeholder="Enter email " id="placeholder" />

                <Form.Text className="text-muted">
                We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label> <Vpnkey style ={{marginLeft:"15rem" , marginBottom:"-5rem"}} /> </Form.Label>
                <Form.Control type="password" placeholder="Password" id="placeholder" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="remember me" />
            </Form.Group>
            <Button variant="primary" type="submit" className="submit-btn">
                Submit
            </Button>
        </Form>
            </div>
            </section>
            </div>
       
   
    )
}

export default Login
