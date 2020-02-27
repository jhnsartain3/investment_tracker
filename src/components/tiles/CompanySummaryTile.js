import {Card, CardBody, CardHeader} from "shards-react";
import React, {Component} from "react";

class CompanySummaryTile extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        console.log(this.props.summaryOfTransactions)

        return (
            <Card>
                <CardHeader className="border-bottom">
                    <h6 className="m-0">{this.props.ticker.toUpperCase()} Profit Summary</h6>
                </CardHeader>

                <CardBody>
                    <p>{this.props.name}</p>
                    <p>Total Profit: {"$" + this.props.totalProfit}</p>
                    <p>Total Profit Percentage: {this.props.totalProfitPercentage + "%"}</p>
                </CardBody>
            </Card>
        );
    }
}

export default CompanySummaryTile;
