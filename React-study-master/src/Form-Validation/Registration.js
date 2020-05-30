import React from 'react';

class regForm extends React.Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            fullName: '',
            email: '',
            password: '',
            fullNameErr: [],
            emailErr: [],
            passwordErr: []
        }

    }
    clearForm = () => {
        this.setState({
            fullNameErr: [],
            emailErr: [],
            passwordErr: []
        })
    }
    validate = evt => {
        evt.preventDefault();
        this.clearForm();
        let fullNameAttr = this.state.fullName;
        let emailAttr = this.state.email;
        let passwordAttr = this.state.password;
        console.log(fullNameAttr, emailAttr);
        let fullNameErr = [];
        let emailErr = [];
        let passwordErr = [];
        if (fullNameAttr == "") {
          fullNameErr.push("Please enter the full name ");
        }
        if (fullNameAttr.length < 5) {
          fullNameErr.push("Length should be greater then 5");
        }
     
        if (emailAttr == "") {
          emailErr.push("Email can not be empty");
        }
        if (emailAttr.length < 5) {
          emailErr.push("Email should contain @ formate");
        }
        if (passwordAttr == "") {
          passwordErr.push("Password can not be empty ");
        }
        if (passwordAttr.length < 4) {
          passwordErr.push("Password should be of length 4 ");
        }
        if (this.state.password == "") {
          this.setState({
            passwordErr: "password can not be empty"
          });
        }
        this.setState({
          fullNameErr: fullNameErr,
          emailErr: emailErr,
          passwordErr: passwordErr
        });
      };
    
    render() {
        return (
            <div className="container">
                <form onSubmit={this.validate}>
                    <p>
                        Full Name :{" "}
                        <input className="form-control"
                            name="fullName"
                            onChange={evt =>
                                this.setState({
                                    fullName: evt.target.value
                                })
                            }
                            value={this.state.fullName}
                        />
                        <br />
                        <ul style={{ color: "red" }}>
                            {this.state.fullNameErr.map(err => {
                                return <li>{err}</li>;
                            })}
                        </ul>
                    </p>
                    <p>
                        Email :
            <input className="form-control"
                            name="email"
                            onChange={evt =>
                                this.setState({
                                    email: evt.target.value
                                })
                            }
                            value={this.state.email}
                        />
                        <br />
                        <ul style={{ color: "red" }}>
                            {this.state.emailErr.map(err => {
                                return <li>{err}</li>;
                            })}
                        </ul>
                    </p>

                    <p>
                        Password :
            <input
                            type="password"
                            name="password"
                            className="form-control"
                            onChange={evt =>
                                this.setState({
                                    password: evt.target.value
                                })
                            }
                            value={this.state.password}
                        />
                        <br />
                        <ul style={{ color: "red" }}>
                            {this.state.passwordErr.map(err => {
                                return <li>{err}</li>;
                            })}
                        </ul>
                    </p>

                    <p>
                        <button type="submit" onClick={this.validate} className="btn btn-success">Register</button>
                    </p>
                </form>
            </div>
        )
    }
}
export default regForm