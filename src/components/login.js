import React, { Component } from "react";
import logo from "../logo192.jpg";
import "./login.css";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom'

class Login extends Component {
  handleSubmit = e => {
    e.preventDefault();
    console.log(e.target.email.value);

    if (!e.target.email.value) {
      alert("Email is required");
    } else if (!e.target.email.value) {
      alert("Valid email is required");
    } else if (!e.target.password.value) {
      alert("Password is required");
    } else if (
      e.target.email.value === "me@example.com" &&
      e.target.password.value === "123456"
    ) {
      alert("Successfully logged in");
      e.target.email.value = "";
      e.target.password.value = "";
    } else {
      alert("Wrong email or password combination");
    }
  };

  handleClick = e => {
    e.preventDefault();

    alert("Goes to registration page");
  };

  render() {
    return (
      <div className="Login">
    <br/>
    <br/>
      
      <img src="https://see.fontimg.com/api/renderfont4/2O7OX/eyJyIjoiZnMiLCJoIjo4MSwidyI6MTI1MCwiZnMiOjY1LCJmZ2MiOiIjMDAwMDAwIiwiYmdjIjoiI0ZGRkZGRiIsInQiOjF9/TUVDSCBPTiBTUE9U/tinchariot.png" className="title" alt="mech on spot title" />
      <br/>

        <img src={logo} className="logo" alt="mech on spot logo" />
        <form className="form" onSubmit={this.handleSubmit}>
          <div className="input-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" placeholder="nome@email.com.br" />
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" />
          </div>
          <button className="primary">Submit</button>
        </form>
        <button className="secondary" onClick={this.handleClick}>
          Sign up
        </button>
      </div>
    );
  }
}

export default Login;