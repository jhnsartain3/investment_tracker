import React from "react";
import PropTypes from "prop-types";
import {Col, Container, Row} from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import StockGraph from "../components/tiles/StockGraph";
import SubmitNewTransaction from "../components/tiles/SubmitNewTransaction";

const StockOverviewScreen = ({smallStats}) => (
    <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
            <PageTitle title="Some Stock Name" subtitle="" className="text-sm-left mb-3"/>
        </Row>

        <Row>
            {/* Editor */}
            <Col lg="9" md="12" sm="12" className="mb-4">
                <StockGraph/>
            </Col>

            {/* Groups */}
            <Col lg="3" md="6" sm="12" className="mb-4">
                <SubmitNewTransaction ticker="test"/>
            </Col>
        </Row>
    </Container>
);

StockOverviewScreen.propTypes = {
    /**
     * The small stats dataset.
     */
    smallStats: PropTypes.array
};

StockOverviewScreen.defaultProps = {
    smallStats: [
        {
            label: "Posts",
            value: "2,390",
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
            label: "Pages",
            value: "182",
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
            label: "Comments",
            value: "8,147",
            percentage: "3.8%",
            increase: false,
            decrease: true,
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
            label: "New Customers",
            value: "29",
            percentage: "2.71%",
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
                    data: [1, 7, 1, 3, 1, 4, 8]
                }
            ]
        },
        {
            label: "Subscribers",
            value: "17,281",
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
                    data: [3, 2, 3, 2, 4, 5, 4]
                }
            ]
        }
    ]
};

export default StockOverviewScreen;
