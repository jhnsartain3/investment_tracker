import React from "react";
import {Link} from "react-router-dom";
import {Collapse, Dropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink} from "shards-react";
import AuthenticationService from "../../../../authentication/services/AuthenticationService";

export default class UserActions extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            visible: false
        };

        this.toggleUserActions = this.toggleUserActions.bind(this);
    }

    toggleUserActions() {
        this.setState({
            visible: !this.state.visible
        });
    }

    render() {
        const AuthService = new AuthenticationService();

        return (
            <NavItem tag={Dropdown} caret toggle={this.toggleUserActions}>
                <DropdownToggle caret tag={NavLink} className="text-nowrap px-3">
                    <img
                        className="user-avatar rounded-circle mr-2"
                        src={require("../../../../assets/images/generic-user-icon.jpg")}
                        alt="User Avatar"
                    />{" "}
                    <span className="d-none d-md-inline-block">{AuthService.getProfile().given_name[0]}</span>
                </DropdownToggle>
                <Collapse tag={DropdownMenu} right small open={this.state.visible}>
                    <DropdownItem tag={Link} to="user-profile">
                        <i className="material-icons">&#xE7FD;</i> Account
                    </DropdownItem>
                    <DropdownItem tag={Link} to="edit-user-profile">
                        <i className="material-icons">&#xE8B8;</i> Settings
                    </DropdownItem>
                    <DropdownItem tag={Link} to="file-manager-list">
                        <i className="material-icons">&#xE2C7;</i> Files
                    </DropdownItem>
                    <DropdownItem tag={Link} to="transaction-history">
                        <i className="material-icons">&#xE896;</i> Transactions
                    </DropdownItem>
                    <DropdownItem divider/>
                    <DropdownItem tag={Link} to="/" className="text-danger" onClick={AuthService.logout}>
                        <i className="material-icons text-danger">&#xE879;</i> Logout
                    </DropdownItem>
                </Collapse>
            </NavItem>
        );
    }
}
