import React from 'react';
import { withRouter } from 'react-router-dom';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    const user = Object.assign({}, this.state);
    this.props.processForm(user).then(this.props.closeModal);
  }

  handlePasswordErr() { 
    if (this.props.errors["password"]) {
      return (
        "Password is too short!"
      )
    }
  }

  handleEmailErr() {
    if (this.props.errors["email"]) {
      return (
        "Email has already been taken!"
      )
    }
  }

  // handleSignIn() {
  //   this.props.formType
  // }

  // handleLogin() {
  //   this.props.otherForm
  // }

  render() {
    console.log(this.props);
    if (!this.props.errors) return null;
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
         <p className="welcome">Welcome to Zillo</p>
          <br/>
          Please {this.props.formType} or {this.props.otherForm}
          <div onClick={this.props.closeModal} className="close-x">X</div>
          <div className="login-form">
            <br/>
            <label>email:
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            {this.handleEmailErr()}
            <br/>
            <label>Password:
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            {this.handlePasswordErr()}
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
          </div>
        </form>
      </div>
    );
  }
}

// export default withRouter(SessionForm);
export default SessionForm;
