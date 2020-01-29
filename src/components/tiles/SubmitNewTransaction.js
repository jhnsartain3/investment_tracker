import {
    Button,
    Card,
    CardHeader,
    Form,
    FormInput,
    InputGroup,
    InputGroupAddon,
    InputGroupText,
    ListGroup,
    ListGroupItem
} from "shards-react";
import React, {Component} from "react";
import AccessApiWrapper from "../api/AccessApiWrapper";
import ReactDatePicker from "react-datepicker";

var accessApiWrapper = new AccessApiWrapper();

class SubmitNewTransaction extends Component {
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
        this.handleTypeButtons = this.handleTypeButtons.bind(this);
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

        let data = {
            data: {
                price: parseFloat(this.state.priceField),
                total: parseFloat(this.state.totalField),
                quantity: parseInt(this.state.quantityField),
                type: this.state.type.toLowerCase(),
                ticker: this.props.ticker.toLowerCase(),
                date: this.state.dateField
            }
        };

        accessApiWrapper.postData("/Transaction", data);
    }

    handleTypeButtons(event) {
        event.preventDefault();

        if (event.target.name === "buyButton")
            this.setState({
                buyButtonColorIsSelected: "primary",
                sellButtonColorIsSelected: "secondary",
                dividendButtonColorIsSelected: "secondary"
            });

        if (event.target.name === "sellButton")
            this.setState({
                buyButtonColorIsSelected: "secondary",
                sellButtonColorIsSelected: "primary",
                dividendButtonColorIsSelected: "secondary"
            });

        if (event.target.name === "dividendButton")
            this.setState({
                buyButtonColorIsSelected: "secondary",
                sellButtonColorIsSelected: "secondary",
                dividendButtonColorIsSelected: "primary"
            });

        this.setState({type: event.target.name});
    }

    render() {
        return (
            <Card>
                <CardHeader className="border-bottom">
                    <h6 className="m-0">New Transaction</h6>
                </CardHeader>

                <ListGroup flush>
                    <ListGroupItem className="px-3">
                        <center className="mb-3">
                            <Button name="buy" pill theme={this.state.buyButtonColorIsSelected}
                                    onClick={this.handleTypeButtons}>Buy</Button>
                            <Button name="sell" pill theme={this.state.sellButtonColorIsSelected}
                                    onClick={this.handleTypeButtons}>Sell</Button>
                            <Button name="dividend" pill theme={this.state.dividendButtonColorIsSelected}
                                    onClick={this.handleTypeButtons}>Dividend</Button>
                        </center>

                        <div>
                            <label>Date</label>
                            <InputGroup className="mb-3">
                                <FormInput placeholder="11/12/2020" type="date" name="dateField" onChange={this.handleChange}/>
                            </InputGroup>

                            <label>Quantity</label>
                            <InputGroup className="mb-3">
                                <FormInput placeholder="3" name="quantityField" onChange={this.handleChange}/>
                            </InputGroup>

                            <label>Price</label>
                            <InputGroup className="mb-3">
                                <InputGroupAddon type="prepend">
                                    <InputGroupText>$</InputGroupText>
                                </InputGroupAddon>
                                <FormInput placeholder="$12.54" name="priceField" onChange={this.handleChange}/>
                            </InputGroup>

                            <label>Total</label>
                            <InputGroup className="mb-3">
                                <InputGroupAddon type="prepend">
                                    <InputGroupText>$</InputGroupText>
                                </InputGroupAddon>
                                <FormInput placeholder="$37.62" name="totalField" onChange={this.handleChange}/>
                            </InputGroup>
                        </div>

                        <Form>
                            <center>
                                <Button onClick={this.handleFormSubmit} theme="primary">Submit</Button>
                            </center>
                        </Form>
                    </ListGroupItem>
                </ListGroup>
            </Card>
        );
    }
}

export default SubmitNewTransaction;
