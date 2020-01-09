import React from "react";
import {Col, Container, Row} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import TransactionTable from "../components/tiles/TransactionTable";

const TransactionsTables = () => (
    <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="View All Transactions" subtitle="Transactions" className="text-sm-left"/>
        </Row>

        {/* List */}
        <Row>
            <Col>
                <TransactionTable/>
            </Col>
        </Row>
    </Container>
);

export default TransactionsTables;
