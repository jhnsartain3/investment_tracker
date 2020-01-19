import React from "react";
import PropTypes from "prop-types";
import {Card, CardBody, CardFooter, CardHeader, Col, FormSelect, Row} from "shards-react";

import Chart from "../utils/chart";

class TopStocks extends React.Component {
    constructor(props) {
        super(props);

        this.canvasRef = React.createRef();
    }

    componentDidMount() {
        const chartConfig = {
            type: "pie",
            data: this.props.chartData,
            options: {
                ...{
                    legend: {
                        position: "bottom",
                        labels: {
                            padding: 25,
                            boxWidth: 20
                        }
                    },
                    cutoutPercentage: 0,
                    tooltips: {
                        custom: false,
                        mode: "index",
                        position: "nearest"
                    }
                },
                ...this.props.chartOptions
            }
        };

        new Chart(this.canvasRef.current, chartConfig);
    }

    render() {
        const {title} = this.props;
        return (
            <Card small className="h-100">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">{title}</h6>
                </CardHeader>
                <CardBody className="d-flex py-0">
                    <canvas
                        height="220"
                        ref={this.canvasRef}
                        className="blog-users-by-device m-auto"
                    />
                </CardBody>
                <CardFooter className="border-top">
                    <Row>
                        <Col>
                            <FormSelect
                                size="sm"
                                value="last-week"
                                style={{maxWidth: "130px"}}
                                onChange={() => {
                                }}
                            >
                                <option value="last-week">Last Week</option>
                                <option value="today">Today</option>
                                <option value="last-month">Last Month</option>
                                <option value="last-year">Last Year</option>
                            </FormSelect>
                        </Col>
                        <Col className="text-right view-report">
                            {/* eslint-disable-next-line */}
                            <a href="#">View full report &rarr;</a>
                        </Col>
                    </Row>
                </CardFooter>
            </Card>
        );
    }
}

TopStocks.propTypes = {
    /**
     * The component's title.
     */
    title: PropTypes.string,
    /**
     * The chart config object.
     */
    chartConfig: PropTypes.object,
    /**
     * The Chart.js options.
     */
    chartOptions: PropTypes.object,
    /**
     * The chart data.
     */
    chartData: PropTypes.object
};

TopStocks.defaultProps = {
    title: "Top Stocks",
    chartData: {
        datasets: [
            {
                hoverBorderColor: "#ffffff",
                data: [23.3, 53.3, 13.3],
                backgroundColor: [
                    "rgba(0,123,255,0.6)",
                    "rgba(0,123,255,0.9)",
                    "rgba(0,123,255,0.2)"
                ]
            }
        ],
        labels: ["Apple", "Amazon", "Waste Management"]
    }
};

export default TopStocks;
