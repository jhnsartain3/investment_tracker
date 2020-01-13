import React from "react";
import PropTypes from "prop-types";

const Empty = ({children, noNavbar, noFooter}) => (
    <div>
        {children}
    </div>
);

Empty.propTypes = {
    /**
     * Whether to display the Navbar, or not.
     */
    noNavbar: PropTypes.bool,
    /**
     * Whether to display the footer, or not.
     */
    noFooter: PropTypes.bool
};

Empty.defaultProps = {
    noNavbar: false,
    noFooter: false
};

export default Empty;
