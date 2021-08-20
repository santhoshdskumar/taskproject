import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import axios  from 'axios';
import {Form, Button, FormControl, InputLabel, Card, Row, Col, CardGroup} from 'react-bootstrap';
import signup from '../Assets/images/signup-image.webp';
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       username: '',
       email: '',
       pasword: '',
       repassword: '',
       userName:'',
       userPwd:'',
    }
  }
  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }
  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    axios.post('https://sheet.best/api/sheets/e7f0a260-8463-4a69-81ac-bc154e203df7',
    this.state
    ).then(response => {
    }).catch(error => {
    });
    }
    
  render() {
    const { username, password } = this.state;
  return (
    <div className="cardContainer">
    <div className="innerContainer">
      <Row>
          <Col>
          <Card>
              
            <h3>Sign Up</h3>
            <Form  onSubmit={this.submitHandler}>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control  type="text"  placeholder="Your Name" name="username"  onChange={this.changeHandler}/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicEmail">
                <Form.Control type="email"  placeholder="Your Email" name="email"  onChange={this.changeHandler}/>
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" name="pasword" placeholder="Password" onChange={this.changeHandler} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicPassword">
                <Form.Control type="password" name="repassword" placeholder="Repeat your Password" onChange={this.changeHandler} />
            </Form.Group>
            <Form.Group className="mb-4" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" />I agree the statements in<a href="#">Terms and Conditions</a>
            </Form.Group>
            <Button variant="primary" type="submit">
                Register
            </Button>
            </Form>
    </Card>
    </Col>
        <Col>
                <Card>
                <img src={signup}></img>
                <Link to="/">I am already member</Link>
                </Card>
        </Col>
    </Row>
    </div>
    </div>
   )
  }
}

export default withRouter(Login);
