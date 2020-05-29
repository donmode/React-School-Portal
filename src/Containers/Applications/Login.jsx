import React, { Component } from "react";
import Form from "../../HOC/Form";
import SubmitButton from "../../Components/Buttons/SubmitButton";
import LoginForm from "../../Components/Forms/LoginForm";
import Aux from "../../HOC/AUX";
import {
  LoginProps,
  RemoveLoginProps,
  Login as ConfirmLogin,
} from "../../Redux/Actions/LoginActions";

import store from "../../Redux/Reducers";
import { connect } from "react-redux";

import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    let username = "";
    let isOpen = "";
    let contents = "";
    let status = "";
    if (props.location.state !== undefined) {
      username =
        props.location.state.username !== undefined
          ? props.location.state.username
          : username;
      isOpen =
        props.location.state.isOpen !== undefined
          ? props.location.state.isOpen
          : isOpen;
      contents =
        props.location.state.contents !== undefined
          ? props.location.state.contents
          : contents;
      status =
        props.location.state.status !== undefined
          ? props.location.state.status
          : status;
    }
    this.state = {
      username: username,
      isOpen: isOpen,
      contents: contents,
      correct_credentials: false,
      status: status,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }
  closeModal() {
    return this.setState({ isOpen: false });
  }
  handleChange(event) {
    const loginObj = { [event.target.name]: event.target.value };
    store.dispatch(LoginProps(loginObj));
  }
  async handleSubmit(event) {
    event.preventDefault();
    let form_field = {};
    form_field["username"] = this.props.login.username || this.state.username;
    form_field["password"] = this.props.login.password;
    const saved = await store.dispatch(ConfirmLogin(form_field));
    if (saved) {
      store.dispatch(RemoveLoginProps());
      this.setState({
        correct_credentials: true,
      });
    } else {
      this.setState({
        isOpen: true,
        contents: "Invalid Username/Password",
        status: "error",
      });
    }

    //PROCESS SUBMIT
  }
  render() {
    if (this.state.correct_credentials === true) {
      return <Redirect to={{ pathname: "/application-home" }} />;
    }
    let username = "";
    let password = "";
    if (this.props.login.username !== undefined) {
      username = this.props.login.username;
    } else {
      username = this.state.username;
    }
    if (this.props.login.password !== "undefined") {
      password = this.props.login.password;
    }
    return (
      <Aux
        isOpen={this.state.isOpen}
        closeModal={this.closeModal}
        contents={this.state.contents}
        status={this.state.status}
      >
        <Form onSubmit={this.handleSubmit}>
          <LoginForm
            handleChange={this.handleChange}
            username={username}
            password={password}
          />
          <SubmitButton />
        </Form>
      </Aux>
    );
  }
}

const mapStateToProps = function (store) {
  return {
    login: store.logins,
  };
};

export default connect(mapStateToProps)(Login);
