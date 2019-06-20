import React, { Component } from "react";
// import Loader from 'react-loader-spinner';

import { login } from "../actions";
import { connect } from "http2";

class Login extends Component {
  state = {
    creds: {
      username: "",
      password: ""
    }
  };

  handleChange = e => {
    this.setState({
      creds: {
        ...this.state.creds,
        [e.target.name]: e.targe.value
      }
    });
  };

  login = e => {
    e.preventDefault();
    this.props.login(this.state.creds).then(res => {
      if (res) {
        this.props.history.push("/friends");
      }
    });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.login}>
          <input
            type="text"
            name="username"
            value={this.state.creds.username}
            onChange={this.handleChange}
          />
          <input
            type="password"
            name="password"
            value={this.state.creds.password}
            onChange={this.handleChange}
          />
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  error: state.error,
  loggingIn: state.loggingIn
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
