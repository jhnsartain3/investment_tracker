import {Card, CardBody, CardHeader} from "shards-react";
import React, {Component} from "react";
import AccessApiWrapper from "../api/AccessApiWrapper";
import CustomFileUpload from "../common/CustomFileUpload";

var accessApiWrapper = new AccessApiWrapper();

class SubmitTransactionsFiles extends Component {
    constructor(props) {
        super(props);

        this.state = {
            buyButtonColorIsSelected: "primary",
            sellButtonColorIsSelected: "secondary",
            dividendButtonColorIsSelected: "secondary",
            quantityField: "",
            priceField: "",
            totalField: "",
            type: "buy",
            dateField: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.setFile = this.setFile.bind(this);
    }

    handleChange(event) {
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    setFile(event) {
        console.log(event.target.files);

        this.setState(
            {
                file: event.target.files[0]
            }
        )
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData();

        let data = this.state.file;

        formData.append('file', data)

        accessApiWrapper.postFormData("/TransactionFile", formData);
    }

    render() {
        return (
            <Card>
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Submit Transaction File</h6>
                </CardHeader>

                <CardBody className="mb-0">
                    <CustomFileUpload setFile={this.setFile} buttonClick={this.handleFormSubmit}/>
                </CardBody>
            </Card>
        );
    }
}

export default SubmitTransactionsFiles;
