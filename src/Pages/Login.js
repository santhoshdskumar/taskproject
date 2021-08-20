import React, { Component } from 'react'
import { withRouter, Link } from "react-router-dom";
import axios  from 'axios';
import {Form, Button, FormControl, InputLabel, Card, Row, Col, CardGroup} from 'react-bootstrap';
import LoginImage from '../Assets/images/signin-image.webp';
class Login extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
       username: '',
       password: '',
       userName:'',
       userPwd:'',
    }
  }
  changeHandler = (e) => {
    this.setState({[e.target.name] : e.target.value})
  }
  submitHandler = e => {
    if (this.state.username === "" || this.state.password === "") {
      alert("Fields are required");
    }
    e.preventDefault();
    console.log(this.state);
    axios.get('https://sheet.best/api/sheets/e7f0a260-8463-4a69-81ac-bc154e203df7',
    this.state
    ).then(response => {
      let responseData = response.data;
      localStorage.setItem('responseData', JSON.stringify(responseData));
      let getLocalItem = localStorage.getItem("responseData");
      let parsedValue = JSON.parse(getLocalItem);
      console.log(parsedValue,'s');
      let userName, userPwd;
      parsedValue.map((item)=>{
       userName = item.username;
        userPwd = item.pasword;
      console.log( item.username);
      })
      console.log(userName);
      if(this.state.username == userName && this.state.password == userPwd) {
        alert('value matced');
          this.props.history.push("/weather");
      } else {
        alert('Provide Proper Login Details');
      }
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
        <img src={LoginImage}></img>
        <Link to="/signup">Create Account</Link>
        </Card>
        </Col>
        <Col>
      <Card>
        <h3>Sign In</h3>
      <Form  onSubmit={this.submitHandler}>
      <Form.Group className="mb-4" controlId="formBasicEmail">
        <Form.Control name="role" type="text"  placeholder="Your Name" name="username"  onChange={this.changeHandler}/>
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicPassword">
        <Form.Control type="password" name="password" placeholder="Password" onChange={this.changeHandler} />
      </Form.Group>
      <Form.Group className="mb-4" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember Me" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Log In
      </Button>
    </Form>
    </Card>
    </Col>
    </Row>
    </div>
    </div>
   )
  }
}

export default withRouter(Login);
