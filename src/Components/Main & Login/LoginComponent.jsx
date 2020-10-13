import React, { Component } from 'react';
import UserService from '../../Services/UserService';
import * as Const from '../../Constants';

class LoginComponent extends Component {
    constructor(props){
        super(props)

        this.state = {
            fields: {},
            errors: {}
        }

        this.handleChange = this.handleChange.bind(this)
        this.signInValidation = this.signInValidation.bind(this)
    }

    handleChange = (e) => {
        let fields = this.state.fields;
        fields[e.target.name] = e.target.value

        this.setState({fields});
    }

    signInValidation = (s) => {
        s.preventDefault();

        if(this.validateSignIn()) {
            let fields = {};

            fields["userName"] = "";
            fields["password"] = "";

            this.setState({fields:fields});

            this.props.history.push('/dashboard');

        }
    }

    validateSignIn(){
        let fields = this.state.fields;
        let errors = {};
        let formIsValid = true;

        if(fields["userName"] == ''){
            formIsValid = false;
            alert("Username is Required!");
        }
        else if(fields["password"] == ''){
            formIsValid = false;
            alert("Password is Required!");
        }
        else if(fields["userName"] == 'admin'){
            alert("Admin");
        }

        return formIsValid;
    }

    render() {
        return (
            <div className = "text-center">
                <div className = "login-top">
                </div>
                <br/><br/>
                <form class="form-signin">
                    <img src = {require('./Img/logoA.jpg')} width="72" height="72"/> <br/><br/>
                    <h2 class="h3 mb-3 font-weight-normal">Sign In</h2> <br/>
                    <input type="email" class="form-control" placeholder="Username" value = {this.state.userName} onChange = {this.handleChange}/>
                    <input type="password" class="form-control" placeholder="Password" value = {this.state.password} onChange = {this.handleChange}/>
                    <div class="checkbox mb-3"> <label> <input type="checkbox" value="remember-me"/> Remember me </label> </div>
                    <a className={Const.mainButton} type="submit" onClick = {this.signInValidation}>Sign in</a>
                </form>
            </div>
        );
    }
}

export default LoginComponent;