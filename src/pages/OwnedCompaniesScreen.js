import React from "react";
import {Card, CardHeader, Col, Container, Row} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import AccessApiWrapper from "../components/api/AccessApiWrapper";
import AllTransactionsByCompany from "../components/tiles/AllTransactionsByCompany";

const accessApiWrapper = new AccessApiWrapper();

class OwnedCompaniesScreen extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            chartData: null,
            isLoaded: false
        };

        this.determineChartData = this.determineChartData.bind(this);
    }

    determineChartData(result) {
        let buyCount = 0;
        let sellCount = 0;
        let dividendCount = 0;

        result.forEach((x) => {
            if ((x.type) === "buy") buyCount++;
            if ((x.type) === "sell") sellCount++;
            if ((x.type) === "dividend") dividendCount++;
        });

        return {
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
    }

    componentWillMount() {
        accessApiWrapper.getData("/all-companies-with-summary-of-transactions").then((result) => {
            result.forEach((x)=>{
                x.name = "Unknown"
                delete x.totalProfitPercentage
            });

            this.setState({
                    chartData: this.determineChartData(result),
                    isLoaded: true,
                    transactions: result,
                }
            );
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

                    <Row>
                        <Col lg="8" md="12" sm="12" className="mb-4">
                            <AllTransactionsByCompany transactions={this.state.transactions}
                                                      headers={["Name", "Ticker", "Total Profit"]}
                                                      title={"All Transactions by company"}/>
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

export default OwnedCompaniesScreen;
