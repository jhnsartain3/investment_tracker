import React, {Component} from "react";
import PropTypes from "prop-types";
import {Card, CardHeader, Col, Container, Row} from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import SmallStats from "./../components/common/SmallStats";
import StockGraph from "../components/tiles/StockGraph";
import TopStocks from "../components/tiles/TopStocks";
import AccessApiWrapper from "../components/api/AccessApiWrapper";

const accessApiWrapper = new AccessApiWrapper();

class DashboardOverviewScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            isHighestPerformingStockLoaded: false,
            isLowestPerformingStockLoaded: false,
            isTotalEarningsLoaded: false,
            highestPerformingStock: {},
            lowestPerformingStock: {},
            totalEarnings: {}
        }
    }

    componentDidMount() {
        accessApiWrapper.getData("/HighestPerformingStock").then((result) => {
            this.setState({
                    isHighestPerformingStockLoaded: true,
                    highestPerformingStock: result
                }
            );
        });

        accessApiWrapper.getData("/LowestPerformingStock").then((result) => {
            this.setState({
                    isLowestPerformingStockLoaded: true,
                    lowestPerformingStock: result
                }
            );
        });

        accessApiWrapper.getData("/TotalEarnings").then((result) => {
            this.setState({
                    isTotalEarningsLoaded: true,
                    totalEarnings: result
                }
            );
        });
    }

    render() {
        let {smallStats} = this.props;
        let {highestPerformingStock, lowestPerformingStock, totalEarnings, isHighestPerformingStockLoaded, isLowestPerformingStockLoaded, isTotalEarningsLoaded} = this.state;

        if (isHighestPerformingStockLoaded === true && isLowestPerformingStockLoaded === true && isTotalEarningsLoaded) {
            smallStats[0].label = "Highest Performer: " + highestPerformingStock.ticker;
            smallStats[0].value = "$" + highestPerformingStock.amount.toFixed(2);

            smallStats[1].label = "Total Earnings";
            smallStats[1].value = "$" + totalEarnings.amount.toFixed(2);

            smallStats[4].label = "Lowest Performer: " + lowestPerformingStock.ticker;
            smallStats[4].value = "$" + lowestPerformingStock.amount.toFixed(2);
            return (
                <Container fluid className="main-content-container px-4">
                    {/* Page Header */}
                    <Row noGutters className="page-header py-4">
                        <PageTitle title="Overview" subtitle="Dashboard" className="text-sm-left mb-3"/>
                    </Row>

                    {/* Small Stats Blocks */}
                    <Row>
                        {smallStats.map((stats, idx) => (
                            <Col className="col-lg mb-4" key={idx} {...stats.attrs}>
                                <SmallStats
                                    id={`small-stats-${idx}`}
                                    variation="1"
                                    chartData={stats.datasets}
                                    chartLabels={stats.chartLabels}
                                    label={stats.label}
                                    value={stats.value}
                                    percentage={stats.percentage}
                                    increase={stats.increase}
                                    decrease={stats.decrease}
                                />
                            </Col>
                        ))}
                    </Row>

                    <Row>
                        {/* Editor */}
                        <Col lg="8" md="12" sm="12" className="mb-4">
                            <StockGraph/>
                        </Col>
                        {/* Users by Device */}
                        <Col lg="4" md="6" sm="12" className="mb-4">
                            <TopStocks/>
                        </Col>
                    </Row>
                </Container>
            );
        } else {
            return (
                <Card small className="mb-4">
                    <CardHeader>
                        <h1 className="m-0">Loading</h1>
                    </CardHeader>
                </Card>
            )
        }
    }
}

DashboardOverviewScreen.propTypes = {
    /**
     * The small stats dataset.
     */
    smallStats: PropTypes.array
};

DashboardOverviewScreen.defaultProps = {
    smallStats: [
        {
            label: "Top Performer",
            value: "$210",
            percentage: "4.7%",
            increase: true,
            chartLabels: [null, null, null, null, null, null, null],
            attrs: {md: "6", sm: "6"},
            datasets: [
                {
                    label: "Today",
                    fill: "start",
                    borderWidth: 1.5,
                    backgroundColor: "rgba(0, 184, 216, 0.1)",
                    borderColor: "rgb(0, 184, 216)",
                    data: [1, 2, 1, 3, 5, 4, 7]
                }
            ]
        },
        {
            label: "Favorite Stock",
            value: "$198",
            percentage: "12.4",
            increase: true,
            chartLabels: [null, null, null, null, null, null, null],
            attrs: {md: "6", sm: "6"},
            datasets: [
                {
                    label: "Today",
                    fill: "start",
                    borderWidth: 1.5,
                    backgroundColor: "rgba(23,198,113,0.1)",
                    borderColor: "rgb(23,198,113)",
                    data: [1, 2, 3, 3, 3, 4, 4]
                }
            ]
        },
        {
            label: "Purchases This Month",
            value: "33",
            percentage: "3.8%",
            increase: true,
            chartLabels: [null, null, null, null, null, null, null],
            attrs: {md: "4", sm: "6"},
            datasets: [
                {
                    label: "Today",
                    fill: "start",
                    borderWidth: 1.5,
                    backgroundColor: "rgba(255,180,0,0.1)",
                    borderColor: "rgb(255,180,0)",
                    data: [2, 3, 3, 3, 4, 3, 3]
                }
            ]
        },
        {
            label: "Sells This Month",
            value: "29",
            percentage: ".05%",
            increase: false,
            decrease: true,
            chartLabels: [null, null, null, null, null, null, null],
            attrs: {md: "4", sm: "6"},
            datasets: [
                {
                    label: "Today",
                    fill: "start",
                    borderWidth: 1.5,
                    backgroundColor: "rgba(255,65,105,0.1)",
                    borderColor: "rgb(255,65,105)",
                    data: [3, 3, 3, 3, 3, 3, 2.75]
                }
            ]
        },
        {
            label: "Lowest Performer",
            value: "$154",
            percentage: "2.4%",
            increase: false,
            decrease: true,
            chartLabels: [null, null, null, null, null, null, null],
            attrs: {md: "4", sm: "6"},
            datasets: [
                {
                    label: "Today",
                    fill: "start",
                    borderWidth: 1.5,
                    backgroundColor: "rgb(0,123,255,0.1)",
                    borderColor: "rgb(0,123,255)",
                    data: [6, 2, 3, 2, 4, 5, 4]
                }
            ]
        }
    ]
};

export default DashboardOverviewScreen;
