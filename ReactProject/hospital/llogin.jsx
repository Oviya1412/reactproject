import React from 'react';
import { withRouter } from 'react-router-dom';

class Login extends React.Component {
  // ...

  Click = (event) => {
    event.preventDefault();
    // ...
    if (Locval1 === this.state.UserName && Locval2 === this.state.Password) {
      alert("LOGIN SUCCESSFULLY");
      this.props.history.push('/');
    } else {
      alert("Invalid Username or Password");
    }
  }

  render() {
    return (
      <div className="sty">
        <form onSubmit={this.Click}>
          {/* your form fields */}
        </form>
      </div>
    );
  }
}

export default withRouter(Login);