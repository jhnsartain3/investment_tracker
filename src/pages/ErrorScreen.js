import React from "react";
import {Button, Container} from "shards-react";
import {Link} from "react-router-dom";

const ErrorScreen = () => (
    <Container fluid className="main-content-container px-4 pb-4">
        <div className="error">
            <div className="error__content">
                <h2>Unable to find</h2>
                <h3>Either there was a problem on our end or this page is not available yet</h3>
                <p>Constantly improving. If this page worked in the past and is not working now please contact us.</p>
                <Button pill tag={Link} to="/">&larr; Return Home</Button>
            </div>
        </div>
    </Container>
);

export default ErrorScreen;
