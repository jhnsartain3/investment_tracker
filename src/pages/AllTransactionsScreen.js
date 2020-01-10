import React from "react";
import {Col, Container, Row} from "shards-react";

import PageTitle from "../components/common/PageTitle";
import TransactionTable from "../components/tiles/TransactionTable";

const AllTransactionsScreen = () => (
    <Container fluid className="main-content-container px-4">
        {/* Page Header */}
        <Row noGutters className="page-header py-4">
            <PageTitle sm="4" title="View All Transactions" subtitle="Transactions" className="text-sm-left"/>
        </Row>

        {/* List */}
        <Row>
            <Col lg="8" md="12" sm="12" className="mb-4">
                <TransactionTable/>
            </Col>
        </Row>
    </Container>
);

export default AllTransactionsScreen;
