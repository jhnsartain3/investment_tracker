import React, {Component} from 'react';
import AuthenticationService from '../services/AuthenticationService';

export default function withAuthentication(AuthComponent) {
    const AuthService = new AuthenticationService();
    return class AuthWrapped extends Component {
        constructor() {
            super();
            this.state = {
                user: null
            }
        }

        componentDidMount() {
            if (!AuthService.loggedIn()) {
                this.props.history.replace('/login')
            } else {
                try {
                    const profile = AuthService.getProfile();
                    this.setState({
                        user: profile
                    })
                } catch (err) {
                    AuthService.logout();
                    this.props.history.replace('/login')
                }
            }
        }

        render() {
            if (this.state.user) {
                return (
                    <AuthComponent history={this.props.history} user={this.state.user}/>
                )
            } else {
                return null
            }
        }
    }
}
