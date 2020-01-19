import React from "react";
import {Card, CardHeader, Col, Container, Row} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import AllTransactionsTable from "../components/tiles/AllTransactionsTable";
import BuySellDividendRatioGraph from "../components/tiles/BuySellDividendRatioGraph";
import AccessApiWrapper from "../components/api/AccessApiWrapper";

var accessApiWrapper = new AccessApiWrapper();

class AllTransactionsScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: null,
            isLoaded: false
        }
    }

    componentWillMount() {
        accessApiWrapper.getData("/Transaction").then((result) => {
            let buyCount = 0;
            let sellCount = 0;
            let dividendCount = 0;

            result.forEach((x) => {
                if ((x.type) === "buy") buyCount++;
                if ((x.type) === "sell") sellCount++;
                if ((x.type) === "dividend") dividendCount++;
            });

            var chartData = {
                datasets: [
                    {
                        hoverBorderColor: "#ffffff",
                        data: [buyCount, sellCount, dividendCount],
                        backgroundColor: [
                            "rgba(0,123,255,0.6)",
                            "rgba(0,123,255,0.9)",
                            "rgba(0,123,255,0.2)"
                        ]
                    }
                ],
                labels: ["Buy", "Sell", "Dividend"]
            };

            this.setState({chartData, isLoaded: true});
        });
    }

    render() {
        const {isLoaded} = this.state;

        if (isLoaded)
            return (
                <Container fluid className="main-content-container px-4">
                    {/* Page Header */}
                    <Row noGutters className="page-header py-4">
                        <PageTitle sm="4" title="View All Transactions" subtitle="Transactions"
                                   className="text-sm-left"/>
                    </Row>

                    {/* List */}
                    <Row>
                        <Col lg="8" md="12" sm="12" className="mb-4">
                            <AllTransactionsTable/>
                        </Col>

                        {/* Ratio buy/sell */}
                        <Col lg="4" md="6" sm="12" className="mb-4">
                            <BuySellDividendRatioGraph chartData={this.state.chartData}/>
                        </Col>
                    </Row>
                </Container>
            );
        else return (
            <Container fluid className="main-content-container px-4">
                <Row noGutters className="page-header py-4">
                    <PageTitle sm="4" title="View All Transactions" subtitle="Transactions"
                               className="text-sm-left"/>
                </Row>
                <Row>
                    <Card small className="mb-4">
                        <CardHeader>
                            <h1 className="m-0">Loading...</h1>
                        </CardHeader>
                    </Card>
                </Row>
            </Container>
        );
    }
}

export default AllTransactionsScreen;
