import React, {Component} from "react";
import {Col, Container, Row} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import TransactionTable from "../components/tiles/TransactionTable";
import AccessApiWrapper from "../components/api/AccessApiWrapper";

var accessApiWrapper = new AccessApiWrapper();

class AllTransactionsScreen extends Component {
    constructor() {
        super();
        this.state = {transactions: []};
    }

    componentWillMount() {
        var x = accessApiWrapper.getData("Transaction").then((W) => {
            console.log(W)
            this.setState({transactions:W})
        });
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="View All Transactions" subtitle="Transactions" className="text-sm-left"/>
                </Row>

                {/* List */}
                <Row>
                    <Col lg="8" md="12" sm="12" className="mb-4">
                        <TransactionTable chartData={this.state.transactions}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default AllTransactionsScreen;

function getTransactions(symbol) {
    var x = accessApiWrapper.getData("Transaction").then((W) => {
        console.log(W)
    });

    return [
        {
            date: "12/12",
            element2: "Sell",
            tickerNameShort: "AfAPL",
            quantity: "13",
            amountPerUnit: "$195.33",
            totalAmount: "$2539.29"
        },
        {
            element1: "12/12",
            element2: "Buy",
            element3: "AAPL",
            element4: "13",
            element5: "$195.33",
            element6: "$2539.29"
        }
    ]
}
