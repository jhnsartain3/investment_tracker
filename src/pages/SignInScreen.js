import React, {Component} from "react";
import AuthenticationService from "../authentication/services/AuthenticationService";
import LoginForm from "../authentication/components/LoginForm";

class SignInScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            username: "",
            password: "",
            isUsernameFieldValid: true,
            isPasswordFieldValid: true,
            helperTextPasswordField: "",
            helperTextUsernameField: ""
        };

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
        this.setState({
            isUsernameFieldValid: true,
            isPasswordFieldValid: true,
            helperTextPasswordField: "",
            helperTextUsernameField: ""
        });

        this.AuthService.login(this.state.username, this.state.password)
            .then(response => {
                    if (response.status > 299) {
                        if (response.errors.Username != null) {
                            this.setState({
                                isUsernameFieldValid: false,
                                helperTextUsernameField: response.errors.Username[0]
                            });
                        }

                        if (response.errors.Password != null) {
                            this.setState({
                                isPasswordFieldValid: false,
                                helperTextPasswordField: response.errors.Password[0]
                            });
                        }

                        return;
                    } else {
                        if (response === "No user with that username was found.") {
                            this.setState({
                                isUsernameFieldValid: false,
                                helperTextUsernameField: response
                            });

                            return;
                        }

                        if (response.includes("Password is not valid for username:")) {
                            this.setState({
                                isPasswordFieldValid: false,
                                helperTextPasswordField: response
                            });

                            return;
                        }
                    }
                    this.props.history.replace('/');
                }
            )
            .catch(error => {
                this.setState({isUsernameFieldValid: false, isPasswordFieldValid: false})
            });
    };

    onChange = async event => {
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
                           isPasswordFieldValid={this.state.isPasswordFieldValid}
                           helperTextPasswordField={this.state.helperTextPasswordField}
                           helperTextUsernameField={this.state.helperTextUsernameField}
                />
            </div>
        );
    }
}

export default SignInScreen;
