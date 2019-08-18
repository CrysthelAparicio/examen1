import React, { Component } from "react";

class Login extends Component {
    componentDidMount() {
        document.title = 'Fender';
        this.handleSubmit = this.handleSubmit.bind(this);
        this.read = this.read.bind(this);
    }
    handleSubmit(event) {
      event.preventDefault();
      const usuario = event.target[0].value;
      const password = event.target[1].value;
      window.localStorage.setItem('usuario', usuario);
      window.localStorage.setItem('password', password);
    }
    read() {
      const usuario = window.localStorage.getItem('usuario');
      const password = window.localStorage.getItem('password');
      console.log(usuario, password);
    }
    render() {
        return (
            <div>
              <div>
              <br />
              <br />
              <br />
              <br />
                <div className="ui one column centered grid">
                  <h1>Log In</h1>
                </div>
              </div>
              <br />
              <br />
              <br />
              <br />
              <div className="ui three column centered grid">
                <div className="ui placeholder segment">
                  <div className="ui two column very relaxed stackable grid">
                    <div className="column">
                      <form id="loginForm" className="ui form" onSubmit={this.handleSubmit}>
                        <div className="field">
                          <label>Username</label>
                          <div className="ui left icon input">
                            <input type="text" placeholder="Username" />
                            <i className="user icon" />
                          </div>
                        </div>
                        <div className="field">
                          <label>Password</label>
                          <div className="ui left icon input">
                            <input type="password" />
                            <i className="lock icon" />
                          </div>
                        </div>
                        <button className="ui teal submit button">Login</button>
                      </form>
                    </div> 
                    <div className="middle aligned column">
                      <button type="button" className="ui big button" onClick={this.read}>
                        <i className="signup icon" />
                        Sign Up
                      </button>
                    </div>
                  </div>
                  {/*<div className="ui vertical divider">Or</div>*/}
                </div>
              </div>
            </div>
          );
        }
      }
      
      export default Login;