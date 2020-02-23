import React, {Component} from "react";
import {Card, CardBody, CardHeader} from "shards-react";

class TotalEarningsByTicker extends Component {
    generateHeaders() {
        return this.props.headers.map((header) => (<th scope="col" className="border-0">{header}</th>));
    }

    generateRows() {
        return this.props.transactions.map((x, i) => (
                <tr>
                    <td>{x.name != null ? x.name.toUpperCase() : "Unknown"}</td>
                    <td>{x.ticker.toUpperCase()}</td>
                    <td>${x.totalProfit.toFixed(2)}</td>
                    <td>{x.totalProfitPercentage.toFixed(0)}%</td>
                </tr>
            )
        );
    }

    displayChart() {
        return (
            <Card small className="mb-4">
                <CardHeader className="border-bottom">
                    <h6 className="m-0">{this.props.title}</h6>
                </CardHeader>
                <CardBody className="p-0 pb-3">
                    <table className="table mb-0">
                        <thead className="bg-light">
                        <tr>
                            {this.generateHeaders()}
                        </tr>
                        </thead>
                        <tbody>
                        {this.generateRows()}
                        </tbody>
                    </table>
                </CardBody>
            </Card>
        )
    }

    render() {
        let {transactions} = this.props;

        if (transactions.length === 0)
            return (
                <Card small className="mb-4">
                    <CardHeader>
                        <h1 className="m-0">No Transactions Found</h1>
                    </CardHeader>
                </Card>
            );
        else if (transactions.length > 0)
            return this.displayChart();
    }
}

export default TotalEarningsByTicker;
