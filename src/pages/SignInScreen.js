import React, {Component} from "react";
import AuthenticationService from "../authentication/services/AuthenticationService";
import LoginForm from "../authentication/components/LoginForm";

class SignInScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {username: "", password: "", isUsernameFieldValid: true, isPasswordFieldValid: true};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.onChange = this.onChange.bind(this);

        this.AuthService = new AuthenticationService();
    }

    componentWillMount() {
        if (this.AuthService.loggedIn()) {
            this.props.history.replace('/');
        }
    }

    handleSubmit = async event => {
        this.AuthService.login(this.state.username, this.state.password)
            .then(res => {
                if (res.length < 50) {
                    alert(res);
                    this.setState({isUsernameFieldValid: true, isPasswordFieldValid: true})
                } else {
                    this.props.history.replace('/');
                }
            })
            .catch(err => {
                this.setState({isUsernameFieldValid: false, isPasswordFieldValid: false})
            });
    };

    onChange = async event => {
        console.log(event.target.name);
        console.log(event.target.value);

        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    };

    render() {
        return (
            <div className="Login">
                <LoginForm onChange={this.onChange} onSubmit={this.handleSubmit}
                              isUsernameFieldValid={this.state.isUsernameFieldValid}
                              isPasswordFieldValid={this.state.isPasswordFieldValid}/>
            </div>
        );
    }
}

export default SignInScreen;
