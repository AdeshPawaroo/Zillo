import React from 'react';

class SessionForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  update(field) {
    return e => this.setState({
      [field]: e.currentTarget.value
    });
  }

  handleDemo() {
    this.setState({
      email: "demo@demo.com",
      password: "demo123"
    })
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

  render() {
    console.log(this.props);
    if (!this.props.errors) return null;
    return (
      <div className="login-form-container">
        <form onSubmit={this.handleSubmit} className="login-form-box">
         <p className="welcome">Welcome to Zillo</p>
          <br/>
          <div className="modal-type">
            {this.props.loginForm} {this.props.signupForm}
          </div>
          {/* <div onClick={this.props.closeModal} className="close-x">X</div> */}
          <div className="login-form">
            <br/>
            <br/>
            <label>Email
              < br/>
              <input type="text"
                value={this.state.email}
                onChange={this.update('email')}
                className="login-input"
              />
            </label>
            {this.handleEmailErr()}
            <br/>
            <br/>
            <label>Password
              <br />
              <input type="password"
                value={this.state.password}
                onChange={this.update('password')}
                className="login-input"
              />
            </label>
            {this.handlePasswordErr()}
            <br/>
            <br/>
            <input className="session-submit" type="submit" value={this.props.formType} />
            <br/>
            <br/>
            <br/>
            <div className="demo-container">
              <p>Or connect with:</p>
              <br/>
              <br/>
              <button onClick={this.handleDemo} className="demo-btn">Demo User</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

// export default withRouter(SessionForm);
export default SessionForm;
