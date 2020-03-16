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
            dateField: "",
            progressCounter: 0,
            successFileUploadMessages: [],
            errorFileUploadMessages: []
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
                file: event.target.files[0],
                fileCharacterEstimatedTimeToUpload: ((event.target.files[0].size / 50) / 13) * 1000
            }
        )
    }

    handleFormSubmit(event) {
        event.preventDefault();
        const formData = new FormData();

        let data = this.state.file;

        formData.append('transactionsFile', data);

        var fileCharacterEstimatedTimeToUpload = this.state.fileCharacterEstimatedTimeToUpload;

        setTimeout(() => {
            this.setState({progressCounter: 25});
        }, fileCharacterEstimatedTimeToUpload * .25);

        setTimeout(() => {
            this.setState({progressCounter: 50});
        }, fileCharacterEstimatedTimeToUpload * .50);

        setTimeout(() => {
            this.setState({progressCounter: 75});
        }, fileCharacterEstimatedTimeToUpload * .75);

        setTimeout(() => {
            this.setState({progressCounter: 100});
        }, fileCharacterEstimatedTimeToUpload * 1);

        accessApiWrapper.postFormData("/TransactionsFile", formData).then((result) => {
            this.setState({progressCounter: 100});

            if (result[0] === "Successfully Uploaded") this.setState({successFileUploadMessages: result});
            else this.setState({errorFileUploadMessages: result});
        });
    }

    render() {
        return (
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">Submit Transaction File</h6>
                </CardHeader>

                <CardBody className="mb-0">
                    <CustomFileUpload setFile={this.setFile} buttonClick={this.handleFormSubmit}
                                      progressCounter={this.state.progressCounter}
                                      successMessages={this.state.successFileUploadMessages}
                                      errorMessages={this.state.errorFileUploadMessages}/>
                </CardBody>
            </Card>
        );
    }
}

export default SubmitTransactionsFiles;
