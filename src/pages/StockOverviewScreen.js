import React, {Component} from "react";
import {Col, Container, Row} from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import StockGraph from "../components/tiles/StockGraph";
import SubmitNewTransaction from "../components/tiles/SubmitNewTransaction";
import StockPickerDropdown from "../components/tiles/StockPickerDropdown";
import AccessApiWrapper from "../components/api/AccessApiWrapper";

const accessApiWrapper = new AccessApiWrapper();

class StockOverviewScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickerList: [],
            selectedTicker: "Stock Name"
        }
    }

    receiveStockTicker = (selectedTicker) => {
        this.setState({selectedTicker: selectedTicker});
    };

    componentDidMount() {
        accessApiWrapper.getData("/All-Time-Owned-Companies").then((result) => {
            this.setState({tickerList: result});
        });
    }

    render() {
        return (
            <Container fluid className="main-content-container px-4">
                {/* Page Header */}
                <Row noGutters className="page-header py-4">
                    <PageTitle title={this.state.selectedTicker.toUpperCase()} subtitle=""
                               className="text-sm-left mb-3"/>
                    <StockPickerDropdown onTickerSelected={this.receiveStockTicker} tickerList={this.state.tickerList}/>
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
    }
}

export default StockOverviewScreen;