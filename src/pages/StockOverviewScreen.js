import React, {Component} from "react";
import {Col, Container, Row} from "shards-react";

import PageTitle from "./../components/common/PageTitle";
import StockGraph from "../components/tiles/StockGraph";
import SubmitNewTransaction from "../components/tiles/SubmitNewTransaction";
import StockPickerDropdown from "../components/tiles/StockPickerDropdown";
import AccessApiWrapper from "../components/api/AccessApiWrapper";
import AllTransactionsTable from "../components/tiles/AllTransactionsTable";
import CompanySummaryTile from "../components/tiles/CompanySummaryTile";

const accessApiWrapper = new AccessApiWrapper();

class StockOverviewScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            tickerList: [],
            transactions: [],
            selectedTicker: "Stock Name"
        }
    }

    receiveStockTicker = (selectedTicker) => {
        this.setState({selectedTicker: selectedTicker});

        accessApiWrapper.getData("/All-Transactions-By-Company/" + selectedTicker).then((result) => {
            this.setState({transactions: result});
        });

        accessApiWrapper.getData("/Company-Profit-Summary/" + selectedTicker).then((result) => {
            this.setState({summaryOfTransactions: result});
        });
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
                        <StockGraph title={this.state.selectedTicker.toUpperCase() + " Overview"}/>
                    </Col>

                    {/* Groups */}
                    <Col lg="3" md="6" sm="12" className="mb-4">
                        <SubmitNewTransaction ticker="test"/>
                    </Col>
                </Row>

                <Row>
                    <Col lg="8" md="12" sm="12" className="mb-4">
                        <AllTransactionsTable transactions={this.state.transactions}
                                              headers={["Date", "Type", "Ticker", "X", "Price", "Total"]}
                                              title={"All " + this.state.selectedTicker.toUpperCase() + " Transactions"}/>
                    </Col>

                    <Col lg="3" md="6" sm="12" className="mb-4">
                        <CompanySummaryTile
                            name={this.state.summaryOfTransactions != null && this.state.summaryOfTransactions.name != null ? this.state.summaryOfTransactions.name : "Stock Name"}
                            ticker={this.state.summaryOfTransactions != null && this.state.summaryOfTransactions.ticker != null ? this.state.summaryOfTransactions.ticker : "Ticker"}
                            totalProfit={this.state.summaryOfTransactions != null && this.state.summaryOfTransactions.name != null ? this.state.summaryOfTransactions.totalProfit.toFixed(2) : "Total Profit"}
                            totalProfitPercentage={this.state.summaryOfTransactions != null && this.state.summaryOfTransactions.name != null ? this.state.summaryOfTransactions.totalProfitPercentage : "Total Profit Percentage"}/>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default StockOverviewScreen;