import React from "react";
import {
    Button,
    Card,
    CardBody,
    Col,
    Form,
    FormFeedback,
    FormGroup,
    FormInput,
    FormSelect,
    Row
} from "shards-react";

const FormValidation = () => (
    <Card small className="h-100">
        <CardBody>
            <Form>
                <h5>Register</h5>

                <Row form>
                    <Col md="6" className="form-group">
                        <FormInput
                            placeholder="First name"
                            required
                            valid
                            onChange={() => {
                            }}
                        />
                        <FormFeedback valid>The first name looks good!</FormFeedback>
                    </Col>
                    <Col md="6" className="form-group">
                        <FormInput
                            placeholder="Last name"
                            required
                            valid
                            onChange={() => {
                            }}
                        />
                        <FormFeedback valid>The last name looks good!</FormFeedback>
                    </Col>
                </Row>
                <FormGroup>
                    <FormInput placeholder="Email" required invalid/>
                    <FormFeedback>The email is already in use.</FormFeedback>
                </FormGroup>
                <FormGroup>
                    <FormSelect invalid>
                        <option>Choose</option>
                        <option>California</option>
                        <option>Iowa</option>
                        <option>Indiana</option>
                    </FormSelect>
                    <FormFeedback>Please select your state</FormFeedback>
                </FormGroup>
                <Button theme="primary" className="mb-2 mr-1">
                    Register
                </Button>
            </Form>
        </CardBody>
    </Card>
);

export default FormValidation;
