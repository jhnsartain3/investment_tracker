import React from "react";
import PropTypes from "prop-types";
import {Container, Nav, NavItem, NavLink, Row} from "shards-react";
import {Link} from "react-router-dom";

const MainFooter = ({contained, menuItems, copyright}) => (
    <footer className="main-footer d-flex p-2 px-3 bg-white border-top">
        <Container fluid={contained}>
            <Row>
                <Nav>
                    {menuItems.map((item, idx) => (
                        <NavItem key={idx}>
                            <NavLink tag={Link} to={item.to}>
                                {item.title}
                            </NavLink>
                        </NavItem>
                    ))}
                </Nav>
                <span className="copyright ml-auto my-auto mr-2">{copyright}</span>
            </Row>
        </Container>
    </footer>
);

MainFooter.propTypes = {
    /**
     * Whether the content is contained, or not.
     */
    contained: PropTypes.bool,
    /**
     * The menu items array.
     */
    menuItems: PropTypes.array,
    /**
     * The copyright info.
     */
    copyright: PropTypes.string
};

MainFooter.defaultProps = {
    contained: false,
    copyright: "Sartain Studios",
    menuItems: [
        {
            title: "Home",
            to: "error-screen"
        },
        {
            title: "Services",
            to: "error-screen"
        },
        {
            title: "About",
            to: "error-screen"
        },
        {
            title: "Products",
            to: "error-screen"
        }
    ]
};

export default MainFooter;
