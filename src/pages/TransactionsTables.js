import React from "react";
import {Card, CardBody, CardHeader, Col, Container, Row} from "shards-react";

import PageTitle from "../components/common/PageTitle";

const TransactionsTables = () => (
    <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="View All Transactions" subtitle="Transactions" className="text-sm-left"/>
        </Row>

        {/* List */}
        <Row>
            <Col>
                <Card small className="mb-4">
                    <CardHeader className="border-bottom">
                        <h6 className="m-0">Active Users</h6>
                    </CardHeader>
                    <CardBody className="p-0 pb-3">
                        <table className="table mb-0">
                            <thead className="bg-light">
                            <tr>
                                <th scope="col" className="border-0">
                                    Date
                                </th>
                                <th scope="col" className="border-0">
                                    Type
                                </th>
                                <th scope="col" className="border-0">
                                    Name
                                </th>
                                <th scope="col" className="border-0">
                                    Quantity
                                </th>
                                <th scope="col" className="border-0">
                                    Price
                                </th>
                                <th scope="col" className="border-0">
                                    Total
                                </th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr>
                                <td>4/27/2017</td>
                                <td>Buy</td>
                                <td>Apple</td>
                                <td>1</td>
                                <td>$143.64</td>
                                <td>$143.64</td>
                            </tr>
                            <tr>
                                <td>4/27/2017</td>
                                <td>Buy</td>
                                <td>Starbucks</td>
                                <td>1</td>
                                <td>$61.23</td>
                                <td>$61.23</td>
                            </tr>
                            <tr>
                                <td>4/28/2017</td>
                                <td>Sell</td>
                                <td>Starbucks</td>
                                <td>1</td>
                                <td>$1433.64</td>
                                <td>$1433.64</td>
                            </tr>
                            <tr>
                                <td>4/28/2017</td>
                                <td>Buy</td>
                                <td>Apple</td>
                                <td>10</td>
                                <td>$143.64</td>
                                <td>$1430.64</td>
                            </tr>
                            </tbody>
                        </table>
                    </CardBody>
                </Card>
            </Col>
        </Row>
    </Container>
);

export default TransactionsTables;
