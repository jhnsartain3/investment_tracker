import React from "react";
import PropTypes from "prop-types";
import FormValidation from "../components/tiles/FormValidation";
import {Card, Col, Container, Row} from "shards-react";

const RegistrationScreen = ({smallStats}) => (
    <Container fluid className="main-content-container px-4 pb-4">
        <div className="error">
            <div className="error__content">
                <Row>
                    <Col lg="8" md="12" sm="12" className="mb-5">
                        <Card>
                            <FormValidation/>
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    </Container>
);

export default RegistrationScreen;
