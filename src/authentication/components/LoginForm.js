import React, {Component} from "react";
import {Button, Card, CardBody, CardHeader, Form, FormFeedback, FormGroup, FormInput} from "shards-react";
import AuthenticationService from "../services/AuthenticationService";
import "../css/Login.css"

class LoginForm extends Component {
    constructor() {
        super();
        this.state = {username: "", password: "", usernameFieldIsValid: null, passwordFieldIsValid: null};

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.AuthService = new AuthenticationService();
    }

    componentWillMount() {
        if (this.AuthService.loggedIn()) {
            this.props.history.replace('/');
        }
    }

    render() {
        return (
            <div className="center">

                <Card className="mb-3">
                    <CardHeader className="border-bottom">
                        <h3 className="m-0">Investment Tracker</h3>
                    </CardHeader>
                    <CardBody>
                        <Form>
                            <FormGroup className="username">
                                <FormInput name="username" size="lg" placeholder="User Name" required
                                           invalid={this.state.usernameFieldIsValid}
                                           onChange={this.handleChange}/>
                                <FormFeedback>The username might be invalid</FormFeedback>
                            </FormGroup>
                            <FormGroup className="password">
                                <FormInput name="password" size="lg" placeholder="Password" required
                                           invalid={this.state.passwordFieldIsValid}
                                           onChange={this.handleChange}/>
                                <FormFeedback>The password might be invalid</FormFeedback>
                            </FormGroup>
                            <Button theme="primary" onClick={this.handleFormSubmit}>
                                Login
                            </Button>
                        </Form>
                    </CardBody>
                </Card>
            </div>
        );
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    handleFormSubmit(event) {
        event.preventDefault();

        this.AuthService.login(this.state.username, this.state.password)
            .then(res => {
                if (res.length < 50) {
                    alert(res);
                    this.setState({usernameFieldIsValid: true, passwordFieldIsValid: true})
                } else {
                    this.props.history.replace('/');
                }
            })
            .catch(err => {
                alert(err);
            });
    }
}

export default LoginForm;
